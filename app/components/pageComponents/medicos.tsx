import {
  IMedicoprofesionalDeLaSalud,
  IMedicoprofesionalDeLaSaludFields,
} from "@/@types/generated/contentful";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card/card";
import { icons } from "lucide-react";
import { ReactNode } from "react";

interface MedicosListProps {
  data: IMedicoprofesionalDeLaSalud[];
}

function Icon({ name, size = 24 }: { name: string, size: string | number }) {
  const LucideIcon = icons[name as keyof typeof icons]
  if (!LucideIcon) return null

  return (
    <div className="text-gray-400 mr-1 w-6 flex-shrink-0 flex-grow-0">
      <LucideIcon size={size} className="pt-0.5" />
    </div>
  );
}

function Detail({ iconName, content }: { iconName: string; content: ReactNode }) {
  return (
    <div className="flex text-ellipsis overflow-hidden w-full">
      <Icon name={iconName} size={24} />
      <div>{content}</div>
    </div>
  );
}

function MedicosCard({ data }: { data: IMedicoprofesionalDeLaSaludFields }) {
  const { especialidad, nombre, telephone, direccion, emailwebsite, idiomas } =
    data;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{nombre}</CardTitle>
        <CardDescription>{especialidad}</CardDescription>
      </CardHeader>
      <CardContent className="text-left">
        <Detail iconName="Home" content={direccion} />
        <Detail iconName="Phone" content={telephone} />
        <Detail
          iconName="Globe2"
          content={
            <div className="w-full">
              <a
                href={emailwebsite}
                className="text-ellipsis"
                target="_blank"
                rel="noopener noreferrer"
              >
                {emailwebsite}
              </a>
            </div>
          }
        />
        <Detail iconName="Languages" content={idiomas} />
      </CardContent>
    </Card>
  );
}

const MedicosList: React.FC<MedicosListProps> = ({ data }) => {
  const filtered = data.filter(
    (el) => el.sys.contentType.sys.id === "medicoprofesionalDeLaSalud"
  );
  return (
    <div className="w-full pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 sm:px-16">
      {filtered.map(({ sys, fields }) => (
        <MedicosCard data={fields} key={sys.id} />
      ))}
    </div>
  );
};

export default MedicosList;
