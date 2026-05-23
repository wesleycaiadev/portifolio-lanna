"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Nav.module.css";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useMagneticEffect<HTMLAnchorElement>({ strength: 0.2, radius: 80 });
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className={`${styles.header} nav-container`} id="main-nav">
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" ref={logoRef} className={styles.logo} data-cursor="hover">
          <span className={styles.logoText}>LANNA</span>
          <span className={styles.logoDot} />
        </Link>

        {/* Desktop Links & Language */}
        <div className={styles.desktopNavGroup}>
          <ul className={styles.links}>
            <li>
              <Link href="/" className={styles.link} data-cursor="hover">
                <span className={styles.linkText}>{t("navWork")}</span>
                <span className={styles.linkLine} />
              </Link>
            </li>
            <li>
              <Link href="/lets-shoot" className={styles.link} data-cursor="hover">
                <span className={styles.linkText}>{t("navContact")}</span>
                <span className={styles.linkLine} />
              </Link>
            </li>
          </ul>

          <button 
            className={styles.langToggle} 
            onClick={toggleLanguage} 
            data-cursor="hover"
            aria-label="Alterar idioma / Toggle Language"
          >
            <span className={`${styles.langLabel} ${language === "pt" ? styles.langActive : ""}`}>PT</span>
            <span className={styles.langDivider}>/</span>
            <span className={`${styles.langLabel} ${language === "en" ? styles.langActive : ""}`}>EN</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          data-cursor="hover"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileMenuContent}>
          <ul className={styles.mobileLinks}>
            <li style={{ transitionDelay: "0.2s" }}>
              <Link
                href="/"
                className={styles.mobileLink}
                onClick={() => setIsMenuOpen(false)}
                data-cursor="hover"
              >
                {t("navWork")}
              </Link>
            </li>
            <li style={{ transitionDelay: "0.3s" }}>
              <Link
                href="/lets-shoot"
                className={styles.mobileLink}
                onClick={() => setIsMenuOpen(false)}
                data-cursor="hover"
              >
                {t("navContact")}
              </Link>
            </li>
          </ul>

          {/* Seletor de Idioma no Mobile */}
          <div className={styles.mobileLangContainer} style={{ transitionDelay: "0.4s" }}>
            <button 
              className={styles.mobileLangToggle} 
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              data-cursor="hover"
            >
              <span className={`${styles.langLabel} ${language === "pt" ? styles.langActive : ""}`}>Português</span>
              <span className={styles.langDivider}>·</span>
              <span className={`${styles.langLabel} ${language === "en" ? styles.langActive : ""}`}>English</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
