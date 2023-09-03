import Image from "next/image";
import { Button } from "../button/button";
import { IBlogSubtitleParagraphAndImageFields } from "@/@types/generated/contentful";
import { Entry } from "contentful";
import { getSubtitleAndParagraphAndImage } from "@/lib/contentful/fetchDataFromContentful";

export default async function AboutUs() {
  const results: Entry<IBlogSubtitleParagraphAndImageFields> =
    await getSubtitleAndParagraphAndImage("7FOhJrA9q7cpExISJUp6db");

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
      <div className="about-us mb-16 mt-14 flex flex-col px-8 py-6 justify-center items-center mb-20 lg:mb-[160px] lg:pt-[90px]">
        <div className="relative h-[130px] w-[290px] md:w-[550px] md:h-[270px] lg:w-[850px] md:h-[410px] rounded-2xl overflow-hidden">
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
        <Button
          className="bg-regular-teal text-xxs md:text-xs lg:text-[12px] rounded-full mt-4"
          size="customPill"
          style={{ color: "white" }}
        >
          Coming Soon
        </Button>
      </div>
    )
  );
}
