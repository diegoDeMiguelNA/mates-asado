import Image from "next/image";

interface ContentItem {
  nodeType: string;
  value?: string;
  data?: { uri: string };
  content?: ContentItem[];
}

interface BodyContent {
  nodeType: string;
  content: ContentItem[];
}

interface BlogOnlyParagraphProps {
  fields: {
    body?: {
      content: BodyContent[];
    };
  };
}

export default function BlogOnlyParagraph({ fields }: BlogOnlyParagraphProps) {
  const contentItems = fields?.body?.content;

  if (!contentItems || contentItems.length === 0) return null;

  return (
    <div className="px-6 text-left w-full flex flex-col items-center justify-center">
      {contentItems.map((item: ContentItem) => {
        if (item.nodeType === "paragraph" && item.content) {
          return (
            <div
              key={item.content[0]?.value}
              className="flex flex-col items-center justify-center"
            >
              {item.content.map((contentItem: ContentItem) => {
                if (contentItem.nodeType === "text") {
                  return contentItem.value;
                }
                if (contentItem.nodeType === "hyperlink" && contentItem.data) {
                  return (
                    <div className="mt-4 mb-4" key={contentItem.data.uri}>
                      <a
                        href={contentItem.data.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 flex items-center"
                      >
                        <span
                          style={{ paddingLeft: "2px", paddingRight: "2px" }}
                        >
                          <Image
                            src="/icons/open-in-new.svg"
                            alt="Open in new tab"
                            width={16}
                            height={16}
                          />
                        </span>
                        <span className="underline">
                          {contentItem?.content &&
                            contentItem?.content[0]?.value}
                        </span>
                      </a>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          );
        }
        if (item.nodeType === "unordered-list" && item.content) {
          return (
            <ul
              key={item.content[0]?.value}
              className="list-disc list-outside pl-5 w-full flex flex-col flex-wrap items-center justify-center"
            >
              {item.content.map((listItem: ContentItem) => {
                const key = listItem.content?.[0]?.value ?? "";
                const value = listItem.content?.[0]?.content?.[0]?.value ?? "";
                return (
                  <li
                    className="w-[250px] sm:w-[350px] lg:w-[500px] my-4 relative pl-7 inline-block"
                    key={key}
                  >
                    <span className="left-5">{value}</span>
                  </li>
                );
              })}
            </ul>
          );
        }
        if (item.nodeType === "ordered-list" && item.content) {
          return (
            <ol
              key={item.content[0]?.value}
              className="list-decimal list-outside pl-5 w-full flex flex-col flex-wrap items-center justify-center"
            >
              {item.content.map((listItem: ContentItem) => {
                const key = listItem.content?.[0]?.value ?? "";
                const value = listItem.content?.[0]?.content?.[0]?.value ?? "";
                return (
                  <li
                    className="w-[250px] sm:w-[350px] lg:w-[500px] my-4 relative pl-7 inline-block"
                    key={key}
                  >
                    <span className="absolute left-5">{value}</span>
                  </li>
                );
              })}
            </ol>
          );
        }
        return null;
      })}
    </div>
  );
}
