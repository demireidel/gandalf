"use client";
import React, { useMemo } from "react";
import * as THREE from "three";

export function AtuchaCore({ visible = true, cutaways = [] as string[] }) {
  const matSteel = useMemo(() => new THREE.MeshStandardMaterial({ metalness: 0.6, roughness: 0.3 }), []);
  const matPaint = useMemo(() => new THREE.MeshStandardMaterial({ color: "#9aa3ad", metalness: 0.2, roughness: 0.6 }), []);

  if (!visible) return null;

  return (
    <group position={[0, 0.5, 0]}>
      {/* Calandria shell */}
      {!cutaways.includes("Calandria") && (
        <mesh castShadow>
          <cylinderGeometry args={[1.2, 1.2, 2.0, 48, 1]} />
          <meshStandardMaterial {...matSteel} />
        </mesh>
      )}
      {/* End shields (simplified) */}
      {!cutaways.includes("EndShields") && (
        <>
          <mesh position={[0, 1.1, 0]}>
            <capsuleGeometry args={[1.15, 0.2, 8, 24]} />
            <meshStandardMaterial {...matPaint} />
          </mesh>
          <mesh position={[0, -1.1, 0]} rotation={[Math.PI,0,0]}>
            <capsuleGeometry args={[1.15, 0.2, 8, 24]} />
            <meshStandardMaterial {...matPaint} />
          </mesh>
        </>
      )}
      {/* Fuel channel impostor grid */}
      {!cutaways.includes("Channels") && (
        <group position={[0,0,0]}>
          {Array.from({length: 15}).map((_, i) =>
            Array.from({length: 15}).map((_, j) => (
              <mesh key={`c-${i}-${j}`} position={[ (i-7)*0.15, (j-7)*0.15, 0 ]} rotation-x={Math.PI/2}>
                <cylinderGeometry args={[0.01, 0.01, 2.0, 6]} />
                <meshStandardMaterial color="#b7c2cc" />
              </mesh>
            ))
          )}
        </group>
      )}
      {/* Service ring / fueling head (simplified) */}
      {!cutaways.includes("FuelingHead") && (
        <mesh position={[0, 1.4, 0]}>
          <torusGeometry args={[0.9, 0.05, 12, 48]} />
          <meshStandardMaterial {...matSteel} />
        </mesh>
      )}
    </group>
  );
}
export default AtuchaCore;
