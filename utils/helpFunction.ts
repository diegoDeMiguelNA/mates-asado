import { IMedicoprofesionalDeLaSalud } from "@/@types/generated/contentful";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { ReadonlyURLSearchParams } from "next/navigation";
import { NextRouter } from "next/router";

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & object;

export function capitalizeWord(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function translateSpecialtyToSpanish(specialty: string): string {
  const specialtiesMap: { [key: string]: string } = {
    psychiatry: "psiquiatría",
    general: "general",
    dentist: "dentista",
    gynecology: "ginecología",
    ophthalmology: "oftalmología",
    dermatology: "dermatología",
    urology: "urología",
    otolaryngology: "otorrinolaringología",
    orthopedy: "ortopedista",
    pediatry: "pediatría",
    podology: "podología",
  };

  return capitalizeWord(specialtiesMap[specialty] || specialty);
}

export function translateLanguageToSpanish(language: string): string {
  const languageMap: { [key: string]: string } = {
    spanish: "español",
    english: "inglés",
  };

  return capitalizeWord(languageMap[language] || language);
}

export const createQueryString = (
  searchParams: URLSearchParams | ReadonlyURLSearchParams,
  name: string,
  value: string,
): string => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);
  return params.toString();
};

type RouterType = NextRouter | AppRouterInstance;

export const handleSelectorChange = (
  searchParams: URLSearchParams | ReadonlyURLSearchParams,
  router: RouterType,
  newVal: string,
  queryKey: string,
  setValueFunction: (value: string) => void,
) => {
  setValueFunction(newVal);
  const currentQuery = new URLSearchParams(searchParams?.toString());

  if (newVal) {
    router.push(
      `/medicos?${createQueryString(searchParams, queryKey, newVal)}`,
      { scroll: false },
    );
  } else {
    currentQuery.delete(queryKey);
    router.push(`/medicos?${currentQuery.toString()}`, { scroll: false });
  }
};

export const getFilteredData = (
  data: IMedicoprofesionalDeLaSalud[],
  paramsSpecialties?: string | null,
  paramsLanguages?: string | null,
) => {
  return data?.filter(el => {
    const hasSpecialty =
      paramsSpecialties === null ||
      paramsSpecialties === undefined ||
      (el.fields.specialty && el.fields.specialty === paramsSpecialties);

    const speaksLanguage =
      paramsLanguages === null ||
      paramsLanguages === undefined ||
      (el.fields.languages && el.fields.languages.includes(paramsLanguages));

    return hasSpecialty && speaksLanguage;
  });
};
