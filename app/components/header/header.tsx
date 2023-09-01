"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MobileMenu from "../ResponsiveNavMenu/mobileMenu";
import { Entry, SpaceLink } from "contentful";
import { IHomeIconResuableFields } from "@/@types/generated/contentful";
import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";

interface Sys {
  space: { sys: SpaceLink };
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: { sys: { id: string; type: "Link"; linkType: "Environment" } };
  revision: number;
  contentType: { sys: { type: "Link"; linkType: "ContentType"; id: string } };
  locale: "en-US";
}

interface Fields {
  title: string;
  subtitle: string;
  svgFileName: string;
  extraData: string;
  width: number;
  heightPixels: number;
}

export interface Icon {
  metadata: { tags: any[] };
  sys: Sys;
  fields: Fields;
}

const gradientStyle = {
  backgroundImage:
    "linear-gradient(to right, #74ACDF 33.3%, #fff 33.3%, #fff 66.6%, #74ACDF 66.6%)",
};

export default function Header() {
  const [icons, setIcons] = useState<Icon[]>([]);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response: Entry<IHomeIconResuableFields> = await getHomeIcons(
          "13fZd2HWu0ZBxxNCC00tfT"
        );
        const homeIconComponent = response.fields
          .homeIconComponent as unknown as Icon[];
        const filteredIcons = homeIconComponent.filter(
          (icon) => icon.fields.extraData !== pathname
        );

        setIcons(filteredIcons);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIcons();
  }, [pathname]);

  return (
    <header
      className={clsx(
        "relative w-full font-body",
        isHomePage
          ? "grid grid-rows-header h-[230px] md:h-[280px] lg:h-[500px] w-full"
          : "grid items-center grid-rows-nonHome h-[100px] md:h-[150px] lg:h-[280px] bg-gradient-to-h from-lightBlue to-white to-lightBlue"
      )}
      style={isHomePage ? {} : gradientStyle}
    >
      {isHomePage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/port.webp"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority={true}
          />
        </div>
      ) : (
        <div className="absolute top-0 left-0 p-4 z-20">
          <MobileMenu
            className="block sm:hidden"
            icons={icons}
            pathname={pathname}
          />
        </div>
      )}

      <div
        className={clsx(
          "z-10 flex flex-col items-center justify-center",
          !isHomePage && "grid-row-1 self-end mt-6"
        )}
      >
        <Link href="/">
          <h1
            className={clsx(
              "text-4xl font-bold font-heading font-light mb-2",
              isHomePage
                ? "text-white md:text-5xl lg:text-8xl"
                : "text-black text-xl md:text-4xl lg:text-5xl"
            )}
          >
            Mates & Asado
          </h1>
        </Link>
        <h3
          className={clsx(
            "text-xs md:text-sm text-center mb-2",
            isHomePage && "text-white"
          )}
        >
          By M&A&apos;s Team
        </h3>
      </div>

      <div
        className={clsx(
          "bg-customRed flex items-center justify-center h-[20px] md:h-[22px] lg:h-[38px] z-15",
          !isHomePage && " grid-row-2"
        )}
      >
        <h2 className="text-xxs md:text-sm lg:text-xl leading-tight text-white font-body">
          Comunidad de ayuda para emigrados en Hamburgo
        </h2>
      </div>
    </header>
  );
}
