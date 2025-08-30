"use client";
import React, { useEffect, useState } from "react";
import { useCameraStore } from "@/lib/cameraStore";
import { tour } from "@/lib/tour";
import { tts } from "@/lib/tts";

export function TourHUD() {
  const [i, setI] = useState(0);
  const step = tour[i];

  useEffect(() => {
    if (step?.tts) tts(step.tts).catch(()=>{});
  }, [i]);

  return (
    <div className="fixed inset-x-0 bottom-0 p-4 md:p-6">
      <div className="mx-auto max-w-3xl rounded-2xl bg-zinc-900/80 backdrop-blur border border-zinc-800 p-4">
        <div className="text-sm text-zinc-300 mb-2">{step?.subtitle}</div>
        <div className="flex justify-between items-center">
          <button className="btn" onClick={() => setI(Math.max(0, i-1))}>Prev</button>
          <div className="text-sm">{i+1} / {tour.length}</div>
          <button className="btn" onClick={() => setI(Math.min(tour.length-1, i+1))}>Next</button>
        </div>
      </div>
    </div>
  );
}
