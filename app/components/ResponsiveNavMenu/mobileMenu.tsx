'use client';
import React, { useState } from "react";
import clsx from "clsx";

interface MenuItem {
  content: string;
  href: string;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="text-center py-4 bg-gray-100">
      <div className="block sm:hidden">
        <button
          onClick={handleMenuToggle}
          className="flex items-center px-3 py-2 border rounded text-blue-600 border-white hover:text-white hover:bg-black"
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
        className={clsx("sm:flex", "sm:justify-center", "sm:space-x-8", {
          hidden: !menuOpen,
        })}
        role="menu"
        aria-label="Mobile Menu"
        data-testid="mobile-menu"
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} role="menuitem">{item.content}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
