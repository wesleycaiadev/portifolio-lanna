import type { Metadata } from "next";
import { DynamicThemeProvider } from "@/components/DynamicTheme/DynamicTheme";
import { LanguageProvider } from "@/context/LanguageContext";
import { MagneticCursor } from "@/components/MagneticCursor/MagneticCursor";
import { Nav } from "@/components/Navigation/Nav";
import { Footer } from "@/components/Footer/Footer";
import { inter, bebasNeue } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Lanna Anjos — Filmmaker & Content Creator",
  description: "Há 5 anos criando histórias, vendendo ideias e gravando tudo em alta resolução. Direção, Fotografia e Content Creation.",
  openGraph: {
    title: "Lanna Anjos — Filmmaker & Content Creator",
    description: "Há 5 anos criando histórias, vendendo ideias e gravando tudo em alta resolução. Direção, Fotografia e Content Creation.",
    images: [{ url: "https://cdn.myportfolio.com/fcd9c018-d503-43d4-99c4-be3629b07a30/03e88d17-dad0-4267-99a2-f1d00603dbe7_rwc_0x266x960x750x960.jpeg?h=a3a376cc62d22b7320485753b69c7f5f" }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body>

        <LanguageProvider>
          <DynamicThemeProvider>
            <Nav />
            {children}
            <Footer />
          </DynamicThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
