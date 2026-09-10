import React, { useEffect, useState } from 'react';

export default function LiveScannerHUD() {
  const [coords, setCoords] = useState({
    x: '184.230',
    y: '742.812',
    z: '42.159'
  });

  useEffect(() => {
    let baseX = 184.230;
    let baseY = 742.812;
    let baseZ = 42.159;

    const interval = setInterval(() => {
      const jitterX = (Math.random() * 0.01 - 0.005);
      const jitterY = (Math.random() * 0.01 - 0.005);
      const jitterZ = (Math.random() * 0.008 - 0.004);

      setCoords({
        x: (baseX + jitterX).toFixed(3),
        y: (baseY + jitterY).toFixed(3),
        z: (baseZ + jitterZ).toFixed(3)
      });
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-hud-card">
      <div className="hud-card-header">
        <span className="hud-label">LIVE SCANNER TELEMETRY</span>
        <span className="hud-status-indicator"></span>
      </div>
      <div className="hud-readout-grid">
        <div className="hud-readout-item">
          <span className="readout-axis">COORD_X</span>
          <span className="readout-value" id="hudCoordX">{coords.x}</span>
          <span className="readout-unit">mm</span>
        </div>
        <div className="hud-readout-item">
          <span className="readout-axis">COORD_Y</span>
          <span className="readout-value" id="hudCoordY">{coords.y}</span>
          <span className="readout-unit">mm</span>
        </div>
        <div className="hud-readout-item">
          <span className="readout-axis">COORD_Z</span>
          <span className="readout-value" id="hudCoordZ">{coords.z}</span>
          <span className="readout-unit">mm</span>
        </div>
      </div>
      <div className="hud-card-footer">
        <span className="hud-footer-tag">SENSOR: OPTICAL_TRIANGULATION</span>
        <span className="hud-footer-code">ST-2489</span>
      </div>
    </div>
  );
}
