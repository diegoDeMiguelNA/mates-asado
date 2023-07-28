import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mates&Asado 🧉",
  description:
    "Mates&Asado is a website for spanish speaking people in Hamburg looking for information about errands and paperwork.",
    icons: {
      icon: "/favicon.ico",
      shortcut: '/favicon.ico',

    }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
