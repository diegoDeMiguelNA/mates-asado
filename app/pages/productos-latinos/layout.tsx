import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos Latinos 🧉",
};

export default function ProductosLatinosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
