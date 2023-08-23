import React, { useState } from "react";

import MobileMenu from "@/app/components/ResponsiveNavMenu/mobileMenu";
import { Entry } from "contentful";
import { IFuehrerscheinReusableFields } from "@/@types/generated/contentful";
import { getAnmeldung } from "@/lib/contentful/fetchDataFromContentful";
import { RenderContent } from "@/utils/renderText";

const Anmeldung: React.FC = async () => {
  const results: Entry<IFuehrerscheinReusableFields> = await getAnmeldung(
    "7henc1KRwe8D0b4FkJEHpn"
  );

  const { title, subtitle, pageBody } = results.fields;

  // console.log("results", results);

  pageBody?.map((entry, index) => {
    if (entry.sys.contentType.sys.id === "onlyParagraph") {
      console.log("entry", entry);
    }
  });

  return (
    <>
      <div className="mx-auto flex flex-col items-center">
        <main className="text-center mb-8 sm:mb-24 mx-2 sm:mx-4 flex flex-col justify-center items-center max-w-[800px]">
          <div className="pt-24 pb-4">
            <h2 className="text-2xl sm:text-5xl font-heading uppercase">
              {title}
            </h2>
          </div>

          <h3 className="text-xs mx-8 font-heading uppercase mb-4 sm:mx-24">
            {subtitle}
          </h3>

          {pageBody && <RenderContent entries={pageBody} />}
        </main>
      </div>
    </>
  );
};

export default Anmeldung;
