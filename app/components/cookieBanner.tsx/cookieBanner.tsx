"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsVisible(true);
      localStorage.setItem("hasVisited", "true");
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={clsx(
        "fixed bottom-0 z-50 left-0 w-full p-4 pr-0 bg-gray-100 transform transition-transform duration-500 grid grid-cols-[1fr,max-content] items-center gap-4 min-h-[160px] pb-6 md:h-[230px] 2xl:h-[180px]0 max-w-[500px] rounded",
        isVisible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="flex flex-col items-start lg:items-center gap-2 ml-4 md:ml-8">
        <p className="text-sm md:text-lg">Wir verfolgen keine Cookies.</p>
        <p className="text-sm md:text-lg">No rastreamos ninguna cookie.</p>
        <button
          className="px-4 py-2 mt-2 bg-blue-500 text-white rounded md:text-lg"
          onClick={() => setIsVisible(false)}
        >
          OK
        </button>
      </div>

      <Image
        src="/images/chocotorta.webp"
        alt="Cookie box from Argentina"
        width={80}
        height={50}
        className="w-full h-auto md:w-[210px] md:h-[170px]"
      />
    </div>
  );
};

export default CookieBanner;
