import React from "react";

import {
  getExperienciaBySlug,
  getReusablePage,
} from "@/lib/contentful/fetchDataFromContentful";
import RenderContent from "@/utils/renderText";
import { notFound } from "next/navigation";
import { Entry } from "contentful";
import { IFuehrerscheinReusableFields } from "../page";

interface IExperienciaProps {
  params: {
    experienciaId: string;
  };
}

export async function generateStaticParams(): Promise<
  { experienciaId: string }[]
> {
  const results: Entry<IFuehrerscheinReusableFields> | undefined =
    await getReusablePage("2E3ScHAH6l40tgsmACj00I");

  if (!results.fields) return [];

  const { pageBody } = results.fields;

  if (!pageBody) return [];

  return pageBody
    .map((experience) => experience.fields.slug)
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({ experienciaId: slug }));
}

const Experiencia: React.FC<IExperienciaProps> = async ({
  params: { experienciaId },
}) => {
  const results = await getExperienciaBySlug(experienciaId);

  if (!results) {
    return notFound();
  }

  const { nombreDeLaExperiencia, subtitle, pageBody } = results.fields;

  return (
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
  );
};

export default Experiencia;
