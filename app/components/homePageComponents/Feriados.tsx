import { IBlogSubtitleParagraphAndImageFields } from "@/@types/generated/contentful";
import { getSubtitleAndParagraphAndImage } from "@/lib/contentful/fetchDataFromContentful";
import { Entry } from "contentful";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button/button";
import { getTextFromContentfulRichText } from "./ExperienciasDeVida";

export default async function Elecciones() {
  const results: Entry<IBlogSubtitleParagraphAndImageFields> =
    await getSubtitleAndParagraphAndImage("4FDkPymFSxK5sHjXiMdPYf");

  const { subtitle, paragraph, assets } = results.fields;

  if (!results) return null;

  return (
    <div className="elecciones flex flex-col px-4 md:px-8 justify-center items-center mb-12 md:mb-12 pb-12 md:pb-24 lg:mb-[100px] lg:pt-[90px] bg-light-yellow">
      <div className="relative h-[160px] w-[320px] sm:w-[480px] sm:h-[350px] md:w-[600px] md:h-[350px] lg:w-[850px] overflow-hiddenx">
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
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        <div className="bg-black opacity-40 absolute top-0 left-0 w-full h-full" />
        <div className="p-4 w-full h-full absolute flex flex-col justify-center items-center">
          <h3
            className="text-lg md:text-s lg:text-2xl text-white font-bold md:mb-4 text-center "
            style={{ color: "#FFFFFF" }}
          >
            {subtitle}
          </h3>
          <p
            className="text-xs text-white font-bold md:text-lg md:px-2 mb-2 md:mb-4 max-w-[800px] text-center"
            style={{ lineHeight: "1.5rem" }}
          >
            {paragraph && getTextFromContentfulRichText(paragraph)}
          </p>
          <Link className="mt-2 md:mt-4" href="/feriados" passHref>
            <Button
              className="bg-regular-teal text-xxxs md:text-xxs lg:text-[12px] rounded-full py-2 md:py-4"
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
