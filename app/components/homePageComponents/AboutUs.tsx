import Image from "next/image";
import { Button } from "../button/button";
import { IBlogSubtitleParagraphAndImageFields } from "@/@types/generated/contentful";
import { Entry } from "contentful";
import { getSubtitleAndParagraphAndImage } from "@/lib/contentful/fetchDataFromContentful";
import { getTextFromContentfulRichText } from "./ExperienciasDeVida";
import Link from "next/link";

export default async function AboutUs() {
  const results: Entry<IBlogSubtitleParagraphAndImageFields> =
    await getSubtitleAndParagraphAndImage("7FOhJrA9q7cpExISJUp6db");

  const { subtitle, paragraph, assets } = results.fields;

  return (
    Object.keys(results).length !== 0 && (
      <div className="about-us mb-16 mt-14 flex flex-col px-8 py-6 justify-center items-center mb-20 lg:mb-[100px] lg:pt-[90px]">
        <div className="relative h-[160px] w-[320px] sm:w-[480px] sm:h-[350px] md:w-[600px] md:h-[350px] lg:w-[850px] rounded-2xl overflow-hidden">
          <Image
            src={
              assets
                ? `http:${assets[0].fields.file.url}`
                : "/images/rainbow.webp"
            }
            alt={
              assets
                ? assets[0].fields.description || "Building with rainbow on top"
                : ""
            }
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h3 className="text-s md:text-xl text-regular-teal font-bold mb-4 mt-12 lg:mt-16">
          {subtitle}
        </h3>
        <p
          className="text-s md:text-sm md:px-6 font-light mb-4 max-w-[800px]"
          style={{ lineHeight: "1.5rem" }}
        >
          {paragraph && getTextFromContentfulRichText(paragraph)}
        </p>
        <Link href="/pages/about-us" passHref>
          <Button
            className="bg-regular-teal text-xxs md:text-xs lg:text-[12px] rounded-full mt-4"
            size="customPill"
            style={{ color: "white" }}
          >
            Ver más
          </Button>
        </Link>
      </div>
    )
  );
}
