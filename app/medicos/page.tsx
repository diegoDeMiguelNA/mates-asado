import { IMedicoprofesionalDeLaSalud } from "@/@types/generated/contentful";
import MedicosList from "@/app/components/pageComponents/medicos";
import { getReusablePage } from "@/lib/contentful/fetchDataFromContentful";
import { Entry } from "contentful";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Medicos() {
<<<<<<< HEAD:app/pages/medicos/page.tsx
  const {
    fields: { title, subtitle, pageBody },
  }: Entry<{
    title: string;
    subittle: string;
    pageBody: IMedicoprofesionalDeLaSalud[];
  }> = await getReusablePage("7815QrUkSC1g3On5DHk7Me");
=======
  const results: Entry<IFuehrerscheinReusableFields> = await getReusablePage(
    "7815QrUkSC1g3On5DHk7Me"
  );

  const { title, subtitle, pageBody } = results.fields;
>>>>>>> main:app/medicos/page.tsx

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
        {/* <h3 className="warningText text-red-500 text-center mt-10 mb-24">
          Por favor, gire su dispositivo a modo paisaje (landscape) para poder
          ver la tabla con el contenido.
        </h3> */}
        <MedicosList data={pageBody} />
      </main>
    </>
  );
}
