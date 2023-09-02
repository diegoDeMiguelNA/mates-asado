import "../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mates&Asado 🧉",
  description:
    "Mates&Asado es un sitio web de ayuda para la comunidad hispano-hablante de Hamburgo",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default async function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="page">{children}</main>;
}
