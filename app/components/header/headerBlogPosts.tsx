import clsx from "clsx";
import Link from "next/link";
import MobileMenu from "../ResponsiveNavMenu/mobileMenu";

interface NavigationElement {
  id: number;
  name: string;
}

interface MobileMenuProps {
  navigationElements: NavigationElement[];
}

export const gradientStyleArgentina = {
  backgroundImage:
    "linear-gradient(to right, #74ACDF 33.3%, #fff 33.3%, #fff 66.6%, #74ACDF 66.6%)",
  gridTemplateRows: "auto 1fr auto",
};

function HeaderBlogPosts({ navigationElements }: MobileMenuProps): JSX.Element {
  return (
    <header
      className="grid grid-rows-custom min-h-[180px] lg:min-h-[280px] bg-gradient-to-h from-lightBlue to-lightBlue items-start"
      style={gradientStyleArgentina}
    >
      <MobileMenu className="block" navigationElements={navigationElements} />

      <div
        className={clsx(
          "z-10 flex flex-col items-center justify-center row-start-1 self-center mb-4 lg:mt-12",
          "grid-row-1 sm:mb-8 lg:mb-8 lg:pb-8 row-start-2 lg:mt-0",
        )}
      >
        <Link href="/">
          <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-heading font-light mb-2">
            Mates & Asado
          </h1>
        </Link>
        <h3 className="text-xs md:text-sm text-center mb-2">
          By M&A&apos;s Team
        </h3>
      </div>
      <div
        className={clsx(
          "bg-customRed flex items-center justify-center h-[20px] md:h-[22px] lg:h-[38px] z-50 self-end row-start-3",
          "grid-row-2",
        )}
      >
        <h2 className="text-xxs md:text-sm lg:text-xl leading-tight text-white font-body">
          Comunidad de ayuda para emigrados en Hamburgo
        </h2>
      </div>
    </header>
  );
}

export default HeaderBlogPosts;
