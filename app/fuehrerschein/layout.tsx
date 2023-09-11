import { IHomeIconResuableFields } from "@/@types/generated/contentful";
import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Entry } from "contentful";
import { Metadata } from "next";
import HeaderBlogPosts from "../components/header/headerBlogPosts";

export const metadata: Metadata = {
  title: "Licencia de Conducir 🧉",
  openGraph: {
    title: "Licencia de Conducir 🧉",
    description:
      "Como obtener la licencia de conducir en Alemania, que necesitas, cuanto cuesta, etc.",
    url: "https://www.mates-asado.de/pages/fuehrerschein",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Anverso de una licencia de conducir alemana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function FuhrerscheinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    fields: { homeIconComponent },
  } = await getHomeIcons();
  const filteredMobileMenuElements = homeIconComponent?.filter(
    (icon) => icon.fields.extraData !== "/fuehrerschein"
  );
  return (
    <>
      <HeaderBlogPosts navigationElements={filteredMobileMenuElements} />
      <section>{children}</section>;
    </>
  );
}
