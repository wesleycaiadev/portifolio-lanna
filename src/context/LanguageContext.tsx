"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  pt: {
    enterBtn: "ENTRAR NA EXPERIÊNCIA",
    heroTitle: "Filmmaker & Content Creator",
    aboutText: "Há 5 anos criando histórias, vendendo ideias e gravando tudo em alta resolução. Desde os meus 19 anos eu já sabia o que seria minha profissão, hoje, com 26, tenho certeza. Sou apaixonada por criar soluções inovadoras. Experiência em criação de conteúdo — loja de celular, acessórios, supermercado, ramo da beleza, clínica — e participei da parte criativa em campanha política. Acredito que as coisas acontecem por algum motivo, se eu cheguei até aqui foi para dar o meu melhor. Espero que nós possamos trabalhar juntos e crescer ainda mais.",
    navWork: "WORK",
    navContact: "CONTATO",
    tagline: "Filmmaker & Content Creator",
    scrollExplore: "Scroll para explorar",
    selectedWork: "TRABALHO SELECIONADO",
    accessInstagram: "Acesse o conteúdo clicando no ícone do instagram abaixo",
    viewOnInstagram: "Ver no Instagram",
    footerRights: "© 2025 Lanna Anjos. Todos os direitos reservados.",
    footerTagline: "Filmmaker & Content Creator",
    synopsisLabel: "Sinopse",
    aboutLabel: "Sobre",
    aboutHeading: "Há 5 anos criando histórias, vendendo ideias e gravando tudo em alta resolução.",
    aboutBody: "Desde os meus 19 anos eu já sabia o que seria minha profissão, hoje, com 26, tenho certeza. Sou apaixonada por criar soluções inovadoras. Experiência em criação de conteúdo — loja de celular, acessórios, supermercado, ramo da beleza, clínica — e participei da parte criativa em campanha política. Acredito que as coisas acontecem por algum motivo, se eu cheguei até aqui foi para dar o meu melhor. Espero que nós possamos trabalhar juntos e crescer ainda mais.",
  },
  en: {
    enterBtn: "ENTER THE EXPERIENCE",
    heroTitle: "Filmmaker & Content Creator",
    aboutText: "Creating stories, selling ideas, and recording everything in high resolution for 5 years. Since I was 19, I knew what my profession would be; today, at 26, I am certain. I am passionate about creating innovative solutions. Experience in content creation — mobile stores, accessories, supermarkets, the beauty industry, clinics — and I participated in the creative part of a political campaign. I believe things happen for a reason; if I made it this far, it was to give my best. I hope we can work together and grow even more.",
    navWork: "WORK",
    navContact: "CONTACT",
    tagline: "Filmmaker & Content Creator",
    scrollExplore: "Scroll to explore",
    selectedWork: "SELECTED WORK",
    accessInstagram: "Access the content by clicking on the Instagram icon below",
    viewOnInstagram: "View on Instagram",
    footerRights: "© 2025 Lanna Anjos. All rights reserved.",
    footerTagline: "Filmmaker & Content Creator",
    synopsisLabel: "Synopsis",
    aboutLabel: "About",
    aboutHeading: "For 5 years creating stories, selling ideas, and capturing everything in high resolution.",
    aboutBody: "Since I was 19 years old I already knew what my profession would be, today, at 26, I am sure of it. I am passionate about creating innovative solutions. Experienced in content creation — mobile stores, accessories, supermarkets, the beauty sector, clinics — and I participated in the creative side of a political campaign. I believe things happen for a reason; if I made it this far, it was to give my best. I hope we can work together and grow even more.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  // Recupera idioma salvo no primeiro render
  useEffect(() => {
    const saved = localStorage.getItem("preferred-language") as Language;
    if (saved === "pt" || saved === "en") {
      setLanguage(saved);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "en") {
        setLanguage("en");
      }
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      localStorage.setItem("preferred-language", next);
      return next;
    });
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
}
