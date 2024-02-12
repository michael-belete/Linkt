import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "64rem",
          },
        },
      },
      screens: {
        xs: "400px",
      },
      backgroundImage: {
        dot: "radial-gradient(#1d1d20 6%, transparent 11%)",
        "border-gradient":
          "conic-gradient(transparent 20deg, #FF6243 90deg, transparent 90deg)",
        "card-fade": "linear-gradient(0deg, #0E0E0F 10%,transparent 90%)",
      },
      fontFamily: {
        primary: "Roboto, sans-serif",
      },
      colors: {
        primary: "#FF6243",
        secondary: "#1D1D20",
        body: "#0E0E0F",
        "border-secondary": "#5B5B5B",
        "silver-gray": "#B9BABF",
      },
      keyframes: {
        rotate: {
          from: {
            transform: "rotate(0turn)",
          },
          to: {
            transform: "rotate(1turn)",
          },
        },
      },
      animation: {
        border: "rotate 4s linear infinite",
      },
      boxShadow: {
        "primary-btn":
          "0px 0px 0px 1px rgba(0,0,0,.2),0px 1px 4px 0px rgba(0,0,0,.5),0px 1px 0px 0px hsla(0,0%,100%,.2) inset,0px 3px 20px 0px rgba(255,100,69,.4)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
  ],
};
export default config;
