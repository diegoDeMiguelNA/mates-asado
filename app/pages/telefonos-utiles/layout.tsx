import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teléfonos Útiles 🧉",
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