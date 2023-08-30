import Image from "next/image";
import { Button } from "../button/button";
import { IBlogSubtitleParagraphAndImageFields } from "@/@types/generated/contentful";
import { Entry } from "contentful";
import { getSubtitleAndParagraphAndImage } from "@/lib/contentful/fetchDataFromContentful";

export default async function ExperienciasDeVida() {

  const results: Entry<IBlogSubtitleParagraphAndImageFields> =
    await getSubtitleAndParagraphAndImage("2FSjWb3HaXM9obR4vqS1Gr");

  const { subtitle, paragraph, assets } = results.fields;

  function getTextFromContentfulRichText(paragraph: { content: any }) {
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

  return (
    Object.keys(results).length !== 0 && (
      <div className="experiencias-de-vida mb-16 w-full flex">
        <section className="relative h-[200px] md:h-[300px] lg:hidden">
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

        <div className="lg:grid lg:grid-cols-2 md:flex md:justify-center md:h-[350px] lg:h-[720px] bg-regular-grey px-16 py-10 items-center lg:px-12 w-full flex">
          <section className="relative hidden lg:block lg:h-[600px] lg:w-[500px] justify-self-center">
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

          <div className="flex flex-col items-center lg:items-center justify-center space-y-4 justify-self-center">
            <h3 className="text-s md:text-xl text-regular-red font-bold">
              {subtitle}
            </h3>
            <p
              className="text-s md:text-sm font-light max-w-[550px] lg:max-w-[600px]"
              style={{ lineHeight: "1.5rem" }}
            >
              {paragraph && getTextFromContentfulRichText(paragraph)}
            </p>
            <Button
              className="bg-regular-red text-xxs md:text-xs lg:text-[12px] rounded-full mt-4"
              size="customPill"
              style={{ color: "white" }}
            >
              Coming Soon
            </Button>
          </div>
        </div>
      </div>
    )
  );
}
