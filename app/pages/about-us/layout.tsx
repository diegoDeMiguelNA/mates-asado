import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Sobre nosotros...",
    description: "Historia y presente de les integrantes de Mates&Asado y su comunidad",
    url: "https://www.mates-asado.de/pages/about-us",
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

export default function AboutUsLayout({
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
