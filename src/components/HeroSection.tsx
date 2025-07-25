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
          <Link href="https://design.visa.com/">
            Visa Product Design System
          </Link>
        </span>
        .
      </p>
    </section>
  );
};

export default HeroSection;
