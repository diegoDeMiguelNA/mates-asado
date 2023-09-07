import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Productos Latinos 🧉",
    description: "Donde comprar productos latinos en Hamburgo",
    url: "https://www.mates-asado.de/pages/productos-latinos",
    siteName: "Mates&Asado",
    images: [
      {
        width: 300,
        height: 300,
        url: "./opengraph-image.jpg",
        alt: "Imagen de dulces y golosinas de Argentina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ProductosLatinosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
