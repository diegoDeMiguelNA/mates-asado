interface Content {
  nodeType: string;
  content: { value: string }[];
}

interface BlogSubtitleAndParagraphProps {
  fields: {
    subtitle?: string;
    paragraph?: {
      content: Content[];
    };
  };
}

export default function BlogSubtitleAndParagraph({
  fields,
}: BlogSubtitleAndParagraphProps) {
  return (
    <div>
      {fields.subtitle && (
        <h2 className="mb-16 text-l sm:text-3xl font-heading uppercase">
          {fields.subtitle}
        </h2>
      )}
      {fields.paragraph?.content?.map(content =>
        content.nodeType === "paragraph"
          ? content.content.map(text => (
              <p className="px-6 text-left py-2" key={text.value}>
                {text.value}
              </p>
            ))
          : null,
      )}
    </div>
  );
}
