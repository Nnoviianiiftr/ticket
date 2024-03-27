'use client'

import { useRef } from "react";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Form from "@/components/Form";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { Progressbar } from "@/components/Progressbar";

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);

  return (
    <main ref={mainRef}>
      <Progressbar target={mainRef} />
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <Form />
    </main>
  );
}
