export type TourStep = {
  id: string;
  subtitle: string;
  camera: { target: [number,number,number]; position?: [number,number,number]; fov?: number; duration?: number };
  cutaways?: string[];
  hotspots?: string[];
  tts?: string;
};

export const tour: TourStep[] = [
  {
    id: "step-1",
    subtitle: "Welcome to Atucha II. We start outside: dome, turbine hall, intake/outfall.",
    camera: { target: [0,0,0], position: [10, 6, 10], fov: 55, duration: 2000 },
    hotspots: ["HS-CORE-001"]
  },
  {
    id: "step-2",
    subtitle: "Main Control Room: console islands and mimic panels.",
    camera: { target: [4, 1.2, 0], position: [7, 2.5, 6], fov: 50, duration: 2000 },
    hotspots: ["HS-MCR-001"]
  },
  {
    id: "step-3",
    subtitle: "Reactor core cutaway: calandria vessel, end-shields, and pressure-tube array (impostors).",
    camera: { target: [0, 0.6, 0], position: [4, 2.0, 4], fov: 50, duration: 2500 },
    cutaways: ["Calandria"],
    hotspots: ["HS-CORE-001"],
    tts: "Atucha Two uses a Siemens-designed pressurized heavy water reactor. The fuel channels are immersed in a large moderator tank called the calandria."
  }
];
