import clsx from "clsx";
import { Entry } from "contentful";
import Image from "next/image";

export const RenderContent = (props: {
  entries: Entry<{ [fieldId: string]: unknown }>[];
}) => {
  return (
    <>
      {props.entries.map((entry, index) => {
        if (entry.sys.contentType.sys.id === "blogSubtitleAndParagraph") {
          return <BlogSubtitleAndParagraph key={index} fields={entry.fields} />;
        } else if (entry.sys.contentType.sys.id === "onlyParagraph") {
          return <BlogOnlyParagraph key={index} fields={entry.fields} />;
        }
        if (entry.sys.contentType.sys.id === "linkWithReference") {
          return <Hyperlink key={index} fields={entry.fields} />;
        } else if (
          entry.sys.contentType.sys.id === "listWithOrWithoutSubtitle"
        ) {
          return (
            <ListWithOrWithoutSubtitle key={index} fields={entry.fields} />
          );
        }
        if (entry.sys.contentType.sys.id === "blogSubtitleParagraphAndImage") {
          return <SubtitleAndImage key={index} fields={entry.fields} />;
        } else {
          return null;
        }
      })}
    </>
  );
};

const Hyperlink = (props: { fields: any }) => {
  const hyperlinkData =
    props?.fields?.linkUrlString?.content?.[0]?.content?.find(
      (item: { nodeType: string }) => item.nodeType === "hyperlink"
    );

  if (!hyperlinkData) return null;

  const url = hyperlinkData.data.uri;
  const displayText = hyperlinkData.content?.[0]?.value;

  const reference = props.fields.reference ? `(${props.fields.reference})` : "";

  return (
    <div className="my-4">
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
};

const BlogSubtitleAndParagraph = (props: { fields: any }) => {
  return (
    <div className={clsx(props.fields.subtitle && "mt-10")}>
      {props.fields.subtitle && (
        <h2 className="mt-10 mb-16 text-l sm:text-3xl font-heading uppercase sm:mt-16 lg:mt-12">
          {props.fields.subtitle}
        </h2>
      )}
      {props.fields.paragraph &&
        props.fields.paragraph.content &&
        props.fields.paragraph.content.map(
          (content: any, index: number) =>
            content.nodeType === "paragraph" &&
            content.content.map((text: any, textIndex: number) => (
              <p className="px-6 text-left py-2" key={textIndex}>
                {text.value}
              </p>
            ))
        )}
    </div>
  );
};

const BlogOnlyParagraph = (props: { fields: any }) => {
  const contentItems = props?.fields?.body?.content;

  if (!contentItems || contentItems.length === 0) {
    return null; // or some fallback UI if you prefer
  }

  return (
    <div className="mt-4 mb-4 px-6 text-left w-full flex flex-col items-center justify-center">
      {contentItems.map((item: any, index: number) => {
        if (item.nodeType === "paragraph") {
          return <p key={index}>{item?.content[0]?.value}</p>;
        } else if (item.nodeType === "unordered-list") {
          return (
            <ul
              key={index}
              className="list-disc list-outside pl-5 w-full flex flex-col flex-wrap items-center justify-center"
            >
              {item.content.map((listItem: any, listItemIndex: number) => (
                <li
                  className="w-[250px] sm:w-[350px] lg:w-[500px] my-4 relative pl-7 inline-block"
                  key={listItemIndex}
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
              key={index}
              className="list-decimal list-outside pl-5 w-full flex flex-col flex-wrap items-center justify-center"
            >
              {item.content.map((listItem: any, listItemIndex: number) => (
                <li
                  className="w-[250px] sm:w-[350px] lg:w-[500px] my-4 relative pl-7 inline-block"
                  key={listItemIndex}
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
};

const ListWithOrWithoutSubtitle = (props: { fields: any }) => {
  return (
    <div className="flex flex-col justify-center px-4 min-h-screen max-w-[550px] mt-12">
      {props.fields.subtitle && (
        <h2 className="mt-10 sm:text-3xl font-heading uppercase mb-4">
          {props.fields.subtitle}
        </h2>
      )}
      <div className="max-w-xl text-left">
        {props.fields.list.content.map(
          (content: any, index: number) =>
            content.nodeType === "unordered-list" && (
              <ul
                className={clsx(
                  props.fields.isOrderedList
                    ? "list-decimal list-inside pl-0 list-disc list-outside pl-5 w-full flex flex-col flex-wrap items-center justify-center"
                    : "list-disc list-outside pl-5 w-full flex flex-col flex-wrap items-center justify-center",
                  "py-6 px-4"
                )}
                key={index}
              >
                {content.content.map((listItem: any, itemIndex: number) =>
                  listItem.content.map(
                    (listContent: any, contentIndex: number) =>
                      listContent.nodeType === "paragraph" &&
                      listContent.content.map(
                        (text: any, textIndex: number) => (
                          <li
                            className={clsx(
                              "my-4 w-[250px] sm:w-[350px] lg:w-[500px] my-4 pl-7 inline-block",
                              props.fields.isOrderedList
                                ? "flex items-start"
                                : "pl-5",
                              "relative"
                            )}
                            key={textIndex}
                          >
                            {props.fields.isOrderedList && (
                              <span className="absolute left-0">
                                {itemIndex + 1}.
                              </span>
                            )}
                            <span
                              className={
                                props.fields.isOrderedList ? "ml-8" : ""
                              }
                            >
                              {text.value}
                            </span>
                          </li>
                        )
                      )
                  )
                )}
              </ul>
            )
        )}
      </div>
    </div>
  );
};

const SubtitleAndImage = (props: { fields: any }) => {
  const imageUrl =
    props.fields.assets && props.fields.assets[0]?.fields?.file?.url;

  const secureImageUrl = imageUrl.startsWith("//")
    ? "https:" + imageUrl
    : imageUrl;

  if (!imageUrl) return null;

  return (
    <div className="mt-10 mb-10">
      {/* {props.fields.subtitle && (
        <h2 className="mb-4 text-l sm:text-3xl font-heading uppercase">
          {props.fields.subtitle}
        </h2>
      )} */}
      <Image
        src={secureImageUrl}
        alt={props.fields.assets[0]?.fields?.title || "Image"}
        width={props.fields.assets[0]?.fields?.file?.details?.image?.width}
        height={props.fields.assets[0]?.fields?.file?.details?.image?.height}
      />
    </div>
  );
};
