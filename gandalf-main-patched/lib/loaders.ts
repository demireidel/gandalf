import { KTX2Loader } from "three-stdlib";
import { DRACOLoader } from "three-stdlib";
import { MeshoptDecoder } from "three-stdlib";

export function setupKTX2(renderer: any) {
  const loader = new KTX2Loader().setTranscoderPath('/workers/ktx2/');
  loader.detectSupport(renderer);
  return loader;
}
export function setupDRACO() {
  const loader = new DRACOLoader().setDecoderPath('/workers/draco/');
  return loader;
}
export async function setupMeshopt() {
  // MeshoptDecoder is loaded via three-stdlib re-export; path must exist in public/workers/meshopt
  // Three GLTFLoader will pick up global MeshoptDecoder if present.
  return MeshoptDecoder;
}
