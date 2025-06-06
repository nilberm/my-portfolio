"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [subtitle, setSubtitle] = useState("");
  const subtitleText = "Frontend Developer · React & Next.js · UI Enthusiast";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setSubtitle(subtitleText.slice(0, index++));
      if (index > subtitleText.length) clearInterval(interval);
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
            <span className="typing-cursor">|</span>
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
