"use client";
import { SettingsSheet } from "@/components/SettingsSheet";
export default function SettingsPage() {
  return (
    <main className="min-h-[100svh] grid place-items-center">
      <SettingsSheet defaultOpen />
    </main>
  );
}
