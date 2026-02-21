"use client";
import { useState } from "react";
import clsx from "clsx";
import { VisaLinkHigh } from "@visa/nova-icons-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  aiPowered?: boolean;
}

export default function CodeBlock({
  code,
  language = "tsx",
  filename = "Generated Component",
  aiPowered = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const codeLines = code.split("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="w-full mt-8">
      <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
        <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <span className="w-3 h-3 rounded-full" style={{backgroundColor: "var(--visa-red)"}}/>
              <span className="w-3 h-3 rounded-full" style={{backgroundColor: "var(--visa-gold)"}}/>
              <span className="w-3 h-3 rounded-full" style={{backgroundColor: "var(--visa-light-green)"}}/>
            </div>
            <span className="text-gray-300 text-sm font-medium">{filename}</span>
          </div>

          <button
            onClick={handleCopy}
            className={clsx(
              "flex items-center gap-2 text-xs px-3 py-2 rounded-md transition-all cursor-pointer",
              copied
                ? "bg-green-600 text-white"
                : "bg-[#0f2595] text-white hover:bg-[#1a3fc0]"
            )}
          >
            <VisaLinkHigh className="w-5 h-5" />
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>

        <div className="flex flex-col">
          <div className="flex">
            <div className="bg-gray-800 px-4 py-6 text-gray-500 text-sm font-mono leading-relaxed select-none border-r border-gray-700 min-w-[3rem]">
              {codeLines.map((_, i) => (
                <div key={i} className="text-right">
                  {i + 1}
                </div>
              ))}
            </div>

            <pre className="flex-1 p-6 text-sm overflow-x-auto text-gray-100 leading-relaxed font-mono bg-gray-900">
              <code className={`block whitespace-pre-wrap language-${language}`}>
                {code}
              </code>
            </pre>
            
          </div>
        </div>
      </div>
      {aiPowered && (
        <div className="mt-4 flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white text-sm border border-purple-500/30">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            AI-Powered Generation
          </span>
        </div>
      )}
    </div>
  );
}
