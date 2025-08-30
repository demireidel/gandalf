"use client";
import React from "react";
import { CameraRig } from "@/components/CameraRig";
import { Environment, EffectComposer, Bloom } from "@react-three/drei";
// Note: Bloom from drei uses postprocessing under the hood; toggle via prop.

export function SceneRoot({ children, cinematic = false }: { children: React.ReactNode; cinematic?: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4,7,2]} intensity={1.3} castShadow />
      <Environment preset="city" />
      {children}
      <CameraRig />
      {cinematic && (
        // lightweight bloom
        // @ts-expect-error types from drei map to postprocessing
        <EffectComposer>
          <Bloom intensity={0.3} mipmapBlur />
        </EffectComposer>
      )}
    </>
  );
}
