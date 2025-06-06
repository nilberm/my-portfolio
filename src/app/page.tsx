"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/shared/BackToTopButton";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll(
      'header nav a[href^="#"], #mobile-menu a[href^="#"], a[href="#projects"]'
    );
    const handleClick = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      const targetElement = targetId ? document.querySelector(targetId) : null;
      if (targetElement) {
        const headerOffset = document.getElementById('header')?.offsetHeight || 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    };
    links.forEach((link) => link.addEventListener('click', handleClick));

    const animatedElements = document.querySelectorAll('.animated-element');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('animate-slide-in-left')) {
              (entry.target as HTMLElement).style.animation =
                'slideInLeft 0.7s ease-out forwards';
            } else if (entry.target.classList.contains('animate-slide-in-right')) {
              (entry.target as HTMLElement).style.animation =
                'slideInRight 0.7s ease-out forwards';
            } else {
              (entry.target as HTMLElement).style.animation =
                'fadeInUp 0.7s ease-out forwards';
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleClick));
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}
