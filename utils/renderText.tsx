import { IProductoLatinoFields } from "@/@types/generated/contentful";
import ProductoLatinoComponent from "@/app/components/ProductoLatino/ProductoLatino";
import BlogOnlyParagraph from "@/app/components/pageComponents/BlogOnlyParagraph";
import BlogSubtitleAndParagraph from "@/app/components/pageComponents/BlogSubtitleAndParagraph";
import Hyperlink from "@/app/components/pageComponents/Hyperlink";
import { ListWithOrWithoutSubtitle } from "@/app/components/pageComponents/ListWithOrWithoutSubtitle";
import MarginGenerator from "@/app/components/pageComponents/MarginGenerator";
import { SubtitleAndImage } from "@/app/components/pageComponents/SubtitleAndImage";
import { TitleWithOrWithoutSubtitle } from "@/app/components/pageComponents/TitleWithOrWithoutSubtitle";
import { Entry } from "contentful";

type EntryFields = {
  marginpadding?: number;
  isHrTag?: boolean;
};

export const RenderContent = (props: {
  entries: Entry<{ [fieldId: string]: unknown }>[];
}) => {
  console.log(props.entries);
  return (
    <>
      {props.entries.map((entry, index) => {
        if (entry.sys.contentType.sys.id === "blogSubtitleAndParagraph") {
          return <BlogSubtitleAndParagraph key={index} fields={entry.fields} />;
        } else if (entry.sys.contentType.sys.id === "onlyParagraph") {
          return (
            <BlogOnlyParagraph
              key={Math.random() * index}
              fields={entry.fields}
            />
          );
        }
        if (entry.sys.contentType.sys.id === "linkWithReference") {
          return (
            <Hyperlink key={Math.random() * index} fields={entry.fields} />
          );
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
              key={Math.random() * index}
              fields={entry.fields}
            />
          );
        }
        if (entry.sys.contentType.sys.id === "listWithOrWithoutSubtitle") {
          return (
            <ListWithOrWithoutSubtitle
              key={Math.random() * index}
              fields={entry.fields}
            />
          );
        }
        if (entry.sys.contentType.sys.id === "marginGenerator") {
          const { marginpadding, isHrTag} = entry.fields as EntryFields;
          return (
            <MarginGenerator
              key={Math.random() * index}
              marginpadding={marginpadding}
              isHrTag={isHrTag}
            />
          );
        }
        if (entry.sys.contentType.sys.id === "blogSubtitleParagraphAndImage") {
          return (
            <SubtitleAndImage
              key={Math.random() * index}
              fields={entry.fields}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
