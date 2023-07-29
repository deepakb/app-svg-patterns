import svgToDataUri from "mini-svg-data-uri";
import flattenColorPalette from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export const spPlugin = plugin(
  function ({ addBase, addVariant, matchUtilities, addUtilities, theme }) {
    addBase({
      ":root": {
        "--background": "0 0% 100%",
        "--foreground": "224 71.4% 4.1%",
        "--muted": "220 14.3% 95.9%",
        "--muted-foreground": "220 8.9% 46.1%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "224 71.4% 4.1%",
        "--card": "0 0% 100%",
        "--card-foreground": "224 71.4% 4.1%",
        "--border": "220 13% 91%",
        "--input": "220 13% 91%",
        "--primary": "220.9 39.3% 11%",
        "--primary-foreground": "210 20% 98%",
        "--secondary": "220 14.3% 95.9%",
        "--secondary-foreground": "220.9 39.3% 11%",
        "--accent": "220 14.3% 95.9%",
        "--accent-foreground": "220.9 39.3% 11%",
        "--destructive": "0 84.2% 60.2%",
        "--destructive-foreground": "210 20% 98%",
        "--ring": "217.9 10.6% 64.9%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "224 71.4% 4.1%",
        "--foreground": "210 20% 98%",
        "--muted": "215 27.9% 16.9%",
        "--muted-foreground": "217.9 10.6% 64.9%",
        "--popover": "224 71.4% 4.1%",
        "--popover-foreground": "210 20% 98%",
        "--card": "224 71.4% 4.1%",
        "--card-foreground": "210 20% 98%",
        "--border": "215 27.9% 16.9%",
        "--input": "215 27.9% 16.9%",
        "--primary": "210 20% 98%",
        "--primary-foreground": "220.9 39.3% 11%",
        "--secondary": "215 27.9% 16.9%",
        "--secondary-foreground": "210 20% 98%",
        "--accent": "215 27.9% 16.9%",
        "--accent-foreground": "210 20% 98%",
        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "0 85.7% 97.3%",
        "--ring": "215 27.9% 16.9%",
      },
      body: {
        "@apply bg-background text-foreground": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
    }),
      addVariant(
        "supports-backdrop-blur",
        "@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))"
      );
    addVariant("supports-scrollbars", "@supports selector(::-webkit-scrollbar)");
    addVariant("children", "& > *");
    addVariant("scrollbar", "&::-webkit-scrollbar");
    addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
    addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
    addVariant("demo-dark", ".demo-dark &");

    matchUtilities(
      {
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
          )}")`,
        }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );
    matchUtilities(
      {
        highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
      },
      { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
    );

    let backgroundSize = "7.07px 7.07px";
    let backgroundImage = (color: string) =>
      `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`;
    let colors = Object.entries(theme("backgroundColor")!).filter(
      ([, value]) => typeof value === "object" && value[400] && value[500]
    );
    addUtilities(
      Object.fromEntries(
        colors.map(([name, colors]) => {
          let backgroundColor = colors[400] + "1a"; // 10% opacity
          let stripeColor = colors[500] + "80"; // 50% opacity

          return [
            `.bg-stripes-${name}`,
            {
              backgroundColor,
              backgroundImage: backgroundImage(stripeColor),
              backgroundSize,
            },
          ];
        })
      )
    );
    addUtilities({
      ".bg-stripes-white": {
        backgroundImage: backgroundImage("rgba(255 255 255 / 0.75)"),
        backgroundSize,
      },
    });
    addUtilities({
      ".ligatures-none": {
        fontVariantLigatures: "none",
      },
    });
  },
  {
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
        roboto: "Roboto, sans-serif",
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "hsl(var(--primary))",
            foreground: "hsl(var(--primary-foreground))",
          },
          secondary: {
            DEFAULT: "hsl(var(--secondary))",
            foreground: "hsl(var(--secondary-foreground))",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  }
);
