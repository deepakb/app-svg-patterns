import type { Config } from "tailwindcss";

import { spPlugin } from "./sp-plugin";

export const spPreset = {
  darkMode: "class",
  content: [],
  plugins: [spPlugin],
} satisfies Config;
