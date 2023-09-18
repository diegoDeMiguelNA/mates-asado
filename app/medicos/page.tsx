import { IMedicoprofesionalDeLaSalud } from "@/@types/generated/contentful";
import MedicosList from "./medicos";
import { getReusablePage } from "@/lib/contentful/fetchDataFromContentful";
import { notFound } from "next/navigation";

type MedicosPageContent = {
  title: string;
  subtitle: string;
  pageBody: IMedicoprofesionalDeLaSalud[];
};

const getMedicosData = async () => {
  const { fields } = await getReusablePage<MedicosPageContent>(
    "7815QrUkSC1g3On5DHk7Me"
  );
  if (!fields.pageBody) return notFound();
  return fields;
};

export default async function Medicos() {
  const { title, subtitle, pageBody } = await getMedicosData();
  const filtered = pageBody.filter(
    (el) => el.sys.contentType.sys.id === "medicoprofesionalDeLaSalud"
  );

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
        <MedicosList data={filtered} />
      </div>
    </main>
  );
}
