"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import MobileMenu from "../ResponsiveNavMenu/mobileMenu";

interface MobileMenuProps {
  navigationElements: any[];
}

export const gradientStyleArgentina = {
  backgroundImage:
    "linear-gradient(to right, #74ACDF 33.3%, #fff 33.3%, #fff 66.6%, #74ACDF 66.6%)",
};

const Header: React.FC<MobileMenuProps> = ({ navigationElements }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const filteredMobileMenuElements = navigationElements?.filter(
    (icon) => icon.fields.extraData !== pathname
  );

  return (
    <header
      className={clsx(
        isHomePage
          ? "relative grid grid-rows-header w-full lg:min-h-[380px] items-end"
          : "grid grid-rows-nonHome min-h-[180px] lg:min-h-[280px] bg-gradient-to-h from-lightBlue to-white to-lightBlue items-start"
      )}
      style={isHomePage ? {} : gradientStyleArgentina}
    >
      {isHomePage && (
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
      )}

      {!isHomePage && (
        <MobileMenu
          className="block"
          navigationElements={filteredMobileMenuElements}
        />
      )}

      <div
        className={clsx(
          "z-10 flex flex-col items-center justify-center row-start-2 self-center",
          !isHomePage && "grid-row-1 sm:mb-8 lg:mb-2"
        )}
      >
        <Link href="/">
          <h1
            className={clsx(
              "text-4xl font-bold font-heading font-light mb-2",
              isHomePage
                ? "text-white md:text-5xl lg:text-8xl"
                : "text-black text-2xl md:text-4xl lg:text-5xl mt-2"
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
          "bg-customRed flex items-center justify-center h-[20px] md:h-[22px] lg:h-[38px] z-50 self-end row-start-3",
          !isHomePage && "grid-row-2"
        )}
      >
        <h2 className="text-xxs md:text-sm lg:text-xl leading-tight text-white font-body">
          Comunidad de ayuda para emigrados en Hamburgo
        </h2>
      </div>
    </header>
  );
};

export default Header;
