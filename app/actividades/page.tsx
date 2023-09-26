import { getReusablePage } from "@/lib/contentful/fetchDataFromContentful";
import { Entry } from "contentful";

import { notFound } from "next/navigation";
import ExperienciaIcon from "../components/blogPostIcon/blogPostIcon";

export interface IActividades {
  nombreDeLaExperiencia?: string;
  subtitle?: string;
  slug?: string;
}

export interface IFuehrerscheinReusableFields {
  /** Title */
  title: string;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Page Body */
  pageBody?: Entry<IActividades>[] | undefined;
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

export default async function Actividades() {
  const results: Entry<IFuehrerscheinReusableFields> | undefined =
    await getReusablePage("3cr2X20j5DvViKOMYpIrUZ");

  if (!results) return notFound();

  const { title, subtitle, pageBody } = results.fields;

  return (
    <main className="min-h-screen text-center flex flex-col items-center justify-center">
      <div className="py-12">
        <h2 className="text-2xl sm:text-5xl font-heading uppercase">{title}</h2>
        <h3 className="text-sm mx-8 font-heading uppercase pt-10 mb-4 sm:mx-24 max-w-[300px] md:max-w-[400px] lg:max-w-[600px]">
          {subtitle}
        </h3>
      </div>
      <div className="p-4">
        {pageBody &&
          pageBody.map((experience: Entry<IActividades>) => (
            <ExperienciaIcon
              key={experience.sys.id}
              title={experience.fields.nombreDeLaExperiencia || ""}
              subtitle={experience.fields.subtitle || ""}
              imageUrl="/images/frente-de-casa.webp"
              slug={experience.fields.slug || ""}
            />
          ))}
      </div>
    </main>
  );
}
