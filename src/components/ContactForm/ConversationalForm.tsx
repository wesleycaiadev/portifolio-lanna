"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./ContactForm.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface FormData {
  name: string;
  projectType: string;
  budget: string;
  message: string;
  email: string;
}

const QUESTIONS_PT = [
  { id: "name", text: "Como devo te chamar?", placeholder: "Seu nome", type: "text" },
  { id: "projectType", text: "Qual o tipo de projeto?", placeholder: "Ex: Campanha, Videoclipe, Doc...", type: "text" },
  { id: "budget", text: "Qual a estimativa de budget?", placeholder: "Ex: R$10k - R$30k", type: "text" },
  { id: "message", text: "Conta um pouco sobre a ideia:", placeholder: "O conceito principal é...", type: "textarea" },
  { id: "email", text: "Qual seu melhor email?", placeholder: "voce@email.com", type: "email" },
];

const QUESTIONS_EN = [
  { id: "name", text: "What should I call you?", placeholder: "Your name", type: "text" },
  { id: "projectType", text: "What is the project type?", placeholder: "E.g., Campaign, Music Video, Doc...", type: "text" },
  { id: "budget", text: "What is your budget estimation?", placeholder: "E.g., $5k - $15k", type: "text" },
  { id: "message", text: "Tell me a bit about the idea:", placeholder: "The main concept is...", type: "textarea" },
  { id: "email", text: "What is your best email?", placeholder: "you@email.com", type: "email" },
];

export function ConversationalForm() {
  const { language } = useLanguage();
  const questions = language === "pt" ? QUESTIONS_PT : QUESTIONS_EN;

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    projectType: "",
    budget: "",
    message: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const questionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  // Foca no input toda vez que o step muda
  useEffect(() => {
    if (inputRef.current && !isSuccess) {
      inputRef.current.focus();
    }
  }, [step, isSuccess]);

  // Animação de entrada da nova pergunta
  useEffect(() => {
    if (questionRef.current && !isSuccess) {
      gsap.fromTo(questionRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [step, isSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [questions[step].id]: e.target.value }));
  };

  const handleNext = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    // Validação básica do step atual
    const currentVal = formData[questions[step].id as keyof FormData];
    if (!currentVal.trim()) return;

    if (step < questions.length - 1) {
      // Anima saída e muda step
      gsap.to(questionRef.current, {
        y: -30, opacity: 0, duration: 0.4, ease: "power3.in",
        onComplete: () => setStep(prev => prev + 1)
      });
    } else {
      submitForm();
    }
  };

  const submitForm = () => {
    setIsSubmitting(true);
    // Simula envio para API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Animação de sucesso
      gsap.fromTo(".successMsg", 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      );
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className={`${styles.container} ${styles.successContainer}`}>
        <h2 className={`successMsg ${styles.successTitle}`}>
          {language === "pt" ? "AÇÃO!" : "ACTION!"}
        </h2>
        <p className={`successMsg ${styles.successText}`}>
          {language === "pt" ? (
            <>Sua mensagem foi recebida.<br/> Entrarei em contato em breve para tirarmos isso do papel.</>
          ) : (
            <>Your message has been received.<br/> I'll be in touch shortly to bring this idea to life.</>
          )}
        </p>
      </div>
    );
  }

  const currentQ = questions[step];
  const currentValue = formData[currentQ.id as keyof FormData] || "";

  // Botões localizados
  const getBtnText = () => {
    if (isSubmitting) {
      return language === "pt" ? "Enviando..." : "Sending...";
    }
    if (step === questions.length - 1) {
      return language === "pt" ? "Enviar Convite" : "Send Invitation";
    }
    return language === "pt" ? "Próximo" : "Next";
  };

  return (
    <div className={styles.container}>
      {/* Progresso visual */}
      <div className={styles.progress}>
        {questions.map((_, i) => (
          <div key={i} className={`${styles.progressDot} ${i <= step ? styles.progressDotActive : ''}`} />
        ))}
      </div>

      <form onSubmit={handleNext} className={styles.form}>
        <div ref={questionRef} className={styles.questionBlock}>
          <label className={styles.questionText}>{currentQ.text}</label>
          
          {currentQ.type === "textarea" ? (
            <textarea
              ref={inputRef as React.RefObject<HTMLTextAreaElement>}
              className={styles.input}
              value={currentValue}
              onChange={handleChange}
              placeholder={currentQ.placeholder}
              rows={3}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleNext();
                }
              }}
            />
          ) : (
            <input
              ref={inputRef as React.RefObject<HTMLInputElement>}
              type={currentQ.type}
              className={styles.input}
              value={currentValue}
              onChange={handleChange}
              placeholder={currentQ.placeholder}
            />
          )}
        </div>

        <button 
          type="submit" 
          className={styles.nextBtn}
          disabled={!currentValue.trim() || isSubmitting}
          data-cursor="hover"
        >
          {getBtnText()}
        </button>
      </form>
    </div>
  );
}
