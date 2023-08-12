import Link from "next/link";
import { getEntryById } from "@/lib/fetchDataFromContentful";
import { Button } from "@/components/ui/button";

export default async function ProductosLatinos() {
  const { fields } = await getEntryById("4770AAFB4vVhIKD1SAvrVe");

  return (
    <>
      <header className="text-center flex justify-center items-center p-4 sm:p-10">
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </header>
      <div className="max-w-7xl mx-auto">
        <main className="text-center sm:px-10 mb-8 sm:mb-24 mx-2 sm:mx-24">
          <div className="pt-12 py-12">
            <h1 className="text-2xl sm:text-5xl font-heading uppercase">
              {fields.title}
            </h1>
          </div>

          {fields.publicationBody.content &&
            renderContent(fields.publicationBody.content)}

          {fields.publicationBodyOne.content &&
            renderContent(fields.publicationBodyOne.content)}

          {fields.publicationBodyTwo.content &&
            renderContent(fields.publicationBodyTwo.content)}

          {fields.publicationBodyThree.content &&
            renderContent(fields.publicationBodyThree.content)}

          <header className="text-center flex justify-center items-center p-4 sm:p-10">
            <Button>
              <Link href="/">Home</Link>
            </Button>
          </header>
        </main>
      </div>
    </>
  );
}
