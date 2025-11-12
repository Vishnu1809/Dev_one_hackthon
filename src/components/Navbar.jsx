import React, { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const navItems = ["Home", "Projects", "Skills", "Contact"];

  React.useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <header className="sticky top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl text-primary">DevOne Portfolio</h1>
        <div className="flex gap-6 items-center">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary">
              {item}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="border rounded px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
