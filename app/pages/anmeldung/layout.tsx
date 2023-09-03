import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "An-, Um- y Abmeldung 🧉",
    description: "Primeros pasos en Hamburgo: Empadronamiento",
    url: "https://www.mates-asado.de/pages/anmeldung",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de un Formulario de Anmeldung",
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
