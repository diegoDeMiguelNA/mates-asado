import localFont from "next/font/local";

export const lemonMilk = localFont({
  variable: "--font-lemon-milk",
  src: [
    {
      path: "./LEMONMILK-Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./LEMONMILK-BoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "./LEMONMILK-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./LEMONMILK-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./LEMONMILK-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./LEMONMILK-RegularItalic.otf",
      weight: "500",
      style: "italic",
    },
  ],
});
