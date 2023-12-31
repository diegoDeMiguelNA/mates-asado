import { Entry } from "contentful";
import { IFuehrerscheinReusableFields } from "@/@types/generated/contentful";
import { getReusablePage } from "@/lib/contentful/fetchDataFromContentful";
import RenderContent from "@/utils/renderText";

const Anmeldung: React.FC = async () => {
  const results: Entry<IFuehrerscheinReusableFields> = await getReusablePage(
    "3dU25LE6GiHbXrKrTl22wV",
  );

  const { title, subtitle, pageBody } = results.fields;

  return (
    <div className="mx-auto flex flex-col items-center">
      <main className="text-center mb-8 sm:mb-24 mx-2 sm:mx-4 flex flex-col justify-center items-center max-w-[800px]">
        <div className="pt-24 pb-4">
          <h2 className="text-2xl sm:text-5xl font-heading uppercase">
            {title}
          </h2>
        </div>

        <h3 className="text-sm mx-8 font-heading uppercase mb-4 sm:mx-24">
          {subtitle}
        </h3>

        {pageBody && <RenderContent entries={pageBody} />}
      </main>
    </div>
  );
};

export default Anmeldung;
