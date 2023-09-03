import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Productos Latinos 🧉",
    description: "Donde comprar productos latinos en Hamburgo",
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

export default function ProductosLatinosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
