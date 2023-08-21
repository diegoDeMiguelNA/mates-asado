import Link from "next/link";
import { getPageTemplate } from "@/lib/contentful/fetchDataFromContentful";
import { documentToReactComponents } from "@/lib/contentful/documentToReactComponents";
import { ReactNode } from "react";

const options = {
  renderNode: {
    "heading-2": (node: any, children: ReactNode) => (
      <h2 className="text-xl sd:3xl font-heading uppercase my-16">
        {children}
      </h2>
    ),
    "heading-3": (node: any, children: ReactNode) => (
      <p className="underline mb-2">{children}</p>
    ),
    paragraph: (node: any, children: ReactNode) => (
      <p className="mt-12 mb-16">{children}</p>
    ),
    "heading-4": (node: any, children: ReactNode) => <p>{children}</p>,
    hyperlink: (node: any, children: ReactNode) => (
      <a className="underline" href={node.data?.uri}>
        {children}
      </a>
    ),
  },
};

export default async function ProductosLatinos() {
  const { fields } = await getPageTemplate("4770AAFB4vVhIKD1SAvrVe");
  console.log(fields);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <main className="text-center sm:px-10 mb-8 sm:mb-24 mx-2 sm:mx-24">
          <div className="py-24">
            <h1 className="text-2xl sm:text-5xl font-heading uppercase">
              {fields.title}
            </h1>
          </div>

          {fields.publicationBody &&
            documentToReactComponents(fields.publicationBody, options)}
          <hr />
          {fields.publicationBodyOne &&
            documentToReactComponents(fields.publicationBodyOne, options)}
          <hr />
          {fields.publicationBodyTwo &&
            documentToReactComponents(fields.publicationBodyTwo, options)}
          <hr />
          {fields.publicationBodyThree &&
            documentToReactComponents(fields.publicationBodyThree, options)}
          <hr />
          {fields.iconsFive &&
            documentToReactComponents(fields.iconsFive, options)}
        </main>
      </div>
    </>
  );
}
