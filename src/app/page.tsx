"use client";

import HeroSection from "@/components/HeroSection";
import {useState, useId} from "react";
import {
  Button,
  Input,
  InputContainer,
  InputMessage,
  Label,
  Utility,
} from "@visa/nova-react";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const inputId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted query:", query);
  };

  return (
    <>
      <HeroSection />
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-4 text-white">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-[#1A1F71] p-8 rounded-lg shadow-lg space-y-6"
        >
          <Utility vFlex vFlexCol vGap={4}>
            <Label htmlFor={inputId}>Describe the UI you want:</Label>
            <InputContainer>
              <Input
                id={inputId}
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setQuery(e.target.value)
                }
                placeholder="e.g., Login form with remember me"
                aria-describedby={`${inputId}-description`}
                className="w-full"
              />
            </InputContainer>

            <InputMessage id={`${inputId}-description`}>
              For example: “form with email input and login button”
            </InputMessage>
          </Utility>

          <div className="text-center">
            <Button type="submit">Suggest Components</Button>
          </div>
        </form>
      </section>
    </>
  );
}
