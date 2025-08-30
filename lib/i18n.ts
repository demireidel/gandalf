"use client";
import React, { createContext, useContext, useState } from "react";
import en from "./locales/en.json";
import es from "./locales/es.json";

type Lang = 'en' | 'es';
const Dict: Record<Lang, any> = { en, es };

const I18nContext = createContext({ lang: 'en' as Lang, setLang: (l:Lang)=>{}, t: (k:string)=>k });
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const t = (k:string) => Dict[lang][k] ?? k;
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}
export function useI18n() { return useContext(I18nContext); }
