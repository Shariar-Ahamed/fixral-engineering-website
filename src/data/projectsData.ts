export interface ProjectDetail {
  id: string;
  category: string;
  categories: string[];
  title: string;
  breadcrumb: string;
  tags: string;
  date: string;
  spec: string;
  desc: string;
  techHud: string;
  image: string;
  heroBanner: string;
  classification: string;
  storyHeadline: string;
  storyP1: string;
  storyP2: string;
  specs: Array<{ label: string; value: string }>;
  hudOverlayText: string;
  gallery: Array<{
    id: string;
    tag: string;
    caption: string;
    image: string;
  }>;
}

export const ALL_PROJECTS: ProjectDetail[] = [
  {
    id: 'project-porsche',
    category: 'restoration 3d-scan automotive',
    categories: ['restoration', '3d-scan', 'automotive'],
    title: 'Classic Porsche Body Restoration',
    breadcrumb: 'PORSCHE 911 RESTORATION',
    tags: 'VEHICLE RESTORATION / 3D SCANNING',
    date: 'SEPTEMBER 2026',
    spec: '±0.08 mm deviation tolerance',
    desc: 'Millimetric optical scanning and aerodynamic surface re-modeling of a rare 1974 Porsche 911 chassis for wind tunnel validation.',
    techHud: '[ SYS_OPTICAL_SCAN_ACTIVE ]',
    image: '/assets/images/portfolio/portfolio-phone-1-porsche.png',
    heroBanner: '/assets/images/project-detail/hero-banner.png',
    classification: 'CLASSIC RESTO // AERODYNAMIC OPT',
    hudOverlayText: 'OPTICAL_SCAN_ACTIVE // RESOLUTION: 0.05MM',
    storyHeadline: 'Rebirth of Classic Heritage Through Flawless Engineering',
    storyP1: 'Due to aging and mechanical wear, classic Porsche 911 replacement components that had become virtually impossible to source on the market were reverse-engineered through state-of-the-art metrology processes, faithful to original OEM factory specifications. Every element, from critical chassis mounting brackets to aerodynamic body panels, was subjected to high-resolution laser scanning.',
    storyP2: 'The resulting micron-level point cloud data was analyzed within a parametric CAD solid modeling environment and optimized with aerodynamic surface smoothing and structural stress reinforcements. In the final production phase, industrial SLA 3D printing technologies and high-precision multi-axis CNC machining methods were integrated seamlessly.',
    specs: [
      { label: 'Scanning Precision', value: '±0.05 mm' },
      { label: 'Manufactured Parts', value: '47 Units' },
      { label: 'Applied Technology', value: 'SLA + CNC 5-Axis' },
      { label: 'Timeline / Duration', value: '8 Weeks' },
      { label: 'Output Formats', value: 'STEP / STL / IGES' }
    ],
    gallery: [
      {
        id: 'porsche-lab-1',
        tag: '[ SCANNING ]',
        caption: 'Point Cloud Analysis',
        image: '/assets/images/project-detail/lab-1.png'
      },
      {
        id: 'porsche-lab-2',
        tag: '[ CAD ]',
        caption: 'Bracket Modeling',
        image: '/assets/images/project-detail/lab-2.png'
      },
      {
        id: 'porsche-lab-3',
        tag: '[ SLA PRINTING ]',
        caption: 'Layer Calibration',
        image: '/assets/images/project-detail/lab-3.png'
      },
      {
        id: 'porsche-lab-4',
        tag: '[ CMM ]',
        caption: 'Micron Tolerance Measurement',
        image: '/assets/images/project-detail/lab-4.png'
      }
    ]
  },
  {
    id: 'project-turbine',
    category: 'cad 3d-print',
    categories: ['cad', '3d-print'],
    title: 'Precision Aerospace Turbine Blade',
    breadcrumb: 'AEROSPACE TURBINE BLADE',
    tags: 'REVERSE ENGINEERING / SLS PRINTING',
    date: 'AUGUST 2026',
    spec: '20 micron SLS layer precision',
    desc: 'Micro-wear margin analysis of gas turbine blade geometry, aero-dynamic structural optimization, and flight-grade SLS 3D additive manufacturing.',
    techHud: '[ SYS_REV_ENG_TURBINE ]',
    image: '/assets/images/portfolio/portfolio-phone-2-turbine.png',
    heroBanner: '/assets/images/portfolio/portfolio-phone-2-turbine.png',
    classification: 'AEROSPACE FLIGHT-GRADE',
    hudOverlayText: 'OPTICAL_TRIANGULATION // PRECISION: 20 MICRON',
    storyHeadline: 'Aerodynamic Aerofoil Reconstruction with Micron-Level SLS Sintering',
    storyP1: 'Micro-wear margin analysis was conducted on high-temperature nickel-alloy gas turbine blades. Using non-destructive optical laser triangulation, thousands of surface wear points were mapped to restore degraded trailing edge airfoils back to nominal flight-certified contours.',
    storyP2: 'Parametric CFD fluid dynamic simulations verified laminar flow attachment across the blade pitch. The blade geometry was then produced utilizing flight-grade EOS selective laser sintering (SLS) with 20-micron layer resolution, followed by hot isostatic pressing (HIP) for complete structural integrity.',
    specs: [
      { label: 'Scanning Precision', value: '±0.015 mm' },
      { label: 'SLS Layer Thickness', value: '20 Micron' },
      { label: 'Applied Material', value: 'Inconel 718 / Titanium' },
      { label: 'Timeline / Duration', value: '6 Weeks' },
      { label: 'Output Formats', value: 'STEP / Parasolid / STL' }
    ],
    gallery: [
      {
        id: 'turbine-lab-1',
        tag: '[ SLS PRINTING ]',
        caption: 'Laser Sintering Additive Growth',
        image: '/assets/images/portfolio/portfolio-turbine.png'
      },
      {
        id: 'turbine-lab-2',
        tag: '[ CAD ]',
        caption: 'Airfoil Surface Reconstruction',
        image: '/assets/images/project-detail/lab-2.png'
      },
      {
        id: 'turbine-lab-3',
        tag: '[ CFD TESTING ]',
        caption: 'Laminar Airflow Simulation',
        image: '/assets/images/project-detail/lab-1.png'
      },
      {
        id: 'turbine-lab-4',
        tag: '[ CMM PROBE ]',
        caption: 'Coordinate Tolerance Certification',
        image: '/assets/images/project-detail/lab-4.png'
      }
    ]
  },
  {
    id: 'project-robotic-arm',
    category: 'cad 3d-print digital',
    categories: ['cad', '3d-print', 'digital'],
    title: 'Robotic Arm Joint Prototype',
    breadcrumb: 'ROBOTIC ARM JOINT',
    tags: 'CAD DESIGN / SLA PROTOTYPING',
    date: 'JULY 2026',
    spec: 'STL format certified validation',
    desc: 'Topology optimization and finite-element stress analysis to reduce payload weight for high-torque industrial robotic articulated arm joints.',
    techHud: '[ CAD_PARAMETRIC_OPTIMIZED ]',
    image: '/assets/images/portfolio/portfolio-phone-3-robot.png',
    heroBanner: '/assets/images/portfolio/portfolio-phone-3-robot.png',
    classification: 'INDUSTRIAL MECHATRONICS',
    hudOverlayText: 'FEM_TOPOLOGY_OPTIMIZED // TORQUE: 280NM',
    storyHeadline: 'Topology-Optimized Articulated Joint for High-Torque Robotics',
    storyP1: 'To reduce end-effector payload weight and inertia in rapid pick-and-place industrial robotic arms, our engineering team redesigned the elbow articulated joint mechanism through finite element method (FEM) topology optimization.',
    storyP2: 'Material volume was reduced by 34% while maintaining torsional rigidity under 280 Nm peak operating torque. Prototypes were validated using tough engineering photopolymer SLA resin for functional clearance fit checks before final aerospace-grade aluminum milling.',
    specs: [
      { label: 'Weight Reduction', value: '34% Mass Savings' },
      { label: 'Operating Torque', value: '280 Nm Certified' },
      { label: 'Applied Technology', value: 'SLA Resin + CNC 6061-T6' },
      { label: 'Timeline / Duration', value: '4 Weeks' },
      { label: 'Output Formats', value: 'STEP / SLDPRT / STL' }
    ],
    gallery: [
      {
        id: 'robot-lab-1',
        tag: '[ CAD TOPOLOGY ]',
        caption: 'Finite Element Stress Distribution',
        image: '/assets/images/portfolio/portfolio-robotic-arm.png'
      },
      {
        id: 'robot-lab-2',
        tag: '[ CLEARANCE ]',
        caption: 'Bearing Bore Micron Alignment',
        image: '/assets/images/project-detail/lab-2.png'
      },
      {
        id: 'robot-lab-3',
        tag: '[ SLA PROTOTYPE ]',
        caption: 'Translucent Photopolymer Fit Check',
        image: '/assets/images/project-detail/lab-4.png'
      },
      {
        id: 'robot-lab-4',
        tag: '[ DYNAMICS ]',
        caption: 'Kinematic Joint Range Validation',
        image: '/assets/images/project-detail/lab-1.png'
      }
    ]
  },
  {
    id: 'project-pump-impeller',
    category: 'cad 3d-scan',
    categories: ['cad', '3d-scan'],
    title: 'Industrial Pump Impeller Renewal',
    breadcrumb: 'PUMP IMPELLER RENEWAL',
    tags: 'REVERSE ENGINEERING / CMM ANALYSIS',
    date: 'JUNE 2026',
    spec: 'Original CAD matching allowance',
    desc: 'Micron-tolerance digital twin generated via CMM probe and 3D optical scanning for wear-resistant renewal manufacturing.',
    techHud: '[ CMM_ANALYSIS_VERIFIED ]',
    image: '/assets/images/portfolio/portfolio-phone-4-impeller.png',
    heroBanner: '/assets/images/portfolio/portfolio-phone-4-impeller.png',
    classification: 'HEAVY INDUSTRIAL HYDRO',
    hudOverlayText: 'CMM_COORDINATE_VERIFIED // DYNAMIC BALANCE G2.5',
    storyHeadline: 'Wear-Resistant Hydrodynamic Reconstruction via 5-Axis CMM',
    storyP1: 'A mission-critical slurry pump impeller had experienced cavitation pitting and severe vane erosion. With no original technical drawings in existence, Fixral engineers performed structured-light optical scanning combined with touch-probe coordinate measuring machine (CMM) metrology.',
    storyP2: 'Blade pitch curvature equations and hub balance profiles were mathematically reconstructed into a parametric solid model. The newly generated digital twin was balanced dynamically to eliminate hydraulic vibration, delivering extended operational lifespan in caustic operating conditions.',
    specs: [
      { label: 'Vane Tolerance', value: '±0.03 mm CMM Probed' },
      { label: 'Dynamic Balance', value: 'ISO 1940 Grade G2.5' },
      { label: 'Applied Technology', value: 'Optical Scan + 5-Axis CNC' },
      { label: 'Timeline / Duration', value: '3 Weeks' },
      { label: 'Output Formats', value: 'STEP / Native SolidWorks' }
    ],
    gallery: [
      {
        id: 'impeller-lab-1',
        tag: '[ 3D SCAN ]',
        caption: 'Cavitation Margin Digitization',
        image: '/assets/images/project-detail/lab-2.png'
      },
      {
        id: 'impeller-lab-2',
        tag: '[ CAD SOLID ]',
        caption: 'Hydrofoil Curve Interpolation',
        image: '/assets/images/project-detail/lab-1.png'
      },
      {
        id: 'impeller-lab-3',
        tag: '[ CMM METROLOGY ]',
        caption: 'Coordinate Probe Verification',
        image: '/assets/images/project-detail/lab-4.png'
      },
      {
        id: 'impeller-lab-4',
        tag: '[ BALANCING ]',
        caption: 'Rotational Vibration Analysis',
        image: '/assets/images/project-detail/lab-3.png'
      }
    ]
  },
  {
    id: 'project-lidar',
    category: 'cad 3d-print automotive',
    categories: ['cad', '3d-print', 'automotive'],
    title: 'Autonomous Vehicle LiDAR Sensor Box',
    breadcrumb: 'LIDAR SENSOR ENCLOSURE',
    tags: 'INDUSTRIAL DESIGN / SLA PRINTING',
    date: 'JUNE 2026',
    spec: 'IP67 environmental sealing',
    desc: 'Precision SLA resin casting of ruggedized autonomous vehicle LiDAR enclosure with integrated active cooling channels and weatherproofing.',
    techHud: '[ SLA_TRANS_RESIN_V3 ]',
    image: '/assets/images/portfolio/portfolio-lidar.png',
    heroBanner: '/assets/images/portfolio/portfolio-lidar.png',
    classification: 'AUTONOMOUS VEHICLE HARDWARE',
    hudOverlayText: 'ENVIRONMENTAL_SEAL // IP67 CERTIFIED',
    storyHeadline: 'Ruggedized IP67 Enclosure with Integrated Conformal Thermal Ducting',
    storyP1: 'Autonomous automotive perception suites require ultra-precise sensor alignment and environmental protection. Fixral engineered an aerodynamic, IP67 sealed sensor box with internal liquid-cooling microchannels for solid-state LiDAR units.',
    storyP2: 'Using high-temperature, UV-stable industrial SLA resins, complex internal duct geometries were printed monolithically without parting lines, ensuring zero leak paths under rigorous vibration and temperature cycling from -40°C to +85°C.',
    specs: [
      { label: 'Ingress Rating', value: 'IP67 Certified Seal' },
      { label: 'Temperature Range', value: '-40°C to +85°C Cycle' },
      { label: 'Applied Technology', value: 'High-Temp SLA Photopolymer' },
      { label: 'Timeline / Duration', value: '5 Weeks' },
      { label: 'Output Formats', value: 'STEP / STL / Parasolid' }
    ],
    gallery: [
      {
        id: 'lidar-lab-1',
        tag: '[ OPTICAL ALIGN ]',
        caption: 'Laser Emitter Window Planarity',
        image: '/assets/images/project-detail/lab-4.png'
      },
      {
        id: 'lidar-lab-2',
        tag: '[ SLA PRINTING ]',
        caption: 'Monolithic Enclosure Growth',
        image: '/assets/images/project-detail/lab-3.png'
      },
      {
        id: 'lidar-lab-3',
        tag: '[ CFD THERMAL ]',
        caption: 'Internal Coolant Flow Simulation',
        image: '/assets/images/project-detail/lab-2.png'
      },
      {
        id: 'lidar-lab-4',
        tag: '[ SEAL TEST ]',
        caption: 'Positive Pressure Leak Detection',
        image: '/assets/images/project-detail/lab-1.png'
      }
    ]
  },
  {
    id: 'project-prosthetic',
    category: 'cad 3d-print digital',
    categories: ['cad', '3d-print', 'digital'],
    title: 'Medical Prosthetic Hand Mechanism',
    breadcrumb: 'BIONIC PROSTHETIC HAND',
    tags: 'BIOMECHANICS / SLS PRINTING',
    date: 'MAY 2026',
    spec: '±0.05 mm articulated joint tolerance',
    desc: 'Monolithic functional selective laser sintering (PA12) of anthropomorphic bionic prosthetic hand mechanism with custom anatomical fitting.',
    techHud: '[ BIO_PA12_SINTERED ]',
    image: '/assets/images/portfolio/portfolio-prosthetic-hand.png',
    heroBanner: '/assets/images/portfolio/portfolio-prosthetic-hand.png',
    classification: 'BIO-GRADE MEDICAL DEVICE',
    hudOverlayText: 'MONOLITHIC_SLS // WEIGHT: 320G // BIO_PA12',
    storyHeadline: 'Anatomical Bionic Kinematics with Monolithic SLS Additive Sintering',
    storyP1: 'Developing an agile, lightweight prosthetic hand mechanism required eliminating bulky mechanical fasteners. Patient-specific anthropomorphic scans were digitized to create compliant living hinges and integrated tendon routing conduits.',
    storyP2: 'The entire 5-finger articulated hand mechanism was sintered as a single pre-assembled monolithic part using biocompatible Medical-Grade PA12 nylon via industrial SLS, drastically reducing weight to just 320 grams while increasing gripping torque.',
    specs: [
      { label: 'Total Weight', value: '320 grams' },
      { label: 'Joint Clearance', value: '±0.05 mm Sintered In-Place' },
      { label: 'Applied Material', value: 'Bio-Grade Polyamide PA12' },
      { label: 'Timeline / Duration', value: '7 Weeks' },
      { label: 'Output Formats', value: 'STEP / STL / 3MF' }
    ],
    gallery: [
      {
        id: 'prosthetic-lab-1',
        tag: '[ 3D SCAN ]',
        caption: 'Anatomical Patient Digitization',
        image: '/assets/images/project-detail/lab-1.png'
      },
      {
        id: 'prosthetic-lab-2',
        tag: '[ CAD KINEMATICS ]',
        caption: 'Tendon Tension & Joint Motion',
        image: '/assets/images/project-detail/lab-3.png'
      },
      {
        id: 'prosthetic-lab-3',
        tag: '[ SLS SINTERING ]',
        caption: 'Monolithic PA12 Layer Growth',
        image: '/assets/images/project-detail/lab-2.png'
      },
      {
        id: 'prosthetic-lab-4',
        tag: '[ LOAD TESTING ]',
        caption: 'Micron Actuator Grip Calibration',
        image: '/assets/images/project-detail/lab-4.png'
      }
    ]
  },
  {
    id: 'project-alfa',
    category: 'restoration 3d-scan cad automotive',
    categories: ['restoration', '3d-scan', 'cad', 'automotive'],
    title: 'Classic Alfa Romeo Dashboard Panel',
    breadcrumb: 'ALFA ROMEO DASHBOARD',
    tags: 'PLASTIC REPRODUCTION / CAD',
    date: 'APRIL 2026',
    spec: '1:1 original form guarantee',
    desc: 'High-resolution photogrammetric and optical scanning of sun-damaged 1968 classic Alfa Romeo dashboard components, followed by CAD mold recreation.',
    techHud: '[ REPRO_MOLD_SUCCESS ]',
    image: '/assets/images/portfolio/portfolio-alfa-romeo.png',
    heroBanner: '/assets/images/portfolio/portfolio-alfa-romeo.png',
    classification: 'HISTORIC AUTOMOTIVE HERITAGE',
    hudOverlayText: 'CLASS_A_SURFACE // OEM_FITMENT_GUARANTEED',
    storyHeadline: 'Sub-Millimeter Reconstruction of Sun-Damaged Heritage Instrument Cluster',
    storyP1: 'A brittle, warped 1968 classic Alfa Romeo instrument binnacle and ventilation assembly was digitally reconstructed. Surface laser photogrammetry captured every mounting tab, texture grain, and bezel retaining groove despite warping in the original part.',
    storyP2: 'Advanced CAD curvature continuity tools rebuilt clean Class-A surface geometry, correcting thermal warpage to restore original factory flush fitting. Injection mold tooling inserts were CNC-machined from the verified CAD data for final reproduction.',
    specs: [
      { label: 'Class-A Curvature', value: 'G2 Continuity Guaranteed' },
      { label: 'Form Accuracy', value: '1:1 OEM Fitment Margin' },
      { label: 'Applied Technology', value: 'Blue-Light Scan + High-Detail SLA' },
      { label: 'Timeline / Duration', value: '4 Weeks' },
      { label: 'Output Formats', value: 'STEP / IGES / STL' }
    ],
    gallery: [
      {
        id: 'alfa-lab-1',
        tag: '[ BLUE-LIGHT ]',
        caption: 'Warped Texture Photogrammetry',
        image: '/assets/images/project-detail/lab-1.png'
      },
      {
        id: 'alfa-lab-2',
        tag: '[ CAD CLASS-A ]',
        caption: 'Curvature Continuity Rebuild',
        image: '/assets/images/project-detail/lab-2.png'
      },
      {
        id: 'alfa-lab-3',
        tag: '[ SLA PROTOTYPE ]',
        caption: 'Cockpit Test-Fit Verification',
        image: '/assets/images/project-detail/lab-3.png'
      },
      {
        id: 'alfa-lab-4',
        tag: '[ MOLD TOOLING ]',
        caption: 'Multi-Axis CNC Insert Milling',
        image: '/assets/images/project-detail/lab-4.png'
      }
    ]
  }
];

export function getProjectById(id?: string): ProjectDetail {
  if (!id) return ALL_PROJECTS[0];
  const found = ALL_PROJECTS.find(
    (p) => p.id.toLowerCase() === id.toLowerCase() ||
           p.id.toLowerCase().replace('project-', '') === id.toLowerCase().replace('project-', '')
  );
  return found || ALL_PROJECTS[0];
}
