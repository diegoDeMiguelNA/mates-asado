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
    <div className="iconWrapper my-14 md:py-10 grid gap-8 lg:gap-y-32 md:gap-30 grid-cols-1 md:grid-cols-3 grid-rows-3 px-4 md:px-16 lg:w-[900px] lg:my-20 lg:pt-16 lg:pb-16">
      {renderHomeIcons(navigationElements)}
    </div>
  );
};

export default HomeProps;
