"use client";
import React from "react";
import { Text } from "@react-three/drei";

export function AtuchaControlRoom({ visible = true }: { visible?: boolean }) {
  if (!visible) return null;
  return (
    <group position={[4, 0, 0]}>
      {/* Shell */}
      <mesh position={[0,1.2,0]}>
        <boxGeometry args={[6, 2.4, 5]} />
        <meshStandardMaterial color="#2b2b2b" />
      </mesh>

      {/* Consoles islands */}
      {[ -1.8, 0, 1.8 ].map((x, idx) => (
        <group key={idx} position={[x, 0.6, 0]}>
          <mesh>
            <boxGeometry args={[1.4, 0.6, 3.6]} />
            <meshStandardMaterial color="#3a3a3a" />
          </mesh>
          <Text position={[0, 0.9, 1.6]} fontSize={0.18} maxWidth={1.2} anchorX="center" anchorY="middle" fontSize={0.18} maxWidth={1.2} anchorX=\"center\" anchorY=\"middle\" sdfGlyphSize={64} glyphGeometryDetail={64} renderOrder={10}>
            PANEL {idx+1}
          </Text>
        </group>
      ))}
    </group>
  );
}
export default AtuchaControlRoom;
