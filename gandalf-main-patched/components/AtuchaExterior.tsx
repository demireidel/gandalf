"use client";
import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import * as THREE from "three";

export function AtuchaExterior() {
  const gltf = useLoader(GLTFLoader, "/assets/glb/exterior_low.glb");
  return (
    <group>
      <primitive object={gltf.scene} position={[0,0,0]} />
      <mesh rotation-x={-Math.PI/2} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color={"#0f0f0f"} />
      </mesh>
      {/* cheap water patch */}
      <mesh position={[ -20, 0.02, -10 ]} rotation-x={-Math.PI/2}>
        <planeGeometry args={[60, 40, 1, 1]} />
        <meshPhysicalMaterial color="#1b2a3a" metalness={0.0} roughness={0.2} transmission={0.0} />
      </mesh>
    </group>
  );
}
export default AtuchaExterior;
