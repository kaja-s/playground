import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",

        black: "var(--color-black)",
        white: "var(--color-white)",

        blue100: "var(--color-blue-100)",
        blue200: "var(--color-blue-200)",
        blue300: "var(--color-blue-300)",
        blue400: "var(--color-blue-400)",
        blue500: "var(--color-blue-500)",
        blue700: "var(--color-blue-700)",

        grey100: "var(--color-grey-100)",
        grey200: "var(--color-grey-200)",
        grey300: "var(--color-grey-300)",
        grey400: "var(--color-grey-400)",
        grey500: "var(--color-grey-500)",
        grey600: "var(--color-grey-600)",
        grey700: "var(--color-grey-700)",
        grey800: "var(--color-grey-800)",
        grey900: "var(--color-grey-900)",

        ctablue: "var(--color-ctablue)",
      },
      fontFamily: {
        heading: ["Open Sans", "serif"],
        paragraph: ["Open Sans", "serif"],
        button: ["Open Sans", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
