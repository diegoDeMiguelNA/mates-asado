import Image from "next/image";

export default function BlogOnlyParagraph(props: { fields: any }) {
  const contentItems = props?.fields?.body?.content;

  if (!contentItems || contentItems.length === 0) {
    return null;
  }

  return (
    <div className="px-6 text-left w-full flex flex-col items-center justify-center">
      {contentItems.map((item: any, index: number) => {
        if (item.nodeType === "paragraph") {
          return (
            <div
              key={index + Math.random() * index}
              className="flex flex-col items-center justify-center"
            >
              {item.content.map((contentItem: any, contentIndex: number) => {
                if (contentItem.nodeType === "text") {
                  return contentItem.value;
                } else if (contentItem.nodeType === "hyperlink") { 
                  return (
                    <div
                      className="mt-4 mb-4"
                      key={contentIndex - Math.random() * contentIndex}
                    >
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
                          {contentItem?.content[0]?.value}
                        </span>
                      </a>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          );
        } else if (item.nodeType === "unordered-list") {
          return (
            <ul
            key={Math.random() * index}
              className="list-disc list-outside pl-5 w-full flex flex-col flex-wrap items-center justify-center"
            >
              {item.content.map((listItem: any, listItemIndex: number) => (
                <li
                  className="w-[250px] sm:w-[350px] lg:w-[500px] my-4 relative pl-7 inline-block"
                  key={listItemIndex + Math.random() * listItemIndex}
                >
                  <span className="left-5">
                    {listItem?.content[0]?.content[0]?.value}
                  </span>
                </li>
              ))}
            </ul>
          );
        } else if (item.nodeType === "ordered-list") {
          return (
            <ol
            key={index + Math.random() * 5 * index}
              className="list-decimal list-outside pl-5 w-full flex flex-col flex-wrap items-center justify-center"
            >
              {item.content.map((listItem: any, listItemIndex: number) => (
                <li
                  className="w-[250px] sm:w-[350px] lg:w-[500px] my-4 relative pl-7 inline-block"
                  key={index + Math.random() * 7 * index}
                >
                  <span className="absolute left-5">
                    {listItem?.content[0]?.content[0]?.value}
                  </span>
                </li>
              ))}
            </ol>
          );
        }
        return null;
      })}
    </div>
  );
}
