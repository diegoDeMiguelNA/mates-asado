/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      heading: ["var(--font-lemon-milk)"],
      body: ["var(--font-montserrat)"],
      h2: ["var(--font-montserrat)"],
      h3: ["var(--font-montserrat)"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateRows: {
        custom: "auto 1fr 1fr",
        header: "210px 20px",
      },
      width: {
        "90px": "90px",
        "120px": "120px",
        "250px": "250px",
        "300px": "300px",
        "350px": "350px",
        "500px": "500px",
      },
      zIndex: {
        100: "100",
        200: "200",
      },
      height: {
        "19px": "19px",
      },
      padding: {
        "2px": "2px",
        "25px": "25px",
      },
      backgroundColor: {
        "regular-grey": "#F4F4F4",
        "regular-red": "#B1060E",
        "regular-teal": "#00808D",
      },
      fontSize: {
        xxs: "8px",
        xs: "10px",
      },
      textColor: {
        "regular-red": "#B1060E",
        "regular-teal": "#00808D",
        "plain-white": "#FFFFFF",
        "regular-blue": "#013753",
      },
      margin: {
        "25px": "25px",
      },
      backgroundImage: _theme => ({
        "flag-gradient":
          "linear-gradient(to right, #74ACDF 33.3%, #fff 33.3%, #fff 66.6%, #74ACDF 66.6%)",
      }),
      colors: {
        colors: {
          "pastel-blue-100": "#BAC7E8",
          "pastel-blue-900": "#2B2F55",
          "pastel-purple-500": "#9E88E3",
          "pastel-green-400": "#8ED4BB",
          "pastel-yellow-400": "#FFEEB0",
        },
        lightBlue: "#74ACDF",
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
        customRed: "#B1060E",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        md: { raw: "(min-width: 768px)" },
        landscape: { raw: "(orientation: landscape)" },
        portrait: { raw: "(orientation: portrait)" },
      },
      utilities: {
        ".iconWrapper > :nth-child(7)": {
          placeSelf: "center",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate", "@tailwindcss/aspect-ratio"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".landscape\\:block": {
          "@media (orientation: landscape)": {
            display: "block",
          },
        },
        ".landscape\\:hidden": {
          "@media (orientation: landscape)": {
            display: "none",
          },
        },
        ".portrait\\:block": {
          "@media (orientation: portrait)": {
            display: "block",
          },
        },
        ".portrait\\:hidden": {
          "@media (orientation: portrait)": {
            display: "none",
          },
        },
        ".flex-inherit": {
          "flex-direction": "inherit",
        },
        ".nav-list-element": {
          "margin-left": "0px !important",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
