import React from "react";

import { Entry } from "contentful";
import { IExperienciaFields } from "@/@types/generated/contentful";
import { getExperienciaBySlug } from "@/lib/contentful/fetchDataFromContentful";
import { RenderContent } from "@/utils/renderText";

export const dynamic = "force-dynamic";
export const revalidate = 0;


const Experiencia: React.FC<any> = async ({
  params: { experienciaId },
}) => {
  const results: Entry<IExperienciaFields> =
    await getExperienciaBySlug(experienciaId);


  if (!results) {
    return <div>Not found</div>;
  }

  const { nombreDeLaExperiencia, subtitle, pageBody } = results.fields;

  return (
    <>
      <div className="mx-auto flex flex-col items-center">
        <main className="text-center mb-8 sm:mb-24 mx-2 sm:mx-4 flex flex-col justify-center items-center max-w-[800px]">
          <div className="pt-24 pb-4">
            <h2 className="text-2xl sm:text-5xl font-heading uppercase">
              {nombreDeLaExperiencia}
            </h2>
          </div>

          <h3 className="text-sm mx-8 font-heading uppercase mb-4 sm:mx-24">
            {subtitle}
          </h3>

          {pageBody && (
            <div className="mt-4 pt-12 flex flex-col items-center justify-center">
              <RenderContent entries={pageBody} />
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Experiencia;
