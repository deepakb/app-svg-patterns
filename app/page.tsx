"use client";
import React from "react";

import Dashboard from "@/components/Home";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-w-screen flex flex-col">
      {/* <Header /> */}
      <Dashboard />
    </div>
  );
}
