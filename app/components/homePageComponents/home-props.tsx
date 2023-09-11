import { SubPage } from "@/lib/contentful/fetchDataFromContentful";
import React from "react";
import HomeIcon from "../home-icon/home-icon";

const renderHomeIcons = (icons: SubPage[], parentIndex: number = 0) => {
  return icons.map((icon, index: number) => {
    const {
      title,
      subtitle: description,
      extraData: linkTo,
      svgFileName,
      width,
      height,
    } = icon.fields;
    const iconSrc = `./icons/${svgFileName}`;

    const nestedIcons = icon.fields.homeIconComponent
      ? renderHomeIcons(icon.fields.homeIconComponent, index)
      : [];

    const iconClassName = () => {
      if (icons.length !== 8) return "";
      if (index === 7) return "md:col-start-3";
      return "";
    };

    return (
      <React.Fragment key={index}>
        <HomeIcon
          iconSrc={iconSrc}
          title={title}
          description={description}
          linkTo={linkTo}
          contentfulReference={icon.sys.id}
          width={width}
          height={height}
          className={iconClassName()}
        />
        {nestedIcons}
      </React.Fragment>
    );
  });
};

interface HomePropsInterface {
  navigationElements: SubPage[];
}

const HomeProps: React.FC<HomePropsInterface> = async ({
  navigationElements,
}) => {
  return (
    <div className="iconWrapper py-10 my-20 px-4 grid grid-cols-1 grid-rows-3 gap-8 md:px-16 md:gap-30 md:grid-cols-3 lg:gap-y-32 lg:w-[900px] lg:mt-20 lg:mb-10 lg:pt-16 lg:pb-10">
      {renderHomeIcons(navigationElements)}
    </div>
  );
};

export default HomeProps;
