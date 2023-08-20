import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Busqueda de Departamento 🧉",
};


export default function WohnungssucheLayout({
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
