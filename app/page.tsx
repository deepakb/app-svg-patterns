"use client";
import React from "react";

import Dashboard from "@/components/Home";
import Header from "@/components/Header";
import useSvg from "@/hooks/useSvg";
import Pattern from "@/components/Pattern";

export default function Home() {
  const { svg } = useSvg();

  return (
    <div className="min-w-screen flex flex-col">
      <Header />
      {svg === null && <Dashboard />}
      {svg !== null && <Pattern />}
    </div>
  );
}
