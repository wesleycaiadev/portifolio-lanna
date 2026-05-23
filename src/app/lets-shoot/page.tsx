import { ConversationalForm } from "@/components/ContactForm/ConversationalForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Shoot — Lanna Anjos",
  description: "Faça seu projeto audiovisual acontecer com Lanna Anjos.",
};

export default function LetsShootPage() {
  return (
    <main style={{ 
      minHeight: "100vh", 
      padding: "var(--space-32) var(--margin-cinematic)",
      backgroundColor: "var(--bg-primary)"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", marginBottom: "var(--space-16)" }}>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-hero)",
          color: "var(--text-primary)",
          lineHeight: "var(--leading-tight)",
          textTransform: "uppercase"
        }}>
          Let's Shoot.
        </h1>
        <p style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-xl)",
          color: "var(--text-secondary)",
          marginTop: "var(--space-4)"
        }}>
          Não é um contato. É o primeiro frame da nossa próxima obra.
        </p>
      </div>
      
      <ConversationalForm />
    </main>
  );
}
