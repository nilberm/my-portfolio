"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  const [subtitle, setSubtitle] = useState("");
  const [done, setDone] = useState(false);
  const subtitleText = "Frontend Developer · React & Next.js · UI Enthusiast";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setSubtitle(subtitleText.slice(0, index));
      index++;
      if (index > subtitleText.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-800 dark:to-blue-900/30"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-sora font-extrabold">
            Hi, I’m{" "}
            <span className="text-primary dark:text-primary-light">
              Nilber Mota
            </span>
          </h1>
          <p className="mt-4 text-xl text-slate-700 dark:text-slate-300 font-medium">
            {subtitle}
            {!done && <span className="typing-cursor"></span>}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#projects"
              className="bg-primary text-white py-3 px-8 rounded-lg shadow-md hover:shadow-lg"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="border-2 border-primary py-3 px-8 rounded-lg text-primary dark:text-primary-light"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-10 flex justify-center md:justify-start space-x-6">
            <a
              href="https://linkedin.com/in/nilbermota"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="https://github.com/nilbermota"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors"
            >
              <Github className="w-7 h-7" />
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <div className="w-72 h-72 bg-gradient-to-br from-primary-light to-accent rounded-full shadow-2xl flex items-center justify-center">
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
