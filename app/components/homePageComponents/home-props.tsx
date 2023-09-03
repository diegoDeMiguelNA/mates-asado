import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import HomeIcon from "../home-icon/home-icon";
import clsx from "clsx";
import { Entry } from "contentful";
import { IHomeIconResuableFields } from "@/@types/generated/contentful";
import React from "react";

const renderHomeIcons = (icons: any[], parentIndex: number = 0) => {
  return icons.map(
    (
      icon: {
        fields: {
          homeIconComponent: any;
          title: string;
          subtitle: string;
          extraData?: any;
          svgFileName?: string;
          width?: number;
          height?: number;
        };
        sys: { id: string };
      },
      index: number
    ) => {
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
            className={clsx(
              index === icons.length - 1 && parentIndex === 0 && "md:col-span-3"
            )}
          />
          {nestedIcons}
        </React.Fragment>
      );
    }
  );
};

interface HomePropsInterface {
  navigationElements: any[];
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
