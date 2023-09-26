import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Teléfonos Útiles 🧉",
  openGraph: {
    title: "Teléfonos Útiles 🧉",
    description:
      "Listado de teléfonos útiles y organismos de gobierno en Hamburgo",
    url: "https://www.mates-asado.de/telefonos-utiles",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de un teléfono",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function TelefonosUtilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationElements = await getHomeIcons();
  const filteredMobileMenuElements = navigationElements.filter(
    icon => icon.fields.extraData !== "/productos-latinos",
  );
  return (
    <>
      <HeaderBlogPosts navigationElements={filteredMobileMenuElements} />
      <section>{children}</section>
    </>
  );
}
