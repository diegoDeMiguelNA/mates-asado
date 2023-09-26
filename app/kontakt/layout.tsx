import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Contacto - Kontakt 🧉",
  openGraph: {
    title: "Contacto/Kontakt 🧉",
    description:
      "Como Contactarse con Mates&Asado, por email, redes sociales, etc.",
    url: "https://www.mates-asado.de/kontakt",
    siteName: "Mates&Asado",
    locale: "en_US",
    type: "website",
  },
};

export default async function KontaktLayout({
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
