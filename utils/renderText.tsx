import BlogOnlyParagraph from "@/app/components/pageComponents/BlogOnlyParagraph";
import BlogSubtitleAndParagraph from "@/app/components/pageComponents/BlogSubtitleAndParagraph";
import Hyperlink from "@/app/components/pageComponents/Hyperlink";
import { ListWithOrWithoutSubtitle } from "@/app/components/pageComponents/ListWithOrWithoutSubtitle";
import { SubtitleAndImage } from "@/app/components/pageComponents/SubtitleAndImage";
import { TitleWithOrWithoutSubtitle } from "@/app/components/pageComponents/TitleWithOrWithoutSubtitle";
import { Entry } from "contentful";

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
        }
        if (entry.sys.contentType.sys.id === "titleWithOrWithoutSubtitle") {
          return (
            <TitleWithOrWithoutSubtitle key={index} fields={entry.fields} />
          );
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
