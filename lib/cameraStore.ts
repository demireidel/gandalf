import { create } from 'zustand';

type CamState = {
  target: [number, number, number];
  position?: [number, number, number];
  fov?: number;
  duration?: number;
  trigger: number;
};

type Store = CamState & { focus: (s: Partial<CamState>) => void };

export const useCameraStore = create<Store>((set) => ({
  target: [0,0,0],
  position: undefined,
  fov: undefined,
  duration: 1200,
  trigger: 0,
  focus: (s) => set((prev) => ({
    target: s.target ?? prev.target,
    position: s.position ?? prev.position,
    fov: s.fov ?? prev.fov,
    duration: s.duration ?? prev.duration,
    trigger: prev.trigger + 1
  }))
}));
