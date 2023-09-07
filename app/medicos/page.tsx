import {
  IMedicoprofesionalDeLaSalud
} from "@/@types/generated/contentful";
import MedicosList from "@/app/components/pageComponents/medicos";
import { getReusablePage } from "@/lib/contentful/fetchDataFromContentful";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type MedicosPageContent = {
  title: string;
  subtitle: string;
  pageBody: IMedicoprofesionalDeLaSalud[];
}

export default async function Medicos() {
  const {
    fields: { title, subtitle, pageBody },
  } = await getReusablePage<MedicosPageContent>("7815QrUkSC1g3On5DHk7Me");

  return (
    <>
      <main className="text-center flex flex-col items-center justify-center">
        <div className="py-12">
          <h2 className="text-2xl sm:text-5xl font-heading uppercase">
            {title}
          </h2>
          <h3 className="text-sm mx-8 font-heading uppercase pt-10 mb-4 sm:mx-24">
            {subtitle}
          </h3>
        </div>
        <MedicosList data={pageBody} />
      </main>
    </>
  );
}
