"use client";
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
} from "../components/card/card";
import { icons } from "lucide-react";
import React, { ReactNode } from "react";
import MedicosSelector from "./MedicosSelector";
import {
  translateLanguageToSpanish,
  translateSpecialtyToSpanish,
} from "@/utils/helpFunction";

interface MedicosListProps {
  data: IMedicoprofesionalDeLaSalud[];
  specialty: string | undefined;
  language: string | undefined;
}

function Icon({ name, size = 24 }: { name: string; size: string | number }) {
  const LucideIcon = icons[name as keyof typeof icons];
  if (!LucideIcon) return null;

  return (
    <div className="text-gray-400 mr-1 w-6 flex-shrink-0 flex-grow-0">
      <LucideIcon size={size} className="pt-0.5" />
    </div>
  );
}

function Detail({
  iconName,
  content,
}: {
  iconName: string;
  content: ReactNode;
}) {
  return (
    <div className="flex overflow-hidden w-full">
      <Icon name={iconName} size={24} />
      <div className="flex-1 truncate ml-2">{content}</div>
    </div>
  );
}

function MedicosCard({ data }: { data: IMedicoprofesionalDeLaSaludFields }) {
  const {
    especialidad,
    nombre,
    telephone,
    direccion,
    emailwebsite,
    email,
    idiomas,
  } = data;

  const displayLink: string = emailwebsite?.replace(/^https?:\/\//, "") || "";

  return (
    <Card>
      <CardHeader>
        <CardTitle>{nombre}</CardTitle>
        <CardDescription>{especialidad}</CardDescription>
      </CardHeader>
      <CardContent className="text-left">
        <Detail iconName="Home" content={direccion} />
        <Detail iconName="Phone" content={telephone} />
        {emailwebsite ? (
          <Detail
            iconName="Globe2"
            content={
              <div className="w-full truncate">
                <a
                  href={emailwebsite}
                  className="text-ellipsis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {displayLink}
                </a>
              </div>
            }
          />
        ) : (
          <Detail
            iconName="Mail"
            content={
              <div className="w-full">
                <a href={`mailto:${email}`} className="text-ellipsis">
                  {email}
                </a>
              </div>
            }
          />
        )}
        <Detail iconName="Languages" content={idiomas} />
      </CardContent>
    </Card>
  );
}

const MedicosList: React.FC<MedicosListProps> = ({
  data,
  language,
  specialty,
}) => {
  const [selectedSpecialty, setSelectedSpecialty] = React.useState<
    string | undefined
  >();
  const [selectedLanguage, setSelectedLanguage] = React.useState<
    string | undefined
  >();
  const filtered = data.filter((el) => {
    const hasSpecialty =
      !specialty || (el.fields.specialty && el.fields.specialty === specialty);

    const speaksLanguage =
      !language ||
      (el.fields.languages && el.fields.languages.includes(language));

    return hasSpecialty && speaksLanguage;
  });

  const specialties = Array.from(
    new Set(data.map((medico) => medico.fields.specialty))
  );

  const languages = Array.from(
    new Set(data.map((medico) => medico.fields.languages[0]))
  );

  return (
    <>
      <div className="dorpdownWrapper flex justify-around mt-20 pt-14 w-full">
        <MedicosSelector
          value={selectedSpecialty}
          onChange={(newVal: string) => setSelectedSpecialty(newVal)}
          dropdownItems={specialties}
          placeholder="Especialidad"
          translateFn={translateSpecialtyToSpanish}
          className="min-w-[180px]"
        />
        <MedicosSelector
          value={selectedLanguage}
          onChange={(newVal: string) => setSelectedLanguage(newVal)}
          dropdownItems={languages}
          placeholder="Idioma"
          translateFn={translateLanguageToSpanish}
          className="min-w-[150px]"
        />
      </div>
      <div className="w-full pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(({ sys, fields }) => (
          <MedicosCard data={fields} key={sys.id} />
        ))}
      </div>
    </>
  );
};

export default MedicosList;
