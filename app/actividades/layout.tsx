import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Actividades para hacer en Hamburgo",
  openGraph: {
    title: "Actividades para hacer en Hamburgo",
    description:
      "Te damos tips e ideas de actividades para hacer en Hamburgo y alrededores.",
    url: "https://www.mates-asado.de/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de una licencia de conducir alemana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function ExperienciasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationElements = await getHomeIcons();
  return (
    <>
      <HeaderBlogPosts navigationElements={navigationElements} />
      <section>{children}</section>
    </>
  );
}
