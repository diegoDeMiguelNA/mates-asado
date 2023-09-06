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
import { HomeIcon, PhoneIcon, Globe2Icon, LanguagesIcon } from "lucide-react";
import { ReactNode } from "react";

interface MedicosListProps {
  data: IMedicoprofesionalDeLaSalud[];
}

function IconWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="text-gray-400 inline mr-1 w-6 flex-shrink-0 flex-grow-0">
      {children}
    </div>
  );
}

function Detail({ icon, content }: { icon: ReactNode; content: ReactNode }) {
  return (
    <div className="flex text-ellipsis overflow-hidden w-full">
      <IconWrapper>{icon}</IconWrapper>
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
        <Detail icon={<HomeIcon />} content={direccion} />
        <Detail icon={<PhoneIcon />} content={telephone} />
        <Detail
          icon={<Globe2Icon />}
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
        <Detail icon={<LanguagesIcon />} content={idiomas} />
      </CardContent>
    </Card>
  );
}

const MedicosList: React.FC<MedicosListProps> = ({ data }) => {
  const filtered = data.filter(
    (el) => el.sys.contentType.sys.id === "medicoprofesionalDeLaSalud"
  );
  return (
    <div className="w-full pb-24 grid grid-cols-3 gap-4 px-72">
      {filtered.map(({ sys, fields }) => (
        <MedicosCard data={fields} key={sys.id} />
      ))}
    </div>
  );
};

export default MedicosList;
