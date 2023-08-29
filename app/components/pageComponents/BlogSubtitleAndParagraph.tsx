import clsx from "clsx";

export default function BlogSubtitleAndParagraph(props: { fields: any }) {
  return (
    <div className={clsx(props.fields.subtitle && "pt-12 mt-4")}>
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
}
