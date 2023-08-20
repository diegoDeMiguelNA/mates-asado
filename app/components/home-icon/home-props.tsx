import { getIconProps } from "@/lib/contentful/fetchDataFromContentful";
import HomeIcon from "./home-icon";
import clsx from "clsx";

const HomeProps: React.FC = async () => {
  const { fields } = await getIconProps("3tVpcLMYG910HxpHpdYgn6");
  return (
    <div className="iconWrapper my-14 md:py-10 grid gap-8 lg:gap-y-32 md:gap-30 grid-cols-1 md:grid-cols-3 grid-rows-3 px-4 md:px-16">
      {Object.values(fields).map((icon, index) => {
        const iconSrc = `./icons/${
          icon.content[0].content[0].value.split("\n\n")[0]
        }`;
        const title = icon.content[0].content[0].value.split("\n\n")[1];
        const description = icon.content[1].content[0].value;
        const linkTo = icon.content[1].content[1].data.uri;
        const contentfulReference = icon.content[1].content[2].value.trim();

        return (
          <HomeIcon
            key={index}
            iconSrc={iconSrc}
            title={title}
            description={description}
            linkTo={linkTo}
            contentfulReference={contentfulReference}
            className={clsx(
              index === Object.values(fields).length - 1 && "md:col-span-3"
            )}
          />
        );
      })}
    </div>
  );
};

export default HomeProps;
