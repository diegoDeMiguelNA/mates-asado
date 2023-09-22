import clsx from "clsx";

interface Content {
  value?: string;
  nodeType: string;
  content?: Content[];
}

export interface ListWithOrWithoutSubtitleProps {
  fields: {
    subtitle?: string;
    list: {
      content: Content[];
    };
    isOrderedList: boolean;
  };
}

export default function ListWithOrWithoutSubtitle({
  fields,
}: ListWithOrWithoutSubtitleProps) {
  return (
    <div className="flex flex-col justify-center px-4 max-w-[550px] lg:max-w-[700px]">
      {fields.subtitle && (
        <h2 className="sm:text-3xl font-heading uppercase mb-4">
          {fields.subtitle}
        </h2>
      )}
      <div className="max-w-xl text-left">
        {fields.list.content.map(
          content =>
            content.nodeType === "unordered-list" && (
              <ul
                className={clsx(
                  fields.isOrderedList
                    ? "list-decimal list-inside"
                    : "list-disc list-inside pl-5",
                  "py-6 px-4",
                )}
                key={content.value}
              >
                {content.content &&
                  content.content.map(
                    (listItem, itemIndex) =>
                      listItem.content &&
                      listItem.content.map(
                        listContent =>
                          listContent.nodeType === "paragraph" &&
                          listContent.content &&
                          listContent.content.map(text => (
                            <li
                              className="my-4 w-full sm:w-full lg:w-full pl-7 inline-block relative"
                              key={text.toString()}
                            >
                              {fields.isOrderedList ? (
                                <span
                                  style={{ marginRight: "5px" }}
                                  className="flex-shrink-0 mr-2"
                                >
                                  {itemIndex + 1}.
                                </span>
                              ) : (
                                "- "
                              )}
                              <span
                                className={
                                  fields.isOrderedList ? "flex-grow" : ""
                                }
                              >
                                {text.value}
                              </span>
                            </li>
                          )),
                      ),
                  )}
              </ul>
            ),
        )}
      </div>
    </div>
  );
}
