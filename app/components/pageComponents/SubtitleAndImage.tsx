import Image from "next/image";
import { getTextFromContentfulRichText } from "../homePageComponents/ExperienciasDeVida";

export const SubtitleAndImage = (props: { fields: any }) => {
  const assets = props.fields.assets;
  const paragraph = props.fields.paragraph;

  const text = getTextFromContentfulRichText(paragraph);

  if (!assets || assets.length === 0) return null;

  return (
    <div>
      {props.fields.subtitle && (
        <h2 className="sm:text-3xl font-heading uppercase mb-4 pb-8 mt-4 lg:mb-8 lg:pb-8">
          {props.fields.subtitle}
        </h2>
      )}
      <p className="mb-8 pb-8">{text}</p>
      {assets.map((asset: any, index: number) => {
        const imageUrl = asset.fields.file.url;
        const secureImageUrl = imageUrl.startsWith("//")
          ? "https:" + imageUrl
          : imageUrl;
        return (
          <Image
            key={index}
            src={secureImageUrl}
            alt={asset.fields.title || "Image"}
            width={asset.fields.file.details.image.width}
            height={asset.fields.file.details.image.height}
            className="mb-4 pb-8"
          />
        );
      })}
    </div>
  );
};
