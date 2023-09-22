import { SubPageData } from "@/lib/contentful/fetchDataFromContentful";
import HomeIcon from "../home-icon/home-icon";

type SubPageProps = { data: SubPageData; last?: boolean };

function SubPage({ data: { fields, sys }, last = false }: SubPageProps) {
  const {
    title,
    subtitle: description,
    extraData: linkTo,
    svgFileName,
    width,
    height,
    homeIconComponent,
  } = fields;

  return (
    <>
      <HomeIcon
        iconSrc={`./icons/${svgFileName}`}
        title={title}
        description={description}
        linkTo={linkTo as string}
        contentfulReference={sys.id}
        width={width}
        height={height}
        last={last}
      />
      {homeIconComponent && (
        <SubPage
          data={{
            fields: {
              homeIconComponent,
              title: "some title",
              subtitle: "some subtitle",
              linkTo: "some link",
            },
            sys: {
              id: "some id",
            },
          }}
        />
      )}
    </>
  );
}

interface HomePropsInterface {
  navigationElements: SubPageData[];
}

function HomeProps({ navigationElements }: HomePropsInterface): JSX.Element {
  return (
    <div className="iconWrapper py-10 my-14 px-4 grid grid-cols-1 grid-rows-3 gap-8 md:px-16 md:gap-30 md:grid-cols-3 lg:gap-y-32 lg:w-[900px] lg:mt-16 lg:mb-10 lg:pt-16 lg:pb-16">
      {navigationElements.map((page, index) => (
        <SubPage
          data={page}
          key={page.sys.id}
          last={index === navigationElements.length - 1}
        />
      ))}
    </div>
  );
}

export default HomeProps;
