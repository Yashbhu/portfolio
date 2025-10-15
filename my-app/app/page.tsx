"use client";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
      <h1 className="text-5xl font-bold mb-4">Yash</h1>
      <h2 className="text-xl text-gray-400 mb-8">Engineer & Developer</h2>
      <div className="flex gap-6">
        <a href="#projects" className="px-5 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition">
          Projects
        </a>
        <a href="#contact" className="px-5 py-2 border border-white rounded-xl hover:bg-white hover:text-black transition">
          Contact
        </a>
      </div>
    </main>
  );
}
