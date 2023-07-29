"use client";
import React from "react";
import Image from "next/image";
import { Sun, MoonStar, Settings, Github } from "lucide-react";

import useAppTheme from "@/hooks/useAppTheme";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "./ui/button";

export default function Header() {
  const { isDarkTheme, setTheme } = useAppTheme();

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
            {/* <style>@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap');</style> */}
          </defs>
          <rect width="200" height="50" fill="transparent" />
          <text x="12" y="17" fontSize="20" fontFamily="Nunito, sans-serif" fill="url(#bg-gradient)">
            &lt;svg&#47;&gt;
          </text>
          <text x="12" y="40" fontSize="20" fontFamily="Nunito, sans-serif" fill="url(#bg-gradient)">
            patterns.
          </text>
        </svg>
        <Menubar className="bg-trasnsparent border-none w-full flex items-center justify-end outline-none p-0">
          <MenubarMenu>
            <MenubarTrigger>
              <Button
                variant="link"
                size="icon"
                className="hover:animate-hover h-8 w-8 cursor-pointer"
                onClick={() => setTheme("light")}
              >
                <Github />
              </Button>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              {isDarkTheme ? (
                <Button
                  variant="link"
                  size="icon"
                  className="hover:animate-hover h-8 w-8 cursor-pointer"
                  onClick={() => setTheme("light")}
                >
                  <Sun />
                </Button>
              ) : (
                <Button
                  variant="link"
                  size="icon"
                  className="hover:animate-hover h-8 w-8 cursor-pointer"
                  onClick={() => setTheme("dark")}
                >
                  <MoonStar />
                </Button>
              )}
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Button
                variant="link"
                size="icon"
                className="hover:animate-hover h-8 w-8 cursor-pointer"
                onClick={() => setTheme("dark")}
              >
                <Settings />
              </Button>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
}
