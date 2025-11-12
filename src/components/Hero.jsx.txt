import React from "react";
import { Rocket, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Build your <span className="text-primary">identity</span>, not just software.
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        I'm <strong>Your Name</strong> — a developer crafting clean, modern web experiences.
      </p>
      <div className="flex justify-center gap-4">
        <a href="#projects" className="bg-primary text-white px-4 py-2 rounded flex items-center gap-2">
          <Rocket className="w-4 h-4" /> View Projects
        </a>
        <a
          href="#contact"
          className="border border-primary text-primary px-4 py-2 rounded flex items-center gap-2"
        >
          <Mail className="w-4 h-4" /> Contact Me
        </a>
      </div>
    </section>
  );
}
