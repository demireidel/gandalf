"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ExteriorPreview = dynamic(() => import("../../components/ExteriorPreview"), { ssr: false });

export default function Page() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-6 md:p-12">
      <div className="max-w-4xl text-center space-y-4">
        <h1 className="title">Atucha II — Production 3D Guided Tour</h1>
        <p className="subtitle">
          Visit the plant: exterior, Main Control Room, and reactor core. Guided Tour with subtitles & TTS, or Free Explore.
        </p>
      </div>

      <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-zinc-800">
        {mounted ? <ExteriorPreview /> : <div className="w-full h-full bg-zinc-900" />}
      </div>

      <div className="flex gap-4">
        <Link className="btn" href="/tour">Start Guided Tour</Link>
        <Link className="btn" href="/explore">Free Explore</Link>
        <Link className="btn" href="/settings">Settings</Link>
      </div>
    </main>
  );
}
