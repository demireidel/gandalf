"use client";
import { CanvasShell } from "@/components/CanvasShell";
import { SceneRoot } from "@/components/SceneRoot";
import { TourHUD } from "@/components/TourHUD";
import dynamic from "next/dynamic";
const AtuchaExterior = dynamic(() => import("@/components/AtuchaExterior").then(m => m.AtuchaExterior), { ssr: false });
const AtuchaControlRoom = dynamic(() => import("@/components/AtuchaControlRoom").then(m => m.AtuchaControlRoom), { ssr: false });
const AtuchaCore = dynamic(() => import("@/components/AtuchaCore").then(m => m.AtuchaCore), { ssr: false });

export default function TourPage() {
  return (
    <main className="h-[100svh] w-full">
      <CanvasShell>
        <SceneRoot>
          <AtuchaExterior />
          <AtuchaControlRoom visible={false} />
          <AtuchaCore visible={false} />
        </SceneRoot>
      </CanvasShell>
      <TourHUD />
    </main>
  );
}
