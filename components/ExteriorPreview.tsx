"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function Ground() {
  return (
    <mesh rotation-x={-Math.PI/2} receiveShadow>
      <planeGeometry args={[40, 40, 1, 1]} />
      <meshStandardMaterial color="#1c1c1c" />
    </mesh>
  );
}

export default function ExteriorPreview() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [6, 4, 6], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3,5,2]} intensity={1.2} castShadow />
      <Suspense fallback={null}>
        <group position={[0,0,0]}>
          {/* Dome */}
          <mesh position={[0,1.6,0]} castShadow>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial metalness={0.1} roughness={0.6} />
          </mesh>
          {/* Turbine Hall */}
          <mesh position={[2.2,0.6,0]} castShadow>
            <boxGeometry args={[2.6, 1.2, 1.4]} />
            <meshStandardMaterial metalness={0.0} roughness={0.9} color="#808080" />
          </mesh>
          <Ground />
          <Environment preset="city" />
        </group>
      </Suspense>
      <OrbitControls makeDefault enablePan enableZoom enableRotate />
    </Canvas>
  );
}
