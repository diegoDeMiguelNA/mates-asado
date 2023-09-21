export function TitleWithOrWithoutSubtitle(props: { fields: any }) {
  const titleWithOrWithoutSubtitle = props.fields && props.fields;
  if (!titleWithOrWithoutSubtitle) return null;

  return (
    <div>
      {props.fields.titleName && (
        <h2 className="mb-4 text-l sm:text-3xl font-heading uppercase">
          {titleWithOrWithoutSubtitle.titleName}
        </h2>
      )}
      {props.fields.subtitle && (
        <h3 className="mb-4 sm:text-sm">
          {titleWithOrWithoutSubtitle.subtitle}
        </h3>
      )}
    </div>
  );
}
