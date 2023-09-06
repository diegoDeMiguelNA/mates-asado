import React from "react";
import { Entry } from "contentful";
import { getReusablePage } from "@/lib/contentful/fetchDataFromContentful";

import ExperienciaIcon from "../components/experienciasComponents/ExperienciaIcon";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Define el tipo para los campos dentro de 'pageBody'
export interface IExperienciaFields {
  nombreDeLaExperiencia?: string; // Puedes ajustar si es opcional o no según tus datos
  subtitle?: string;
  slug?: string;
  // Agrega cualquier otro campo necesario aquí...
}

export interface IFuehrerscheinReusableFields {
  /** Title */
  title: string;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Page Body */
  pageBody?: Entry<IExperienciaFields>[] | undefined;
}

/** This content model will hold the info for every page within the site (Wohnungssuche, Führerschein, etc) */

export interface IFuehrerscheinReusable
  extends Entry<IFuehrerscheinReusableFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "fuehrerscheinReusable";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export default async function Experiencias() {
  const results: Entry<IFuehrerscheinReusableFields> = await getReusablePage(
    "2E3ScHAH6l40tgsmACj00I"
  );

  const { title, subtitle, pageBody } = results.fields;

  console.log("pageBody", pageBody);

  return (
    <>
      <main className="text-center flex flex-col items-center justify-center">
        <div className="py-12">
          <h2 className="text-2xl sm:text-5xl font-heading uppercase">
            {title}
          </h2>
          <h3 className="text-sm mx-8 font-heading uppercase pt-10 mb-4 sm:mx-24 max-w-[300px] md: max-w-[400px] lg:max-w-[600px]">
            {subtitle}
          </h3>
        </div>
        <div className="p-4">
          {pageBody &&
            pageBody.map(
              (
                experience: Entry<IExperienciaFields> // Use the correct type here
              ) => (
                <ExperienciaIcon
                  key={experience.sys.id}
                  title={experience.fields.nombreDeLaExperiencia || ""}
                  subtitle={experience.fields.subtitle || ""}
                  imageUrl="/images/experiencia-fuehrerschein.webp"
                  slug={experience.fields.slug || ""}
                  entryId={experience.sys.id}
                />
              )
            )}
        </div>
      </main>
    </>
  );
}
