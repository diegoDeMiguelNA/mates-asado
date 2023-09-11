import { getSubtitleAndParagraphAndImage } from "@/lib/contentful/fetchDataFromContentful";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button/button";
import { Document } from "@contentful/rich-text-types";

export function getTextFromContentfulRichText(paragraph: Document) {
  const contentArray = paragraph.content;
  let text = "";

  contentArray.forEach((content) => {
    content.content.forEach((innerContent) => {
      if (innerContent.nodeType === "text") {
        text += innerContent.value;
      }
    });
  });

  return text;
}

export default async function ExperienciasDeVida() {
  const results = await getSubtitleAndParagraphAndImage(
    "2FSjWb3HaXM9obR4vqS1Gr"
  );

  const { subtitle, paragraph, assets } = results.fields;

  // is this check necessary?
  if (Object.keys(results).length === 0) return;

  return (
    <div className="experiencias-de-vida mb-16 w-full grid h-full min-h-[420px] md:mt-6 md:min-h-[400px] lg:pt-8 lg:pb-8 bg-regular-grey flex-col">
      <section className="relative w-full z-50 h-[200px] md:h-[250px] lg:hidden">
        <Image
          src={
            assets
              ? `http:${assets[0].fields.file.url}`
              : "/images/rathaus-full.webp"
          }
          alt={assets ? assets[0].fields.description || "Hamburg Townhall" : ""}
          fill
          className="object-cover"
        />
      </section>

      <div className="flex flex-col mb-10 w-full justify-end max-h-[370px] px-9 sm:px-16 md:mb-16 lg:mb-0 lg:grid lg:grid-cols-2 lg:py-10 lg:px-12 lg:max-h-none">
        <section className="relative hidden lg:block lg:h-[550px] lg:w-[480px] justify-self-center">
          <Image
            src={
              assets
                ? `http:${assets[0].fields.file.url}`
                : "/images/rathaus-full.webp"
            }
            alt={
              assets ? assets[0].fields.description || "Hamburg Townhall" : ""
            }
            fill
            style={{ objectFit: "cover", objectPosition: "bottom" }}
          />
        </section>

        <div className="flex flex-col items-center lg:items-center justify-center space-y-4 mb-4 md:mb-2 pt-10 lg:pt-0">
          <h3 className="text-s md:text-xl text-regular-red font-bold">
            {subtitle}
          </h3>
          <p
            className="text-s md:text-sm font-light sm:max-w-[550px] lg:max-w-[400px]"
            style={{ lineHeight: "1.5rem" }}
          >
            {paragraph && getTextFromContentfulRichText(paragraph)}
          </p>
          <Link href="/experiencias">
            <Button
              className="bg-regular-red text-xxs md:text-xs lg:text-[12px] rounded-full mt-4 py-4"
              size="customPill"
              style={{ color: "white" }}
            >
              Ver más
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
