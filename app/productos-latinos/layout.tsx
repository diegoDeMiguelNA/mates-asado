import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Productos Latinos 🧉",
  openGraph: {
    title: "Productos Latinos 🧉",
    description: "Donde comprar productos latinos en Hamburgo",
    url: "https://www.mates-asado.de/productos-latinos",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de dulces y golosinas de Argentina",
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
  const filteredMobileMenuElements = navigationElements?.filter(
    icon => icon.fields.extraData !== "/productos-latinos",
  );
  return (
    <>
      <HeaderBlogPosts navigationElements={filteredMobileMenuElements} />
      {children}
    </>
  );
}
