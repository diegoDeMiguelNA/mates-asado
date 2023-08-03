import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductosLatinos() {
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
              Productos Latinos en Hamburgo
            </h1>
          </div>

          <div className="py-8 px-24">
            <h2 className="text-xl sd:3xl font-heading uppercase mb-4">
              El Cielo
            </h2>
            <p className="underline mb-4">Dirección: </p>
            <p> Wandsbeker Chaussee 277, 22089 Hamburg</p>
            <p>
              <a className="underline" href="https://elcielo-markt.com/">
                https://elcielo-markt.com/
              </a>
            </p>
            <p>Horarios: Lunes a sábados 11 a 18 hs</p>
            <p>Domingos cerrados</p>
          </div>

          <div className="py-8 px-24">
            <h2 className="text-xl sd:3xl font-heading uppercase mb-4">
              Surimex
            </h2>
            <p className="underline mb-4">Dirección: </p>
            <p> Mundsburger Damm 39, 22087 Hamburg</p>
            <p>
              <a className="underline" href="https://surimex.de/">https://surimex.de/</a>
            </p>
            <p>Horarios: Lunes a Sábados 9:30 a 21 hs</p>
            <p>Domingos cerrados</p>
          </div>

          <div className="py-8 px-24">
            <h2 className="text-xl sd:3xl font-heading uppercase mb-4">
              La Torre
            </h2>
            <p className="underline mb-4">Dirección: </p>
            <p> Lagerstraße 36, 20357 Hamburg</p>
            <p>
              <a className="underline" href="https://www.la-torre-hh.de/">
                https://www.la-torre-hh.de/
              </a>
            </p>
            <p>Lunes a Viernes 9 a 19hs</p>
            <p>Sábados 9 a 15hs</p>
            <p>Domingos cerrados</p>
          </div>

          <div className="py-8 px-24">
            <h2 className="text-l sd:3xl font-heading uppercase mb-4">
              Andronaco (Supermercado italiano)
            </h2>
            <p className="underline mb-4">Direcciones:</p>
            <p>Grande Mercato - Hamburg-Billbrook, Halskestraße 48</p>
            <p>Grande Mercato - Hamburg-Bahrenfeld, Beerenweg 24-26</p>
            <p>
              Andronaco HafenContor - Hamburg-Hafencity, Am Sandtorkai 44 (Ecke
              Überseeboulevard)
            </p>
            <p>
              <a className="underline" href="https://www.andronaco.info">
                https://www.andronaco.info
              </a>
            </p>
          </div>
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
