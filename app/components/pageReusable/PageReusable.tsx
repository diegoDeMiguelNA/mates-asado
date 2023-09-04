import { Entry } from "contentful";
import { IFuehrerscheinReusableFields } from "@/@types/generated/contentful";
import { getReusablePage } from "@/lib/contentful/fetchDataFromContentful";
import { RenderContent } from "@/utils/renderText";

interface PageReusableProps {
  entryId: string;
  showLastUpdated?: boolean;
}

const PageReusable: React.FC<PageReusableProps> = async ({
  entryId,
  showLastUpdated = true,
}) => {
  const results: Entry<IFuehrerscheinReusableFields> =
    await getReusablePage(entryId);

  const { title, subtitle, pageBody } = results.fields;
  const { sys } = results;

  console.log("results", results);

  // pageBody?.map((entry: { sys: { contentType: { sys: { id: string; }; }; }; }, index: any) => {
  //   if (entry.sys.contentType.sys.id === "marginGenerator") {
  //     console.log("entry", entry);
  //   }
  // });

  return (
    <>
      <div className="mx-auto flex flex-col items-center">
        <main className="text-center mb-8 sm:mb-24 mx-2 sm:mx-4 flex flex-col justify-center items-center max-w-[800px]">
          <div className="pt-24 pb-4">
            <h2 className="text-2xl sm:text-5xl font-heading uppercase">
              {title}
            </h2>
            <h3 className="text-sm mx-8 font-heading uppercase pt-10 mb-4 sm:mx-24">
              {subtitle}
            </h3>
            {showLastUpdated && (
              <h4 className="text-sm mx-8 pt-10 mb-4 sm:mx-24 underline">
                Ultima actualización:{" "}
                {new Date(sys.updatedAt).toLocaleDateString("de-DE")}
              </h4>
            )}
          </div>
          {pageBody && <RenderContent entries={pageBody} />}
        </main>
      </div>
    </>
  );
};

export default PageReusable;
