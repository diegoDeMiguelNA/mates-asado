export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export function translateSpecialtyToSpanish(specialty: string): string {
  const specialtiesMap: { [key: string]: string } = {
    psychiatry: "psiquiatría",
    general: "general",
    dentist: "dentista",
    gynecology: "ginecología",
    oftalmology: "oftalmología",
    dermatology: "dermatología",
    urology: "urología",
    otolaryngology: "otorrinolaringología",
    orthopedist: "ortopedista",
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

export function capitalizeWord(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
