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
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        "90px": "90px",
        "120px": "120px",
        "250px": "250px",  
        "300px": "300px",  
        "350px": "350px",  
        "500px": "500px",  
      },
      height: {
        "19px": "19px",
      },
      padding: {
        "2px": "2px",
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
      backgroundImage: (theme) => ({
        "flag-gradient":
          "linear-gradient(to right, #74ACDF 33.3%, #fff 33.3%, #fff 66.6%, #74ACDF 66.6%)",
      }),
      colors: {
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
      gridTemplateRows: {
        header: "210px 20px",
      },
      screens: {
        md: { raw: "(min-width: 768px)" },
      },
      utilities: {
        ".iconWrapper > :nth-child(7)": {
          placeSelf: "center",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
