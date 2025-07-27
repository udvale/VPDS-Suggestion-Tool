'use client';
import { Link } from '@visa/nova-react';

const HeroSection = (): React.ReactElement => {
  return (
    <section className="min-h-[20vh] flex flex-col items-center justify-center text-center px-5 py-12 pb-1 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold max-w-3xl mb-6">
        <span style={{color: "var(--visa-green)"}}>V</span>
        <span style={{color: "var(--visa-gold)"}}>P</span>
        <span>D</span>
        <span style={{color: "var(--visa-red)"}}>S</span> Component Suggestion
        Tool
      </h1>

      <p className="text-lg sm:text-xl max-w-2xl mb-4 text-white/90">
        Having a component suggestion tool can help you build faster and more
        consistent user interfaces with the{" "}
        <span className="text-[#F7B600] font-semibold underline">
          <Link href="https://design.visa.com/" target="_blank" rel="noopener noreferrer">
            Visa Product Design System
          </Link>
        </span>
        . Currently consists of <strong>33</strong> relevant components for you
        to use in your React project.
      </p>
      <p className="text-lg sm:text-xl max-w-2xl mb-4 text-white/90">
        If you are looking for icons, please visit:{" "}
        <span className="text-[#F7B600] font-semibold">
          <Link href="https://design.visa.com/components/icons-illustrations/" target="_blank" rel="noopener noreferrer">
            Visa Icons library
          </Link>
        </span>
        .
      </p>
    </section>
  );
};

export default HeroSection;
