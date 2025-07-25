"use client";
import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const DefaultFooter: React.FC = () => {
  return (
    <footer className="bg-customGray text-white py-4 mt-32">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-3xl font-bold mb-2 flex justify-center items-center gap-3">
        <a
          href="https://github.com/udvale"
          target="_blank"
          rel="noopener noreferrer"
          className="text-silverCrest hover:text-silverCrestDark text-xl"
        >
          <FaGithub />
        </a>
        Get in Touch
        <a
          href="mailto:udvlenkhtaivan@gmail.com"
          className="text-silverCrest hover:text-silverCrestDark text-xl"
        >
          <FaEnvelope />
        </a>
      </h2>
        <p className="text-gray-400 text-xs">All Rights Reserved © UE</p>
      </div>
    </footer>
  );
}

export default DefaultFooter;