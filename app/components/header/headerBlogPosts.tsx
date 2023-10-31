import clsx from "clsx";
import Link from "next/link";
import MobileMenu, {
  gradientStyleArgentina,
} from "../ResponsiveNavMenu/mobileMenu";

export interface NavigationElementFields {
  title: string;
  subtitle: string;
  extraData?: string;
  svgFileName?: string;
  width?: number;
  height?: number;
}

export interface NavigationElement {
  id: number;
  name: string;
  fields: NavigationElementFields;
}

export interface MobileMenuProps {
  navigationElements: NavigationElement[];
}

function HeaderBlogPosts({ navigationElements }: MobileMenuProps): JSX.Element {
  return (
    <header
      className="grid grid-rows-custom min-h-[180px] lg:min-h-[280px] bg-gradient-to-h from-lightBlue to-lightBlue items-start"
      style={gradientStyleArgentina}
    >
      <MobileMenu className="block" navigationElements={navigationElements} />

      <div
        className={clsx(
          "z-10 flex flex-col items-center justify-center row-start-1 self-center lg:mt-20",
          "grid-row-1 row-start-2 lg:mt-0",
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
