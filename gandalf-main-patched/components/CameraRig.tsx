"use client";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useCameraStore } from "@/lib/cameraStore";
import * as THREE from "three";

function lerp(a:number,b:number,t:number){ return a + (b-a)*t; }
function v3(a:THREE.Vector3,b:THREE.Vector3,t:number){ return new THREE.Vector3(lerp(a.x,b.x,t), lerp(a.y,b.y,t), lerp(a.z,b.z,t)); }
function ease(t:number){ return t<0.5? 2*t*t : -1 + (4 - 2*t)*t; }

export function CameraRig(){
  const controlsRef = useRef<any>(null);
  const { camera } = useThree();
  const state = useCameraStore();

  useEffect(()=>{
    const startP = camera.position.clone();
    const endP = new THREE.Vector3(...(state.position ?? [camera.position.x,camera.position.y,camera.position.z]));
    const startT = controlsRef.current?.target?.clone?.() ?? new THREE.Vector3(0,0,0);
    const endT = new THREE.Vector3(...(state.target ?? [0,0,0]));
    const startF = camera.fov;
    const endF = state.fov ?? camera.fov;
    const dur = Math.max(100, state.duration ?? 1200);
    let t0 = performance.now();
    let raf = 0;
    const tick = (now:number)=>{
      const t = Math.min(1, (now - t0)/dur);
      const k = ease(t);
      const p = v3(startP, endP, k);
      const trg = v3(startT, endT, k);
      camera.position.copy(p);
      camera.fov = lerp(startF, endF, k);
      camera.updateProjectionMatrix();
      if (controlsRef.current){ controlsRef.current.target.copy(trg); controlsRef.current.update(); }
      if (t<1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return ()=> cancelAnimationFrame(raf);
  }, [state.trigger]);

  return <OrbitControls ref={controlsRef} makeDefault enablePan enableZoom enableRotate />;
}
