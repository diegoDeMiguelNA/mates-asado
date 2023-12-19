import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Sobre nosotros...",
  openGraph: {
    title: "Sobre nosotros...",
    description:
      "Historia y presente de les integrantes de Mates&Asado y su comunidad",
    url: "https://www.mates-asado.de/about-us",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de un Formulario de Anmeldung",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default async function AboutUsLayout({
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
