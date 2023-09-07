import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Teléfonos Útiles 🧉",
    description:
      "Listado de teléfonos útiles y organismos de gobierno en Hamburgo",
    url: "https://www.mates-asado.de/pages/telefonos-utiles",
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

export default function TelefonosUtilesLayout({
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