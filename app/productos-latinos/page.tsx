// "use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {getContentFulData} from "@/lib/fetchDataFromContentful"; // Assuming the ApiResponse is exported from the hook
import { ApiResponse } from "../hooks/useGetContenfulData";

export default async function ProductosLatinos() {
  const pageDate: Promise<ApiResponse> = await getContentFulData("pageTemplate");
  try {
    const page = await pageDate;
  }


  const renderContent = (content: Array<any>) => {
    return content.map((item: any, index: number) => {
      if (item.nodeType === "heading-2") {
        return (
          <h2
            key={index}
            className="text-xl sd:3xl font-heading uppercase mb-4"
          >
            {item.content[0].value}
          </h2>
        );
      } else if (item.nodeType === "heading-3") {
        return (
          <p key={index} className="underline mb-4">
            {item.content[0].value}
          </p>
        );
      } else if (item.nodeType === "paragraph") {
        const link = item.content.find(
          (node: any) => node.nodeType === "hyperlink"
        );
        if (link) {
          return (
            <p key={index}>
              <a className="underline" href={link.data.uri}>
                {link.content[0].value}
              </a>
            </p>
          );
        }
        return <p key={index}>{item.content[0].value}</p>;
      } else if (item.nodeType === "heading-4") {
        return <p key={index}>{item.content[0].value}</p>;
      }
      return null;
    });
  };

  if (errors) {
    return <p>Error: {errors}</p>;
  }

  console.log(items);

  return <>
    {items.map(({ fields: { title, subtitle, lastUpdate }}) => (
      <>
      <div>{title}</div>
      <div>{subtitle}</div>
      </>
    ))}
  </>

  // if (!data || !data) {
  //   return <p>No data available.</p>; // Handle case when data is not yet fetched
  // }

  // const firstItem = items[0] as ApiResponse;

  // if (firstItem !== undefined && firstItem !== null) {
  //   return (
  //     <>
  //       <header className="text-center flex justify-center items-center p-4 sm:p-10">
  //         <Button>
  //           <Link href="/">Home</Link>
  //         </Button>
  //       </header>
  //       <div className="max-w-7xl mx-auto">
  //         <main className="text-center sm:px-10 mb-8 sm:mb-24 mx-2 sm:mx-24">
  //           <div className="pt-12 py-12">
  //             <h1 className="text-2xl sm:text-5xl font-heading uppercase">
  //               {firstItem.title}
  //             </h1>
  //           </div>

  //           {firstItem.publicationBody.content &&
  //             renderContent(firstItem.publicationBody.content)}

  //           {firstItem.publicationBodyOne.content &&
  //             renderContent(firstItem.publicationBodyOne.content)}

  //           {firstItem.publicationBodyTwo.content &&
  //             renderContent(firstItem.publicationBodyTwo.content)}

  //           {firstItem.publicationBodyThree.content &&
  //             renderContent(firstItem.publicationBodyThree.content)}

  //           <header className="text-center flex justify-center items-center p-4 sm:p-10">
  //             <Button>
  //               <Link href="/">Home</Link>
  //             </Button>
  //           </header>
  //         </main>
  //       </div>
  //     </>
  //   );
  // }
}
