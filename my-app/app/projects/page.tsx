"use client";
import { useState } from "react";

const projects = [
  { name: "Deadstock", category: "web" },
  { name: "GitHub Repo Reader", category: "web" },
  { name: "Tender Analysis", category: "ml" },
  { name: "VisionX", category: "ml" },
  { name: "Dermora", category: "web" },
  { name: "OSINT", category: "security" },
  { name: "SkillSwap", category: "web" },
  { name: "AgriX", category: "ml" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <div className="flex gap-4 mb-6">
        <button onClick={() => setFilter("all")} className="px-3 py-1 border rounded">All</button>
        <button onClick={() => setFilter("web")} className="px-3 py-1 border rounded">Web</button>
        <button onClick={() => setFilter("ml")} className="px-3 py-1 border rounded">ML</button>
        <button onClick={() => setFilter("security")} className="px-3 py-1 border rounded">Security</button>
      </div>

      <ul className="space-y-4">
        {filtered.map((p, i) => (
          <li
            key={i}
            onClick={() => setSelected(p)}
            className="cursor-pointer hover:text-blue-400"
          >
            {p.name}
          </li>
        ))}
      </ul>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{selected.name}</h2>
            <p>Category: {selected.category}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 px-4 py-2 border rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
