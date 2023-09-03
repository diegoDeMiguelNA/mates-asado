import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "An-, Um- y Abmeldung 🧉",
    description: "Primeros pasos en Hamburgo: Empadronamiento",
    url: "https://www.mates-asado.de/pages/deutschlandticket",
    siteName: "Mates&Asado",
    images: [
      {
        width: 800,
        height: 600,
        url: "./opengraph-image.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AnmeldungLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
