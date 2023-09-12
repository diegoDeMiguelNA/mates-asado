import { IHomeIconResuableFields } from "@/@types/generated/contentful";
import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Entry } from "contentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Médicos 🧉",
  openGraph: {
    title: "Médicos 🧉",
    description: "Profesionales de la saluds que hablan español en Hamburgo",
    url: "https://www.mates-asado.de/pages/medicos",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Medicos cruzados de brazo vestidos de blanco con sus estetoscopios",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function MedicosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    fields: { homeIconComponent },
  } = await getHomeIcons();
  const filteredMobileMenuElements = homeIconComponent?.filter(
    (icon) => icon.fields.extraData !== "/medicos"
  );
  return (
    <>
      <HeaderBlogPosts navigationElements={filteredMobileMenuElements} />
      <section>{children}</section>
    </>
  );
}
