import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "./content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (v: { pt: string; en: string }) => string };
const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const t = (v: { pt: string; en: string }) => v[lang];
  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}