import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type HomeIconProps = {
  iconSrc: string;
  title: string;
  description: string;
  linkTo: string;
  className?: string;
  width?: number;
  height?: number;
  last: boolean;
};

function HomeIcon({
  iconSrc,
  title,
  description,
  linkTo,
  className,
  width = 30,
  height = 30,
  last,
}: HomeIconProps) {
  return (
    <div
      className={clsx(
        `home-icon mb-4 md:mb-0`,
        className,
        last && "md:col-start-3",
      )}
    >
      <Link href={linkTo} passHref>
        <div
          title={title}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="icon-container bg-[#F8D49A] w-[60px] h-[60px] rounded-full mb-2 flex justify-center items-center">
            <Image
              width={width}
              height={height}
              src={iconSrc}
              alt={title}
              className="ml-[2px]"
            />
          </div>
          <h2 className="text-regular-blue text-base font-bold mb-1">
            {title}
          </h2>
          <p
            className="text-regular-blue f-xs max-w-[180px] break-words"
            style={{ fontSize: "12px" }}
          >
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default HomeIcon;
