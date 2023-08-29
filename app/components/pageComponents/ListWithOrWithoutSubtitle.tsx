import clsx from "clsx";

export const ListWithOrWithoutSubtitle = (props: { fields: any }) => {
  return (
    <div className="flex flex-col justify-center px-4 min-h-screen max-w-[550px] mt-8 mb-12">
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
                              <span
                                style={{ marginRight: "5px" }}
                                className="flex-shrink-0 mr-2"
                              >
                                {itemIndex + 1}.
                              </span>
                            )}
                            <span
                              className={
                                props.fields.isOrderedList ? "flex-grow" : ""
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
