"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./components/button/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-pastel-blue-100">
        <div className="text-center space-y-4">
          <h1 className="text-6xl text-pastel-purple-500">404</h1>
          <p className="text-2xl text-pastel-green-400">Error interno</p>
          <div className="text-center mt-20">
            <Button
              className="bg-regular-teal text-xxs md:text-xs lg:text-[12px] rounded-full mt-4 py-4"
              size="bigCustomPill"
              style={{ color: "white" }}
              onClick={() => {
                router.push("/", { scroll: false });
              }}
            >
              Volver al inicio
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
