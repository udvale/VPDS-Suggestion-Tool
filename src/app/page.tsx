"use client";
import HeroSection from "@/components/HeroSection";
import CodeBlock from "@/components/CodeBlock";
import ComponentsList from "@/components/ComponentList";
import {useState} from "react";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [snippet, setSnippet] = useState<string | null>(null);
  const [used, setUsed] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [aiPowered, setAiPowered] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const suggestions = [
    "login form",
    "file upload",
    "date range picker",
    "user profile form",
    "form with email input and login button",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSnippet(null);
    setUsed([]);
    setErrorMsg(null);
    setIsLoading(true);

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/suggest",
        {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({query}),
        }
      );
      const data = await res.json();

      if (!data.success) throw new Error("Backend returned success = false");

      if (data.snippet.trim() === "// unknown pattern") {
        setErrorMsg("Pattern not recognised – try phrasing it differently.");
      } else {
        setSnippet(data.snippet);
        setUsed(data.components_used || data.used || []);
        setAiPowered(data.ai_powered || false);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Unable to reach suggestion service.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <HeroSection />
      <section className="min-h-[40vh] flex flex-col items-center px-6 py-10">
        <p className="text-base sm:text-lg mb-4 max-w-xl text-white text-center">
          Input below the type of component you are looking for:
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl p-8 rounded-2xl shadow-xl flex flex-col items-center gap-4 backdrop-blur-sm border border-white/10"
          style={{backgroundColor: "var(--form-background)"}}
        >
          <div className="w-full flex gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., Login form with remember me"
              disabled={isLoading}
              className="flex-1 p-3 rounded-lg border border-gray-200 bg-white text-black placeholder-gray-500 focus:ring-2 focus:ring-[#0f2595] focus:border-transparent transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="bg-[#0f2595] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1a3fc0] disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {isLoading ? "Generating..." : "Generate"}
            </button>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSnippet(null);
                setUsed([]);
                setAiPowered(false);
                setErrorMsg(null);
              }}
              disabled={isLoading}
              className="bg-gray-200 text-black px-6 py-3 rounded-lg font-medium hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              Reset
            </button>
          </div>

          <p className="text-lg text-white">Example inputs to use:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {suggestions.map((text) => (
              <button
                key={text}
                type="button"
                onClick={() => setQuery(text)}
                disabled={isLoading}
                className="px-4 py-2 rounded-lg text-sm bg-white/90 text-black border border-gray-200 hover:bg-white hover:shadow-md transition-all cursor-pointer"
              >
                {text}
              </button>
            ))}
          </div>

          {isLoading && (
            <div className="flex items-center gap-2 text-white">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              <span className="text-sm">Generating your component...</span>
            </div>
          )}
        </form>

        {errorMsg && (
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-red-400 font-medium text-center">{errorMsg}</p>
          </div>
        )}

        {snippet && (
          <div className="mt-10 w-full max-w-7xl">
            <div className="flex flex-col gap-6">
              <ComponentsList components={used} />
              <CodeBlock
                code={snippet}
                language="tsx"
                filename={`${query}.tsx`}
                aiPowered={aiPowered}
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Component generated successfully! Copy the code above and use it
                in your React project.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
