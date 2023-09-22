import Image from "next/image";

interface HyperlinkData {
  nodeType: string;
  data: { uri: string };
  content?: { value: string }[];
}

interface HyperlinkProps {
  fields: {
    linkUrlString?: {
      content?: {
        content?: HyperlinkData[];
      }[];
    };
    reference?: string;
  };
}

export default function Hyperlink({ fields }: HyperlinkProps) {
  const hyperlinkData = fields?.linkUrlString?.content?.[0]?.content?.find(
    (item: HyperlinkData) => item.nodeType === "hyperlink",
  );

  if (!hyperlinkData) return null;

  const url = hyperlinkData.data.uri;
  const displayText = hyperlinkData.content?.[0]?.value;
  const reference = fields.reference ? `(${fields.reference})` : "";

  return (
    <div className="mt-4 mb-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 flex items-center"
      >
        <span>{reference}</span>
        <span style={{ paddingLeft: "2px", paddingRight: "2px" }}>
          <Image
            src="/icons/open-in-new.svg"
            alt="Open in new tab"
            width={16}
            height={16}
          />
        </span>
        <span className="underline">{displayText}</span>
      </a>
    </div>
  );
}
