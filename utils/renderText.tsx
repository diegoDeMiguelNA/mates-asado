import { IProductoLatinoFields } from "@/@types/generated/contentful";
import ProductoLatinoComponent from "@/app/components/ProductoLatino/ProductoLatino";
import BlogOnlyParagraph from "@/app/components/pageComponents/BlogOnlyParagraph";
import BlogSubtitleAndParagraph from "@/app/components/pageComponents/BlogSubtitleAndParagraph";
import Hyperlink from "@/app/components/pageComponents/Hyperlink";
import ListWithOrWithoutSubtitle, {
  ListWithOrWithoutSubtitleProps,
} from "@/app/components/pageComponents/ListWithOrWithoutSubtitle";
import MarginGenerator from "@/app/components/pageComponents/MarginGenerator";
import SubtitleAndImage from "@/app/components/pageComponents/SubtitleAndImage";
import TitleWithOrWithoutSubtitle from "@/app/components/pageComponents/TitleWithOrWithoutSubtitle";
import EmailComponent from "@/app/components/pageComponents/email";
import { Entry } from "contentful";

type EntryFields = {
  marginpadding?: number;
  isHrTag?: boolean;
};

export default function RenderContent({
  entries,
}: {
  entries: Entry<{ [fieldId: string]: unknown }>[];
}) {
  return (
    <>
      {entries.map(entry => {
        if (entry.sys.contentType.sys.id === "blogSubtitleAndParagraph") {
          return (
            <BlogSubtitleAndParagraph
              key={entry.sys.id}
              fields={entry.fields}
            />
          );
        }
        if (entry.sys.contentType.sys.id === "onlyParagraph") {
          return <BlogOnlyParagraph key={entry.sys.id} fields={entry.fields} />;
        }
        if (entry.sys.contentType.sys.id === "linkWithReference") {
          return <Hyperlink key={entry.sys.id} fields={entry.fields} />;
        }
        if (entry.sys.contentType.sys.id === "productoLatino") {
          return (
            <ProductoLatinoComponent
              key={entry.sys.id}
              data={entry.fields as unknown as IProductoLatinoFields}
            />
          );
        }
        if (entry.sys.contentType.sys.id === "titleWithOrWithoutSubtitle") {
          return (
            <TitleWithOrWithoutSubtitle
              key={entry.sys.id}
              fields={entry.fields}
            />
          );
        }
        if (entry.sys.contentType.sys.id === "listWithOrWithoutSubtitle") {
          return (
            <ListWithOrWithoutSubtitle
              key={entry.sys.id}
              fields={entry.fields as ListWithOrWithoutSubtitleProps["fields"]}
            />
          );
        }

        if (entry.sys.contentType.sys.id === "marginGenerator") {
          const { marginpadding, isHrTag } = entry.fields as EntryFields;
          return (
            <MarginGenerator
              key={entry.sys.id}
              marginpadding={marginpadding}
              isHrTag={isHrTag}
            />
          );
        }
        if (entry.sys.contentType.sys.id === "email") {
          return (
            <EmailComponent
              key={entry.sys.id}
              data={{ fields: entry.fields as { emailAdress?: string } }}
            />
          );
        }

        if (entry.sys.contentType.sys.id === "blogSubtitleParagraphAndImage") {
          return <SubtitleAndImage key={entry.sys.id} fields={entry.fields} />;
        }
        return null;
      })}
    </>
  );
}
