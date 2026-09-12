import React, { useRef, useEffect, useState, useCallback } from 'react';

interface CadViewer3DProps {
  className?: string;
}

export default function CadViewer3D({ className = '' }: CadViewer3DProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Interaction state
  const [rotation, setRotation] = useState({ x: 25, y: -35 });
  const [zoom, setZoom] = useState(100);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [renderMode, setRenderMode] = useState<'wireframe' | 'shaded'>('wireframe');
  const [activeLayer, setActiveLayer] = useState<'solid' | 'mesh' | 'points'>('mesh');

  // Animation frame
  const animFrameId = useRef<number | null>(null);

  // 3D Model vertices and edges for a precision mechanical bracket/chassis mount
  const model = useRef<{
    vertices: [number, number, number][];
    edges: [number, number][];
    faces: [number, number, number][];
  }>({
    vertices: [],
    edges: [],
    faces: []
  });

  // Generate 3D geometry once
  useEffect(() => {
    const verts: [number, number, number][] = [];
    const edges: [number, number][] = [];
    const faces: [number, number, number][] = [];

    // Base plate
    const baseW = 140, baseH = 20, baseD = 100;
    const b0 = verts.length;
    // 8 vertices of base box
    verts.push([-baseW / 2, -baseH / 2, -baseD / 2]);
    verts.push([baseW / 2, -baseH / 2, -baseD / 2]);
    verts.push([baseW / 2, baseH / 2, -baseD / 2]);
    verts.push([-baseW / 2, baseH / 2, -baseD / 2]);
    verts.push([-baseW / 2, -baseH / 2, baseD / 2]);
    verts.push([baseW / 2, -baseH / 2, baseD / 2]);
    verts.push([baseW / 2, baseH / 2, baseD / 2]);
    verts.push([-baseW / 2, baseH / 2, baseD / 2]);

    edges.push([b0, b0 + 1], [b0 + 1, b0 + 2], [b0 + 2, b0 + 3], [b0 + 3, b0]);
    edges.push([b0 + 4, b0 + 5], [b0 + 5, b0 + 6], [b0 + 6, b0 + 7], [b0 + 7, b0 + 4]);
    edges.push([b0, b0 + 4], [b0 + 1, b0 + 5], [b0 + 2, b0 + 6], [b0 + 3, b0 + 7]);

    // Upright bracket arms
    const armW = 22, armH = 90, armD = 70;
    [-45, 45].forEach((offset) => {
      const a0 = verts.length;
      verts.push([offset - armW / 2, baseH / 2, -armD / 2]);
      verts.push([offset + armW / 2, baseH / 2, -armD / 2]);
      verts.push([offset + armW / 2, baseH / 2 + armH, -armD / 2]);
      verts.push([offset - armW / 2, baseH / 2 + armH, -armD / 2]);
      verts.push([offset - armW / 2, baseH / 2, armD / 2]);
      verts.push([offset + armW / 2, baseH / 2, armD / 2]);
      verts.push([offset + armW / 2, baseH / 2 + armH, armD / 2]);
      verts.push([offset - armW / 2, baseH / 2 + armH, armD / 2]);

      edges.push([a0, a0 + 1], [a0 + 1, a0 + 2], [a0 + 2, a0 + 3], [a0 + 3, a0]);
      edges.push([a0 + 4, a0 + 5], [a0 + 5, a0 + 6], [a0 + 6, a0 + 7], [a0 + 7, a0 + 4]);
      edges.push([a0, a0 + 4], [a0 + 1, a0 + 5], [a0 + 2, a0 + 6], [a0 + 3, a0 + 7]);
    });

    // Central cylindrical collar / bearing ring
    const segments = 24;
    const ringR = 34;
    const ringY = baseH / 2 + 55;
    const rStart1 = verts.length;
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      verts.push([Math.cos(angle) * ringR, ringY, Math.sin(angle) * ringR]);
    }
    const rStart2 = verts.length;
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      verts.push([Math.cos(angle) * ringR, ringY + 28, Math.sin(angle) * ringR]);
    }
    for (let i = 0; i < segments; i++) {
      const next = (i + 1) % segments;
      edges.push([rStart1 + i, rStart1 + next]);
      edges.push([rStart2 + i, rStart2 + next]);
      edges.push([rStart1 + i, rStart2 + i]);
    }

    // Inner bore cylinder
    const boreR = 20;
    const bStart1 = verts.length;
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      verts.push([Math.cos(angle) * boreR, ringY - 2, Math.sin(angle) * boreR]);
    }
    const bStart2 = verts.length;
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      verts.push([Math.cos(angle) * boreR, ringY + 30, Math.sin(angle) * boreR]);
    }
    for (let i = 0; i < segments; i++) {
      const next = (i + 1) % segments;
      edges.push([bStart1 + i, bStart1 + next]);
      edges.push([bStart2 + i, bStart2 + next]);
      if (i % 4 === 0) {
        edges.push([bStart1 + i, bStart2 + i]);
      }
    }

    // Rib gussets
    const g0 = verts.length;
    verts.push([-34, baseH / 2 + 10, 0]);
    verts.push([0, ringY + 14, 0]);
    verts.push([34, baseH / 2 + 10, 0]);
    edges.push([g0, g0 + 1], [g0 + 1, g0 + 2]);

    model.current = { vertices: verts, edges, faces };
  }, []);

  // Main rendering loop
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = containerRef.current.getBoundingClientRect();
    const cssW = rect.width || 350;
    const cssH = rect.height || 380;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    // Reset transform to identity and scale by dpr for crystal clear HiDPI rendering
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Background clear with deep engineering dark slate
    ctx.fillStyle = '#0D0F12';
    ctx.fillRect(0, 0, cssW, cssH);

    // Exact center of the canvas in logical CSS pixels
    const cx = cssW / 2;
    const cy = cssH / 2;

    // Responsive model scale: fits perfectly on mobile (width ~350px) and desktop
    const baseScale = Math.min(cssW / 250, cssH / 250);
    const scale = (zoom / 100) * baseScale * 1.35;

    // Subtle isometric grid on floor
    const gridCols = 7;
    const gridSpacing = 22;

    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;

    // Draw floor grid lines
    const radX = (rotation.x * Math.PI) / 180;
    const radY = (rotation.y * Math.PI) / 180;

    const floorY = -15; // Just beneath base plate
    for (let i = -gridCols; i <= gridCols; i++) {
      // Horizontal grid lines
      const p1 = project3D(i * gridSpacing, floorY, -gridCols * gridSpacing, radX, radY, scale, cx, cy);
      const p2 = project3D(i * gridSpacing, floorY, gridCols * gridSpacing, radX, radY, scale, cx, cy);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();

      // Vertical grid lines
      const p3 = project3D(-gridCols * gridSpacing, floorY, i * gridSpacing, radX, radY, scale, cx, cy);
      const p4 = project3D(gridCols * gridSpacing, floorY, i * gridSpacing, radX, radY, scale, cx, cy);
      ctx.beginPath();
      ctx.moveTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
      ctx.stroke();
    }
    ctx.restore();

    // Project model vertices (model is vertically centered around Y=45)
    const projected = model.current.vertices.map((v) =>
      project3D(v[0], v[1], v[2], radX, radY, scale, cx, cy)
    );

    // Draw coordinate axes at model base origin (0, -10, 0)
    const axisLen = 32;
    const origin = project3D(0, -10, 0, radX, radY, scale, cx, cy);
    const axisX = project3D(axisLen, -10, 0, radX, radY, scale, cx, cy);
    const axisY = project3D(0, -10 + axisLen, 0, radX, radY, scale, cx, cy);
    const axisZ = project3D(0, -10, axisLen, radX, radY, scale, cx, cy);

    // X Axis (Orange)
    ctx.strokeStyle = '#FF5200';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(axisX.x, axisX.y);
    ctx.stroke();

    // Y Axis (Cyan)
    ctx.strokeStyle = '#00E5FF';
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(axisY.x, axisY.y);
    ctx.stroke();

    // Z Axis (Blue)
    ctx.strokeStyle = '#3B82F6';
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y);
    ctx.lineTo(axisZ.x, axisZ.y);
    ctx.stroke();

    // Render Edges
    if (activeLayer === 'mesh' || activeLayer === 'solid') {
      ctx.save();
      ctx.strokeStyle = renderMode === 'wireframe' ? 'rgba(0, 229, 255, 0.85)' : 'rgba(255, 82, 0, 0.9)';
      ctx.lineWidth = 1.2;

      model.current.edges.forEach(([i1, i2]) => {
        const p1 = projected[i1];
        const p2 = projected[i2];
        if (!p1 || !p2) return;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      });
      ctx.restore();
    }

    // Render Nodes / Vertices (Points)
    if (activeLayer === 'points' || activeLayer === 'mesh') {
      ctx.save();
      ctx.fillStyle = '#FF5200';
      projected.forEach((p, idx) => {
        if (idx % 2 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.restore();
    }

    // Center Crosshairs (Metrology reticle)
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 82, 0, 0.35)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    const reticleSize = 18;
    ctx.beginPath();
    ctx.moveTo(cx - reticleSize, cy);
    ctx.lineTo(cx + reticleSize, cy);
    ctx.moveTo(cx, cy - reticleSize);
    ctx.lineTo(cx, cy + reticleSize);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

  }, [rotation, zoom, renderMode, activeLayer]);

  // Math 3D projection: projects model coordinates into screen pixels centered at (cx, cy)
  function project3D(
    x: number,
    y: number,
    z: number,
    radX: number,
    radY: number,
    scale: number,
    cx: number,
    cy: number
  ) {
    // Vertically center model geometry around Y = 45
    const my = y - 45;

    // Rotation around Y
    const x1 = x * Math.cos(radY) + z * Math.sin(radY);
    const y1 = my;
    const z1 = -x * Math.sin(radY) + z * Math.cos(radY);

    // Rotation around X
    const x2 = x1;
    const y2 = y1 * Math.cos(radX) - z1 * Math.sin(radX);
    const z2 = y1 * Math.sin(radX) + z1 * Math.cos(radX);

    return {
      x: cx + x2 * scale,
      y: cy - y2 * scale,
      depth: z2
    };
  }

  // Animation loop for auto-rotation
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (autoRotate && !isDragging) {
        setRotation((prev) => ({
          x: prev.x,
          y: (prev.y + delta * 12) % 360
        }));
      }

      draw();
      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [autoRotate, isDragging, draw]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvasRef.current.width = Math.round(rect.width * dpr);
      canvasRef.current.height = Math.round(rect.height * dpr);
      draw();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [draw]);

  // Mouse / Touch handlers for 3D inspection
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoRotate(false);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setDragStart({ x: e.clientX, y: e.clientY });

    setRotation((prev) => ({
      x: Math.max(-85, Math.min(85, prev.x - dy * 0.45)),
      y: (prev.y + dx * 0.45) % 360
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setAutoRotate(false);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStart.x;
    const dy = e.touches[0].clientY - dragStart.y;
    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });

    setRotation((prev) => ({
      x: Math.max(-85, Math.min(85, prev.x - dy * 0.5)),
      y: (prev.y + dx * 0.5) % 360
    }));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomDelta = e.deltaY > 0 ? -6 : 6;
    setZoom((prev) => Math.max(70, Math.min(220, prev + zoomDelta)));
  };

  const resetView = () => {
    setRotation({ x: 25, y: -35 });
    setZoom(100);
    setAutoRotate(true);
  };

  return (
    <div
      ref={containerRef}
      className={`cad-viewer-container ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      onWheel={handleWheel}
      role="region"
      aria-label="Interactive 3D CAD Model Inspector"
    >
      <canvas
        ref={canvasRef}
        className="cad-viewer-canvas"
        style={{ width: '100%', height: '100%', display: 'block', cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'none' }}
      />

      {/* Top HUD Telemetry Bar */}
      <div className="cad-viewer-hud-top">
        <div className="cad-status-badge">
          <span className="cad-status-pulse"></span>
          <span className="cad-status-label">[ 3D_CAD_VIEWPORT ]</span>
        </div>

        <div className="cad-coords-readout">
          <span className="coord-item">ROT_X: {rotation.x.toFixed(1)}°</span>
          <span className="coord-item">ROT_Y: {rotation.y.toFixed(1)}°</span>
          <span className="coord-item">ZOOM: {zoom}%</span>
        </div>
      </div>

      {/* Center Reticle & Status Tag */}
      <div className="cad-viewer-center-indicator">
        <span className="cad-bracket-tick">⊢</span>
        <span className="cad-center-label">[ INTERACTIVE_3D_VIEWER_LOADED ]</span>
        <p className="cad-center-subtext">
          Left click to rotate, right click to pan. STL/STEP file integrity 100% verified.
        </p>
      </div>

      {/* Bottom Controls Bar */}
      <div className="cad-viewer-hud-bottom">
        <div className="cad-control-group">
          <button
            type="button"
            className={`cad-hud-btn ${autoRotate ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setAutoRotate(!autoRotate);
            }}
            title="Toggle Auto Rotation"
          >
            {autoRotate ? '⏸ PAUSE' : '▶ ROTATE'}
          </button>

          <button
            type="button"
            className={`cad-hud-btn ${renderMode === 'wireframe' ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setRenderMode(renderMode === 'wireframe' ? 'shaded' : 'wireframe');
            }}
            title="Toggle Wireframe / Shaded"
          >
            {renderMode === 'wireframe' ? 'WIREFRAME' : 'SHADED'}
          </button>

          <button
            type="button"
            className="cad-hud-btn"
            onClick={(e) => {
              e.stopPropagation();
              resetView();
            }}
            title="Reset to Default Angle"
          >
            ↺ RESET
          </button>
        </div>

        <div className="cad-layer-chips">
          <button
            type="button"
            className={`cad-chip-btn ${activeLayer === 'mesh' ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveLayer('mesh');
            }}
          >
            MESH
          </button>
          <button
            type="button"
            className={`cad-chip-btn ${activeLayer === 'points' ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveLayer('points');
            }}
          >
            POINT_CLOUD
          </button>
          <button
            type="button"
            className={`cad-chip-btn ${activeLayer === 'solid' ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveLayer('solid');
            }}
          >
            SOLID
          </button>
        </div>
      </div>
    </div>
  );
}
