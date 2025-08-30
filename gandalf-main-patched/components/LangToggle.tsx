"use client";
import React from "react";
import { useI18n } from "@/lib/i18n";

export function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="inline-flex rounded-xl overflow-hidden border border-zinc-700">
      <button className={`px-3 py-1 ${lang==='en'?'bg-zinc-700':''}`} onClick={()=>setLang('en')}>EN</button>
      <button className={`px-3 py-1 ${lang==='es'?'bg-zinc-700':''}`} onClick={()=>setLang('es')}>ES</button>
    </div>
  );
}
