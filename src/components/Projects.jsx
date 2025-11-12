import React from "react";

const PROJECTS = [
  {
    title: "Realtime Chat App",
    desc: "Built with React, Node, and Socket.io for instant messaging.",
    link: "https://github.com/yourhandle/chat-app",
  },
  {
    title: "AI Resume Parser",
    desc: "FastAPI + Transformers pipeline for automated résumé analysis.",
    link: "https://github.com/yourhandle/resume-parser",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <div key={p.title} className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline text-sm"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
