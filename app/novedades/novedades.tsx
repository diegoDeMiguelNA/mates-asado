"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ImageDetails {
  size: number;
  image?: {
    width: number;
    height: number;
  };
}

interface File {
  url: string;
  details: ImageDetails;
  fileName: string;
  contentType: string;
}

interface Fields {
  title: string;
  file: File;
}

interface NextJsComponentProps {
  fields: Fields;
}

const Novedades: React.FC<NextJsComponentProps> = ({ fields }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasSeenModalTimbero");

    if (!hasVisited) {
      setIsVisible(true);
      localStorage.setItem("hasSeenModalTimbero", "true");
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div
      className={clsx(
        "fixed inset-0 z-200 p-4 bg-transparent transform transition-transform duration-500 flex justify-center items-center sm:px-20 sm:py-10 lg:px-40 lg:py-20 xl:px-40 xl:py-20 w-full",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
      style={{ backdropFilter: "blur(5px)" }}
    >
      <div className="relative max-w-[90%] sm:max-w-[90%] lg:max-w-[800px] xl:max-w-[600px] rounded bg-white p-4 sm:p-5 lg:p-5 max-h-[90vh] overflow-y-auto max-h-[calc(100vh-3rem)] sm:max-h-[calc(100vh-2rem)]">
        <Image
          src={`https:${fields.file.url}`}
          alt={fields.title}
          width={800}
          height={1130}
          className="w-full h-auto"
        />
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-5 lg:right-5 block flex py-2 px-3 sm:py-3 sm:px-4 border rounded text-blue-600 border-white hover:text-white"
          aria-label="Close Modal"
        >
          <span className="text-s px-2 sm:text-lg lg:text-lg text-white font-bold">
            X
          </span>
        </button>
      </div>
    </div>
  );
};

export default Novedades;
