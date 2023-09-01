"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import { Entry, SpaceLink } from "contentful";
import { IHomeIconResuableFields } from "@/@types/generated/contentful";

interface MobileMenuProps {
  className?: string;
}

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

interface Icon {
  metadata: { tags: any[] };
  sys: Sys;
  fields: Fields;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [icons, setIcons] = useState<Icon[]>([]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response: Entry<IHomeIconResuableFields> = await getHomeIcons(
          "13fZd2HWu0ZBxxNCC00tfT"
        );
        const homeIconComponent = response.fields
          .homeIconComponent as unknown as Icon[];
        setIcons(homeIconComponent);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIcons();
  }, []);

  return (
    <nav
      className={clsx(
        "text-center z-30",
        className,
        menuOpen && "bg-blue-100 rounded font-body"
      )}
    >
      <div className="block sm:hidden">
        <button
          onClick={handleMenuToggle}
          className="flex px-3 py-2 border rounded text-blue-600 border-white hover:text-white"
          aria-label="Toggle Menu"
          data-testid="mobile-menu-toggle"
        >
          <svg
            className="w-5 h-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2 9.75C2 9.33579 2.33579 9 2.75 9H17.25C17.6642 9 18 9.33579 18 9.75C18 10.1642 17.6642 10.5 17.25 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75ZM2.75 14C2.33579 14 2 14.3358 2 14.75C2 15.1642 2.33579 15.5 2.75 15.5H17.25C17.6642 15.5 18 15.1642 18 14.75C18 14.3358 17.6642 14 17.25 14H2.75Z"
            />
          </svg>
        </button>
      </div>

      <ul
        className={clsx(
          "sm:flex",
          "sm:justify-center",
          "sm:space-x-8 flex flex-col items-start mt-2 w-[200px] px-4 py-4",
          {
            hidden: !menuOpen,
          }
        )}
        role="menu"
        aria-label="Mobile Menu"
        data-testid="mobile-menu"
      >
        {icons?.map((item, index) => (
          <li key={index} className="mt-4">
            <a
              href={item.fields.extraData}
              className="font-white"
              role="menuitem"
            >
              {item.fields.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
