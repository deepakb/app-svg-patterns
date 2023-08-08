"use client";
import React from "react";

import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="shadow-app-shadow bg-secondary w-full flex h-16 items-center justify-between gap-2 px-20">
      <div className="flex w-full items-center gap-2 justify-center">
        <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50">
          <defs>
            <linearGradient id="bg-gradient" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#9933FF" />
              <stop offset="50%" stopColor="#9933EF" />
              <stop offset="100%" stopColor="#FF3333" />
            </linearGradient>
            <style>@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');</style>
          </defs>
          <rect width="200" height="50" fill="transparent" />
          <text x="12" y="17" fontSize="20" fontFamily="Nunito, sans-serif" fill="url(#bg-gradient)">
            &lt;svg&#47;&gt;
          </text>
          <text x="12" y="40" fontSize="20" fontFamily="Nunito, sans-serif" fill="url(#bg-gradient)">
            patterns.
          </text>
        </svg>
        <Navigation />
      </div>
    </header>
  );
}
