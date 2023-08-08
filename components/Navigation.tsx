"use client";
import React from "react";
import { Sun, MoonStar, Settings, Github } from "lucide-react";

import useAppTheme from "@/hooks/useAppTheme";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const { isDarkTheme, setTheme } = useAppTheme();

  return (
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
  );
}
