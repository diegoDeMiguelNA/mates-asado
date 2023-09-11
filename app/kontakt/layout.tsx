import { IHomeIconResuableFields } from "@/@types/generated/contentful";
import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Entry } from "contentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Contacto - Kontakt 🧉",
  openGraph: {
    title: "Contacto/Kontakt 🧉",
    description:
      "Como Contactarse con Mates&Asado, por email, redes sociales, etc.",
    url: "https://www.mates-asado.de/pages/about-us",
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
  const {
    fields: { homeIconComponent },
  }: Entry<IHomeIconResuableFields> = await getHomeIcons();
  return (
    <>
      <HeaderBlogPosts navigationElements={homeIconComponent} />
      <section>{children}</section>
    </>
  );
}
