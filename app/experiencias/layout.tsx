import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Experiencias",
  openGraph: {
    title: "Experiencias",
    description:
      "Hispanohablantes comparten sus experiencias realizando diferentes trámites en Alemania..",
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
    locale: "es_ES",
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
