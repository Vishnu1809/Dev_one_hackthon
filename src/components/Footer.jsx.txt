import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Your Name · Built for DevOne Hackathon 2025
    </footer>
  );
}
