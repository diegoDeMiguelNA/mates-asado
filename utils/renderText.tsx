import { Entry } from "contentful";


export const RenderContent = (props: { entries: Entry<{ [fieldId: string]: unknown }>[] }) => {
  return (
    <>
      {props.entries.map((entry, index) => {
        if (entry.sys.contentType.sys.id === "blogSubtitleAndParagraph") {
          return <BlogSubtitleAndParagraph key={index} fields={entry.fields} />;
        } else if (
          entry.sys.contentType.sys.id === "listWithOrWithoutSubtitle"
        ) {
          return (
            <ListWithOrWithoutSubtitle key={index} fields={entry.fields} />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

const BlogSubtitleAndParagraph = (props: { fields: any }) => {
  return (
    <>
      <h2 className="mt-10 mb-8 text-l sm:text-3xl font-heading uppercase sm:mt-16 lg:mt-12">
        {props.fields.subtitle}
      </h2>
      {props.fields.paragraph.content.map(
        (content: any, index: number) =>
          content.nodeType === "paragraph" &&
          content.content.map((text: any, textIndex: number) => (
            <p className="px-6 text-left py-2" key={textIndex}>
              {text.value}
            </p>
          ))
      )}
    </>
  );
};

const ListWithOrWithoutSubtitle = (props: { fields: any }) => {
    return (
      <div className="flex justify-center px-4  min-h-screen max-w-[500px]">
        <div className="max-w-xl text-left">
          <h2 className="mt-10 sm:text-3xl font-heading uppercase">
            {props.fields.subtitle}
          </h2>
          {props.fields.list.content.map(
            (content: any, index: number) =>
              content.nodeType === "unordered-list" && (
                <ul className="py-6 list-inside list-decimal" key={index}>
                  {content.content.map((listItem: any, itemIndex: number) =>
                    listItem.content.map(
                      (listContent: any, contentIndex: number) =>
                        listContent.nodeType === "paragraph" &&
                        listContent.content.map((text: any, textIndex: number) => (
                          <li key={textIndex}>{text.value}</li>
                        ))
                    )
                  )}
                </ul>
              )
          )}
        </div>
      </div>
    );
  };
  
  
