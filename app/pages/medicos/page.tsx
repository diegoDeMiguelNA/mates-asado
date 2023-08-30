import React from "react";
import { IFuehrerscheinReusableFields } from "@/@types/generated/contentful";
import { Entry } from "contentful";
import { getReusablePage } from "@/lib/contentful/fetchDataFromContentful";
import MedicosTable from "@/app/components/pageComponents/medicos";

export default async function Medicos() {
  const results: Entry<IFuehrerscheinReusableFields> = await getReusablePage(
    "7815QrUkSC1g3On5DHk7Me"
  );

  const { title, subtitle, pageBody } = results.fields;

  return (
    <>
      <main className="text-center mb-2sm:px-10 mb-8 sm:mb-24 mx-2 sm:mx-24 landscape:mb-2 landscape:px-2 landscape:mx-2">
        <div className="mx-auto px-4 sm:px-2 lg:px-8">
          <div className="pt-12 py-12">
            <h2 className="text-2xl sm:text-5xl font-heading uppercase">
              {title}
            </h2>
            <h3 className="text-sm mx-8 font-heading uppercase pt-10 mb-4 sm:mx-24">
              {subtitle}
            </h3>
          </div>
          <h3 className="warningText text-red-500 text-center mt-10 mb-24">
            Por favor, gire su dispositivo a modo paisaje (landscape) para poder
            ver la tabla con el contenido.
          </h3>
          <MedicosTable data={pageBody} />
        </div>
      </main>
    </>
  );
}
