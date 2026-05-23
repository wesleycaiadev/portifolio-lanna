"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard } from "./ProjectCard";
import { type Project } from "@/lib/projects";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./ProjectGrid.module.css";

gsap.registerPlugin(ScrollTrigger);

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll("a");

    gsap.to(cards, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
        end: "bottom bottom",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className={styles.section} id="work">
      <div className={styles.container}>
        <h2 className={styles.heading}>{t("selectedWork")}</h2>
        <div className={styles.grid} ref={gridRef}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
