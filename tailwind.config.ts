import { Config } from "tailwindcss";

import { spPreset } from "./lib/sp-preset";

const config = {
  presets: [spPreset],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
} satisfies Config;

export default config;
