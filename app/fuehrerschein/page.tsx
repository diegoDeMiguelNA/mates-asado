import PageReusable from "@/app/components/pageReusable/PageReusable";
import { getReusablePage } from "@/lib/contentful/fetchDataFromContentful";
import { Entry } from "contentful";
import { IFuehrerscheinReusableFields } from "../actividades/page";
import BlogPostIcon from "../components/blogPostIcon/blogPostIcon";

export default async function Fuehrerschein() {
  const entryId: string = "4z4TZ5l87ag6Lv5xKeLIi";
  const fuehrerscheinPostId: string = "5yQbrUzypzLfOZKvX5hQ89";
  const results: Entry<IFuehrerscheinReusableFields> | undefined =
    await getReusablePage("2E3ScHAH6l40tgsmACj00I");
  const experience = results.fields.pageBody?.find(
    experienceItem => experienceItem.sys.id === fuehrerscheinPostId,
  );

  return (
    <>
      <PageReusable entryId={entryId} />
      <hr className="px-10 mt-10 w-3/4 lg:w-1/2 mx-auto" />
      {experience && (
        <div className="flex flex-col items-center justify-center w-100 mb-20 mt-20 px-10">
          <h3 className="mb-10 font-heading">
            Experiencia paso a paso, como hacer el Umschreibung
          </h3>
          <BlogPostIcon
            key={experience.sys.id}
            title={experience.fields.nombreDeLaExperiencia || ""}
            subtitle={experience.fields.subtitle || ""}
            imageUrl="/images/experiencia-fuehrerschein.webp"
            postType="experiencias"
            slug={experience.fields.slug || ""}
          />
        </div>
      )}
    </>
  );
}
