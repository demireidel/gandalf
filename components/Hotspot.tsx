import { Html } from "@react-three/drei";
"use client";
import React, { useState } from "react";

export function Hotspot({ title, sources = [] as string[] }: { title: string; sources?: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <group>
      {/* billboard-ish gizmo could be added here */}
      <HtmlButton onClick={() => setOpen(true)}>{title}</HtmlButton>
      {open && (
        <div className="fixed inset-0 bg-black/60 grid place-items-center" onClick={() => setOpen(false)}>
          <div className="max-w-md w-full bg-zinc-900 rounded-2xl p-4 space-y-2" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-semibold">Sources</h3>
            <ul className="list-disc pl-5 text-sm text-zinc-300">
              {sources.map(id => <li key={id}><code>{id}</code></li>)}
            </ul>
            <button className="btn" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </group>
  );
}

function HtmlButton({ children, onClick }:{ children: React.ReactNode; onClick?: ()=>void }) {
  return (
    <div
      onClick={onClick}
      className="select-none cursor-pointer rounded-xl bg-emerald-600 px-3 py-1 text-xs shadow-md hover:bg-emerald-500"
      style={{ position: "absolute", transform: "translate(-50%, -50%)" }}
    >
      {children}
    </div>
  );
}
