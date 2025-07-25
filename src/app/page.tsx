"use client";

import HeroSection from "@/components/HeroSection";
import {useState} from "react";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const suggestions = [
    "login form",
    "user profile page",
    "admin dashboard",
    "contact form",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted query:", query);
  };

  return (
    <>
      <HeroSection />
      <section className="min-h-[40vh] flex flex-col items-center justify-center px-6 py-10">
        <p className="text-base sm:text-lg mb-4 max-w-xl text-white">
          Input below the type of component you are looking for :
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl  p-6 rounded-xl shadow-md flex flex-col items-center gap-6"
          style={{backgroundColor: "var(--form-background)"}}
        >
          <div className="w-full flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., Login form with remember me"
              className="flex-1 p-3 rounded-md border border-gray-300 bg-white text-black"
            />
            <button
              type="submit"
              className="bg-[#0f2595] text-white px-4.5 py-2 rounded-lg transition"
              // style={{backgroundColor: "var(--visa-green)"}}
            >
              Enter
            </button>
          </div>

          <p className="text-sm text-gray-700">
            For example: “form with email input and login button”
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((text) => (
              <button
                key={text}
                type="button"
                onClick={() => setQuery(text)}
                className="px-3 py-1 rounded-md text-sm bg-white text-black border border-gray-300 hover:bg-gray-100 transition"
              >
                {text}
              </button>
            ))}
          </div>
        </form>
      </section>
    </>
  );
}
