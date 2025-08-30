"use client";
import dynamic from "next/dynamic";
import { CanvasShell } from "@/components/CanvasShell";
import { SceneRoot } from "@/components/SceneRoot";
import { PerfToggle } from "@/components/PerfToggle";
import { SettingsSheet } from "@/components/SettingsSheet";
const AtuchaExterior = dynamic(() => import("@/components/AtuchaExterior").then(m => m.AtuchaExterior), { ssr: false });
const AtuchaControlRoom = dynamic(() => import("@/components/AtuchaControlRoom").then(m => m.AtuchaControlRoom), { ssr: false });
const AtuchaCore = dynamic(() => import("@/components/AtuchaCore").then(m => m.AtuchaCore), { ssr: false });

export default function ExplorePage() {
  return (
    <main className="h-[100svh] w-full">
      <CanvasShell>
        <SceneRoot>
          <AtuchaExterior />
          <AtuchaControlRoom visible={false} />
          <AtuchaCore visible={true} />
        </SceneRoot>
      </CanvasShell>
      <div className="fixed top-4 right-4 flex gap-2">
        <SettingsSheet />
        <PerfToggle />
      </div>
    </main>
  );
}
