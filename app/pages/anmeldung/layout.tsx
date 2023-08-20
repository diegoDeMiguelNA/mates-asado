import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "An-, Um- y Abmeldung 🧉",
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
