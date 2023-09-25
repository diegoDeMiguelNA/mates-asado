import { getSubtitleAndParagraphAndImage } from "@/lib/contentful/fetchDataFromContentful";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button/button";

export function getTextFromContentfulRichText(paragraph?: Document) {
  if (!paragraph) return "";
  const contentArray = paragraph.content;
  let text = "";

  contentArray.forEach(content => {
    content.content.forEach(innerContent => {
      if (innerContent.nodeType === "text") {
        text += innerContent.value;
      }
    });
  });

  return text;
}

export default async function ExperienciasDeVida() {
  const results = await getSubtitleAndParagraphAndImage(
    "2FSjWb3HaXM9obR4vqS1Gr",
  );
  const { subtitle, paragraph, assets } = results.fields;
  const imageUrl = assets
    ? `http:${assets[0].fields.file.url}`
    : "/images/rathaus-full.webp";
  const imageAlt = assets
    ? assets[0].fields.description || "Hamburg Townhall"
    : "";

  return (
    <div className="experiencias-de-vida w-full min-h-[430px] lg:min-h-[600px] flex flex-col md:grid md:grid-cols-2 bg-regular-grey mb-4 lg:justify-items-center">
      <div className="relative w-full h-[110px] md:h-full overflow-hidden lg:h-auto lg:min-h-[430px] lg:flex lg:py-15 lg:pl-15 ">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover object-bottom md:object-center lg:object-bottom lg:max-h-full md:p-8 lg:max-w-[600px] lg:block lg:mx-auto lg:pl-0"
        />
      </div>

      <div className="flex-grow flex flex-col items-center px-9 sm:px-16 lg:px-12 space-y-4 py-16 lg:py-0 justify-center">
        <h3 className="text-center text-s md:text-xl text-regular-red font-bold">
          {subtitle}
        </h3>
        <p
          className="text-center text-s md:text-sm font-light lg:max-w-[350px] mx-auto"
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
  );
}
