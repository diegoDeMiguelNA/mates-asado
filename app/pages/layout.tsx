import "../globals.css";
import { lemonMilk } from "../fonts/fonts";

import { Metadata } from "next";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Entry } from "contentful";
import { IHomeIconResuableFields } from "@/@types/generated/contentful";
import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";

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
  const {
    fields: { homeIconComponent },
  }: Entry<IHomeIconResuableFields> = await getHomeIcons();

  return (
    <>
      <Header navigationElements={homeIconComponent} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
