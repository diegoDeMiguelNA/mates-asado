import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Seguros en Alemania 🧉",
  openGraph: {
    title: "Seguros en Alemania 🧉",
    description: "Qué tipos de seguros existen en Alemania y cómo funcionan.",
    url: "https://www.mates-asado.de/productos-latinos",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Un objeto roto y dinero alrededor",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default async function ProductosLatinosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationElements = await getHomeIcons();
  return (
    <>
      <HeaderBlogPosts navigationElements={navigationElements} />
      {children}
    </>
  );
}
