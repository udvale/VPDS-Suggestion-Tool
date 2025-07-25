import "./globals.css";
import Header from "@/components/Header";
import DefaultFooter from "@/components/DefaultFooter";
import { ReactNode } from "react";

export const metadata = {
  title: "VPDS Component Suggestion Tool",
  description: "Build faster with Visa Product Design System",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col ">
        <Header />
        <main className="flex-grow">{children}</main>
        <DefaultFooter />
      </body>
    </html>
  );
}
