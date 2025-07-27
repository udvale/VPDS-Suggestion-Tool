"use client";
import HeroSection from "@/components/HeroSection";
import {useState, useEffect} from "react";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [components, setComponents] = useState<any[]>([]);

  const suggestions = [
    "login form",
    "user profile page",
    "admin dashboard",
    "contact form",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComponents([]);
    fetch("http://localhost:8000/api/suggest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({query}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setComponents(data.components);
        } else {
          setComponents([]);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setComponents([]);
      });
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
        {components.length > 0 && (
          <div className="mt-6 max-w-4xl w-full bg-white text-black p-6 rounded-lg shadow space-y-6">
            <h3 className="text-xl font-bold">🔧 Suggested Components:</h3>
            {components.map((comp, idx) => (
              <div key={idx} className="border-t border-gray-200 pt-4">
                <h4 className="text-lg font-semibold mb-2">{comp.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{comp.description}</p>
                <div className="space-y-4">
                  {comp.variants.map((variant: any, i: number) => (
                    <div key={i}>
                      <p className="text-sm font-medium mb-1">{variant.name}</p>
                      {/* <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                        <code>{variant.code}</code>
                      </pre> */}
                      <div className="relative">
                        <button
                          onClick={() =>
                            navigator.clipboard.writeText(variant.code)
                          }
                          className="absolute top-2 right-2 text-xs bg-[#0f2595] text-white px-2 py-1 rounded hover:bg-[#1a3fc0] transition"
                        >
                          Copy
                        </button>
                        <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto whitespace-pre-wrap">
                          <code>{variant.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
