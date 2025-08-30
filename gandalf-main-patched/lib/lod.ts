export type LODTier = 'L0' | 'L1' | 'L2';
export const LOD_DISTANCES: Record<LODTier, number> = {
  L0: 10,
  L1: 30,
  L2: 100,
};
