"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Perf = dynamic(() => import("r3f-perf").then(m => m.Perf), { ssr: false });

export function PerfToggle() {
  const [on, setOn] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setOn(v => !v)}>{on ? "Hide HUD" : "Show HUD"}</button>
      {on && <Perf position="top-left" />}
    </>
  );
}
