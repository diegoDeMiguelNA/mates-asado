import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Médicos 🧉",
  openGraph: {
    title: "Médicos 🧉",
    description: "Profesionales de la salud que hablan español en Hamburgo",
    url: "https://www.mates-asado.de/medicos",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Medicos cruzados de brazo vestidos de blanco con sus estetoscopios",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default async function MedicosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationElements = await getHomeIcons();
  const filteredMobileMenuElements = navigationElements.filter(
    icon => icon.fields.extraData !== "/medicos",
  );
  return (
    <>
      <HeaderBlogPosts navigationElements={filteredMobileMenuElements} />
      <section>{children}</section>
    </>
  );
}
