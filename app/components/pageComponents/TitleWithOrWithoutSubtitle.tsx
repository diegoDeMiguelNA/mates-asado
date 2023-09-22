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
    <div>
      {titleWithOrWithoutSubtitle.titleName && (
        <h2 className="mb-4 text-l sm:text-3xl font-heading uppercase">
          {titleWithOrWithoutSubtitle.titleName}
        </h2>
      )}
      {titleWithOrWithoutSubtitle.subtitle && (
        <h3 className="mb-4 sm:text-sm">
          {titleWithOrWithoutSubtitle.subtitle}
        </h3>
      )}
    </div>
  );
}

export default TitleWithOrWithoutSubtitle;
