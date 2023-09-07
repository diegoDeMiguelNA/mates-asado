import Image from "next/image";
import { getTextFromContentfulRichText } from "../homePageComponents/ExperienciasDeVida";
import clsx from "clsx";

export const SubtitleAndImage = (props: { fields: any }) => {
  const assets = props.fields.assets;
  const paragraph = props.fields.paragraph;

  const text = getTextFromContentfulRichText(paragraph);

  if (!assets || assets.length === 0) return null;

  return (
    <div>
      {props.fields.subtitle && (
        <h2
          className={clsx(
            "sm:text-3xl font-heading uppercase mb-2 pb-4 mt-4",
            !text && "lg:mb-4 lg:pb-4"
          )}
        >
          {props.fields.subtitle}
        </h2>
      )}
      {text && <p className="mb-8 pb-8 text-center mt-8 pt-4">{text}</p>}
      {assets.map((asset: any, index: number) => {
        const imageUrl = asset.fields.file.url;
        const secureImageUrl = imageUrl.startsWith("//")
          ? "https:" + imageUrl
          : imageUrl;
        return (
          <div key={index} className="mt-4 mb-4">
            <p className="mt-4 pt-4 mb-4 pb-4 text-xl">{asset.fields.title}</p>
            <span className="border-2">
            <Image
              key={index}
              src={secureImageUrl}
              alt={asset.fields.title || "Image"}
              width={asset.fields.file.details.image.width}
              height={asset.fields.file.details.image.height}
              className="mb-4 pb-8 inline-block w-full h-full object-cover rounded"
            />
            </span>
          </div>
        );
      })}
    </div>
  );
};
