import clsx from "clsx";

export default function BlogSubtitleAndParagraph(props: { fields: any }) {
  return (
    <div>
      {props.fields.subtitle && (
        <h2 className="mb-16 text-l sm:text-3xl font-heading uppercase">
          {props.fields.subtitle}
        </h2>
      )}
      {props.fields.paragraph &&
        props.fields.paragraph.content &&
        props.fields.paragraph.content.map(
          (content: any, index: number) =>
            content.nodeType === "paragraph" &&
            content.content.map((text: any, textIndex: number) => (
              <p className="px-6 text-left py-2" key={Math.random() * textIndex}>
                {text.value}
              </p>
            ))
        )}
    </div>
  );
}
