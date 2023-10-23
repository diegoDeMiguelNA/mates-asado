"use client";

import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./components/button/button";
import HeaderBlogPosts, {
  NavigationElement,
} from "./components/header/headerBlogPosts";

export default function Error({ error }: { error: Error }) {
  const [localHomeIconComponent, setlocalHomeIconComponent] = useState<
    NavigationElement[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const fields = await getHomeIcons();
      const mappedFields = fields.map(field => ({
        title: field.name,
        subtitle: field.fields.subtitle,
        id: field.id,
        name: field.name,
        fields: field.fields,
      }));
      setlocalHomeIconComponent(mappedFields);
      // eslint-disable-next-line no-console
      if (error) console.log("error within error.tsx: ", error);
    };
    fetchData();
  }, [error]);

  return (
    <>
      <HeaderBlogPosts navigationElements={localHomeIconComponent} />
      <div className="min-h-screen flex flex-col justify-center items-center bg-pastel-blue-100">
        <div className="text-center space-y-4 mt-16 pt-16 mb-16 pb-8">
          <h1 className="text-6xl text-pastel-purple-500">404</h1>
          <p className="text-2xl text-pastel-green-400">Error interno</p>
          <div className="text-center mt-20">
            <Link
              href="/"
              className="px-6 py-3 bg-pastel-yellow-400 text-pastel-blue-900 rounded-md transition-transform transform hover:scale-105"
            >
              <Button>Volver al inicio</Button>
            </Link>
          </div>
          <h3>
            Si el sitio no funciona por favor comunicarte a <br />
            <a
              className="underline text-blue-500"
              href="mailto:mates.asado@gmail.com"
            >
              mates.asado@gmail.com
            </a>
          </h3>
        </div>
      </div>
    </>
  );
}
