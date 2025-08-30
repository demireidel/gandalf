"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export function CanvasShell({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      shadows
      dpr={([1, 2] as any)}
      camera={{ position: [8, 6, 8], fov: 50 }}
    >
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
}
