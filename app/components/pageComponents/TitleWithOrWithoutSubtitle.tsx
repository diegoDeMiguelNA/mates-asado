interface TitleWithOrWithoutSubtitleProps {
  fields: {
    titleName?: string;
    subtitle?: string;
  } | null;
}

function TitleWithOrWithoutSubtitle({
  fields: titleWithOrWithoutSubtitle,
}: TitleWithOrWithoutSubtitleProps) {
  if (!titleWithOrWithoutSubtitle) return null;

  return (
    <div className="flex items-center flex-col">
      {titleWithOrWithoutSubtitle.titleName && (
        <h2 className="mb-4 text-l sm:text-3xl font-heading uppercase">
          {titleWithOrWithoutSubtitle.titleName}
        </h2>
      )}
      {titleWithOrWithoutSubtitle.subtitle && (
        <h3 className="mb-8 sm:text-sm md:px-8 max-w-[250px] md:max-w-[560px] lg:max-w-[600px]">
          {titleWithOrWithoutSubtitle.subtitle}
        </h3>
      )}
    </div>
  );
}

export default TitleWithOrWithoutSubtitle;
