import Image from "next/image";

export const SubtitleAndImage = (props: { fields: any }) => {
  const imageUrl = props.fields.assets && props.fields.assets[0]?.fields?.file?.url;
  const secureImageUrl = imageUrl.startsWith("//") ? "https:" + imageUrl : imageUrl;

  if (!imageUrl) return null;

  return (
    <div className="mt-10 mb-10">
      <Image
        src={secureImageUrl}
        alt={props.fields.assets[0]?.fields?.title || "Image"}
        width={props.fields.assets[0]?.fields?.file?.details?.image?.width}
        height={props.fields.assets[0]?.fields?.file?.details?.image?.height}
      />
    </div>
  );
};
