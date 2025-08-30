"use client";
import React, { useState } from "react";
import { LangToggle } from "@/components/LangToggle";

export function SettingsSheet({ defaultOpen = false }: { defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <>
      <button className="btn" onClick={() => setOpen(true)}>Settings</button>
      {open && (
        <div className="fixed inset-0 bg-black/60 grid place-items-center" onClick={() => setOpen(false)}>
          <div className="w-full max-w-lg rounded-2xl bg-zinc-900 p-4 border border-zinc-800" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Language</span><LangToggle />
              </div>
              <div className="flex items-center justify-between">
                <span>Subtitles</span><input type="checkbox" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span>Cinematic Lighting</span><input type="checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span>Perf HUD</span><input type="checkbox" />
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <button className="btn" onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
