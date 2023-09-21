import clsx from "clsx";

export function ListWithOrWithoutSubtitle(props: { fields: any }) {
  return (
    <div className="flex flex-col justify-center px-4 max-w-[550px] lg:max-w-[700px]">
      {props.fields.subtitle && (
        <h2 className="sm:text-3xl font-heading uppercase mb-4">
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
                    ? "list-decimal list-inside"
                    : "list-disc list-inside pl-5",
                  "py-6 px-4",
                )}
                key={Math.random() * index}
              >
                {content.content.map((listItem: any, itemIndex: number) =>
                  listItem.content.map(
                    (listContent: any, contentIndex: number) =>
                      listContent.nodeType === "paragraph" &&
                      listContent.content.map(
                        (text: any, textIndex: number) => (
                          <li
                            className="my-4 w-full sm:w-full lg:w-full pl-7 inline-block relative"
                            key={textIndex}
                          >
                            {props.fields.isOrderedList ? (
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
                                props.fields.isOrderedList ? "flex-grow" : ""
                              }
                            >
                              {text.value}
                            </span>
                          </li>
                        ),
                      ),
                  ),
                )}
              </ul>
            ),
        )}
      </div>
    </div>
  );
}
