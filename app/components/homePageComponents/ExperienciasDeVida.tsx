import Image from "next/image";
import { Button } from "../button/button";
import { IBlogSubtitleParagraphAndImageFields } from "@/@types/generated/contentful";
import { Entry } from "contentful";
import { getSubtitleAndParagraphAndImage } from "@/lib/contentful/fetchDataFromContentful";
import Link from "next/link";

export function getTextFromContentfulRichText(paragraph: { content: any }) {
  if (!paragraph) {
    return "";
  }
  const contentArray = paragraph.content;
  let text = "";

  contentArray.forEach((content: { content: any[] }) => {
    if (content.content) {
      content.content.forEach((innerContent) => {
        if (innerContent.value) {
          text += innerContent.value;
        }
      });
    }
  });

  return text;
}

export default async function ExperienciasDeVida() {
  const results: Entry<IBlogSubtitleParagraphAndImageFields> =
    await getSubtitleAndParagraphAndImage("2FSjWb3HaXM9obR4vqS1Gr");

  const { subtitle, paragraph, assets } = results.fields;

  return (
    Object.keys(results).length !== 0 && (
      <div className="experiencias-de-vida mb-16 w-full grid h-full min-h-[420px] md:mt-6 md:min-h-[400px] lg:pt-8 lg:pb-8 bg-regular-grey flex-col">
        <section className="absolute w-full z-50 h-[100px] md:h-[120px] lg:hidden">
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
            style={{ objectFit: "cover" }}
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

          <div className="flex flex-col items-center lg:items-center justify-center space-y-4 mb-4 md:mb-2">
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
                className="bg-regular-teal text-xxs md:text-xs lg:text-[12px] rounded-full mt-4 py-4"
                size="customPill"
                style={{ color: "white" }}
              >
                Ver más
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
