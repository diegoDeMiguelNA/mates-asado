import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { getAsset } from "@/lib/contentful/fetchDataFromContentful";

const HeaderHome: React.FC = async () => {
  let fields;
  try {
    const assetData = await getAsset("1xValOZGL1NO8ZR9dK0EE9");
    fields = assetData.fields;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <header className="relative grid grid-rows-header w-full lg:min-h-[380px] xl:min-h-[600px] items-end">
      <div className="absolute inset-0 z-0">
        <Image
          src={fields ? `https:${fields.file.url}` : "/images/port.webp"}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
          placeholder="blur"
          blurDataURL="/images/port.webp"
        />
      </div>

      <div className="z-10 flex flex-col items-center justify-center row-start-1 self-center lg:mt-20 lg:pt-20">
        <Link href="/">
          <h1 className="text-4xl mt-8 font-heading font-light mb-2 text-white md:text-5xl lg:text-8xl">
            Mates & Asado
          </h1>
        </Link>
        <h3 className="text-xs md:text-sm text-center mb-2 text-white">
          By M&A&apos;s Team
        </h3>
      </div>
      <div
        className={clsx(
          "bg-customRed flex items-center justify-center h-[20px] md:h-[22px] lg:h-[38px] z-50 self-end row-start-3",
          "grid-row-2",
        )}
      >
        <h2 className="text-sm md:text-sm lg:text-xl leading-tight text-white font-body">
          Comunidad de ayuda para emigrados en Hamburgo
        </h2>
      </div>
    </header>
  );
};

export default HeaderHome;
