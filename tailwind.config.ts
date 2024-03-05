import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#2A3086",
      secondary: "#F6F2FF",
      white: "#FFFFFF",
      black: "#000000",

      blue: {
        50: "#EAF6FC",
        100: "#2A3086",
        200: "#ECE5FF",
        300: "#F6F2FF",
        400: "#0053AB",
        500: "#E1EFFF",
        600: "#323EFF",
        700: "#040A5D",
        800: "#3741CE",
        900: "#E4DBFF",
      },
      green: {
        50: "#C3FFDB",
        100: "#E6F9EF",
        200: "#24CA49",
        300: "#15803D",
        400: "#005D25",
      },
      orange: {
        100: "#FDF0E9",
        200: "#F87732",
      },
      gray: {
        50: "#1E1E24",
        100: "#1B1D1F",
        200: "#8A8A98",
        300: "#F8F8F8",
        400: "#E5E7EB",
        500: "#E3E8EF",
        600: "#535362",
        700: "#0B0A3A",
        800: "#7E8CA0",
        900: "#F8FAFC",
      },
      red: {
        100: "#FAEBEC",
        200: "#FF3A47",
        300: "#E41C1C",
        400: "#FFD9D9",
        500: "#FF1818",
        600: "#F25959",
        700: "#D80000",
      },
      purple: {
        50: "#384CFF",
        100: "#F5EDFD",
        200: "#B367FF",
      },
      yellow: {
        100: "#F1E800",
        200: "#5B5700",
      },
      stone: {
        100: "#2E2E3A",
        200: "#E6EFF2",
      },
    },
  },
  plugins: [],
};
export default config;
