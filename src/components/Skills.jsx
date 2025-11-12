import React from "react";

const SKILLS = [
  "JavaScript", "React", "Tailwind", "FastAPI",
  "Python", "Docker", "Git", "Vercel"
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill) => (
          <span key={skill} className="border border-primary text-primary px-4 py-2 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
