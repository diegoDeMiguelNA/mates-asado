import Image from "next/image";

export const SubtitleAndImage = (props: { fields: any }) => {
  const imageUrl = props.fields.assets && props.fields.assets[0]?.fields?.file?.url;
  const secureImageUrl = imageUrl.startsWith("//") ? "https:" + imageUrl : imageUrl;

  if (!imageUrl) return null;

  return (
    <div>
      {props.fields.subtitle && (
        <h2 className="sm:text-3xl font-heading uppercase mb-4">
          {props.fields.subtitle}
        </h2>
      )}
      <Image
        src={secureImageUrl}
        alt={props.fields.assets[0]?.fields?.title || "Image"}
        width={props.fields.assets[0]?.fields?.file?.details?.image?.width}
        height={props.fields.assets[0]?.fields?.file?.details?.image?.height}
      />
    </div>
  );
};
