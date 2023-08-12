// "use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { ApiResponse } from "../hooks/useGetContenfulData";
import { getEntryById } from "@/lib/fetchDataFromContentful";

export default async function ProductosLatinos() {
 await getEntryById("4770AAFB4vVhIKD1SAvrVe");

 return "hola";

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
