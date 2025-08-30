export type Hotspot = {
  id: string;
  titleKey: string;
  bodyKey: string;
  position: [number, number, number];
  target?: [number, number, number];
  sourceIds: string[];
  media?: { type: "image" | "video" | "diagram"; src: string };
};
export const hotspots: Hotspot[] = [
  {
    id: "HS-CORE-001",
    titleKey: "hotspot.core.calandria.title",
    bodyKey: "hotspot.core.calandria.body",
    position: [0, 1.4, 0],
    target: [0, 1, 3],
    sourceIds: ["S01", "S02", "S11"]
  },
  {
    id: "HS-MCR-001",
    titleKey: "hotspot.mcr.islands.title",
    bodyKey: "hotspot.mcr.islands.body",
    position: [4, 1.2, 0],
    target: [6, 1.4, 4],
    sourceIds: ["S03", "S14"]
  }
];
