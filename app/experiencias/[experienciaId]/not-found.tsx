import Link from "next/link";
import { Button } from "@/app/components/button/button";

export default async function NotFound() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-pastel-blue-100">
        <div className="text-center space-y-4">
          <h1 className="text-6xl text-pastel-purple-500">404</h1>
          <p className="text-2xl text-pastel-green-400">La página no existe</p>

          <div className="mt-6">
            <Link
              href="/"
              className="px-6 py-3 bg-pastel-yellow-400 text-pastel-blue-900 rounded-md transition-transform transform hover:scale-105"
            >
              <Button>Volver al inicio</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
