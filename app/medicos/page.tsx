import { IMedicoprofesionalDeLaSalud } from "@/@types/generated/contentful";
import MedicosList from "./medicos";
import { getReusablePage } from "@/lib/contentful/fetchDataFromContentful";

type MedicosPageContent = {
  title: string;
  subtitle: string;
  pageBody: IMedicoprofesionalDeLaSalud[];
};

export default async function Medicos({
  searchParams,
}: {
  searchParams: { language: string | undefined; specialty: string | undefined };
}) {
  const {
    fields: { title, subtitle, pageBody },
  } = await getReusablePage<MedicosPageContent>("7815QrUkSC1g3On5DHk7Me");

  return (
    <main className="text-center">
      <div className="py-12 px-4 lg:px-12">
        <div className=" flex flex-col items-center justify-center">
          <h2 className="text-2xl sm:text-5xl font-heading uppercase">
            {title}
          </h2>
          <h3 className="text-sm mx-8 font-heading uppercase pt-10 mb-4 sm:mx-24">
            {subtitle}
          </h3>
        </div>
        <MedicosList
          specialty={searchParams.specialty}
          language={searchParams.language}
          data={pageBody}
        />
      </div>
    </main>
  );
}
