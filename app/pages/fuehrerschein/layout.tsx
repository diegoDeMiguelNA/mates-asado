import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licencia de Conducir 🧉",
};


export default function FuhrerscheinLayout({
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