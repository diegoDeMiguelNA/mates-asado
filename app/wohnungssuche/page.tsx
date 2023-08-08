"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import useGetContentfulData from "../hooks/useGetContenfulData";

export default function Wohnungssuche() {
  const [menuOpen, setMenuOpen] = useState(false);
  useGetContentfulData();

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <header className="text-center flex justify-center items-center p-4 sm:p-10">
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </header>
      <div className="max-w-7xl mx-auto">
        <nav className="text-center py-4 bg-gray-100">
          <div className="block sm:hidden">
            <button
              onClick={handleMenuToggle}
              className="flex items-center px-3 py-2 border rounded text-blue-600 border-white hover:text-white hover:bg-black"
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
            className={clsx(
              "sm:flex",
              "sm:justify-center",
              "sm:space-x-8",
              "flex",
              "items-center",
              {
                hidden: !menuOpen,
              }
            )}
          >
            <li className="underline">Indice:</li>
            <li>
              <a href="#sitios-web">Sitios de busqueda</a>
            </li>
            <li>
              <a href="#pisos-corto-mediano-plazo">
                Pisos a corto y mediano plazo
              </a>
            </li>
            <li>
              <a href="#terminologia-abreviaturas">Terminología</a>
            </li>
            <li>
              <a href="#requisitos">Requisitos</a>
            </li>
            <li>
              <a href="#obtener-schufa">SCHUFA</a>
            </li>
            <li>
              <a href="#estafas">Estafas</a>
            </li>
          </ul>
        </nav>
        <main className="text-center sm:px-10 m-8 sm:mb-24 mx-2 sm:mx-24">
          <h1 className="text-xl sm:text-5xl font-heading uppercase px-4">
            Busca de apartamento en Hamburgo
          </h1>
          <p className="text-xs font-heading uppercase mt-2 mb-8">
            (Tambien vale en la mayoria de las casos para toda Alemania)
          </p>

          <h2
            id="sitios-web"
            className="text-l sm:text-3xl font-heading uppercase mt-20"
          >
            Sitios WEB de busqueda
          </h2>
          <ul className="py-6 list-inside list-disc sm:px-4 md:px-10 text-center  list-none">
            <li className="mb-4 ">
              <a
                className="underline"
                target="_blank"
                href="https://www.immowelt.de/suche/wohnungen"
              >
                Immowelt
              </a>
            </li>
            <li className="mb-4">
              <a
                className="underline"
                target="_blank"
                href="https://www.immobilienscout24.de/wohnen/wohnung.html"
              >
                Immobilienscout24
              </a>
            </li>
            <li className="mb-4">
              <a
                className="underline"
                target="_blank"
                href="https://www.kleinanzeigen.de/s-immobilien/hamburg/c195l9409"
              >
                Kleinanzeigen
              </a>
            </li>
            <li className="mb-4">
              <a
                className="underline"
                target="_blank"
                href="https://www.wg-gesucht.de/"
              >
                Wg-gesucht
              </a>
            </li>
            <li className="mb-4">
              <a
                className="underline"
                target="_blank"
                href="https://www.hamburg.de/wohnungen-hamburg/"
              >
                Wohnungen-Hamburg
              </a>
            </li>
            <li className="mb-4">
              <a
                className="underline"
                target="_blank"
                href="https://www.immonet.de/"
              >
                Immonet
              </a>
            </li>
          </ul>
          <h2
            id="pisos-corto-mediano-plazo"
            className="mt-4 text-l sm:text-3xl font-heading uppercase sm:mt-10"
          >
            Pisos a corto y mediano plazo
          </h2>
          <p className="px-8 text-center pt-10 sm:px-24">
            En ambas aclara si los pisos dan registro o no, con lo cual es una
            Buena opcion al momento de llegar a HH
          </p>
          <ul className="py-6 list-inside list-disc sm:px-4 md:px-10 text-center list-none">
            <li>
              <a className="underline" href="https://wunderflats.com/">
                Wunderflats
              </a>
            </li>
            <li>
              <a className="underline" href="https://www.city-wohnen.de/">
                City-Wohnen
              </a>
            </li>
          </ul>
          <h2
            id="terminologia-abreviaturas"
            className="mt-10 text-l sm:text-3xl font-heading uppercase sm:mt-10"
          >
            Terminología y abreviaturas
          </h2>
          <p className="px-8 text-left pt-10 sm:px-24">
            Conocer la terminología alemana del mundo de la vivienda, el
            alquiler y sus abreviaturas te ayudará a sobrevivir al proceso de
            buscar un piso, así que toma nota:
          </p>
          <ul className="ml-8 py-6 list-inside list-disc sm:px-4 md:px-20 text-left sm:text-left">
            <li>Kaltmiete (KM): alquiler básico sin gastos adicionales.</li>
            <li>
              Warmmiete (WM): alquiler básico con los gastos adicionales
              incluidos.
            </li>
            <li>Gesamtmiete: alquiler total.</li>
            <li>
              Nebenkosten (NK): gastos adicionales al alquiler como calefacción
              (Heizkosten (HK)) y gastos de comunidad (Betriebskosten (BK)).
            </li>
            <li>Zuzüglich (zzgl.): gastos no incluidos.</li>
            <li>Miete: alquiler.</li>
            <li>
              Provision (Prov.): comisión que se paga al agente inmobiliario o
              agencia inmobiliaria.
            </li>
            <li>Kaution (K / Kaut / KT): depósito.</li>
          </ul>
          <h2
            id="requisitos"
            className="mt-10 text-l sm:text-3xl font-heading uppercase sm:mt-10"
          >
            Requisitos
          </h2>
          <p className="px-8 text-left pt-10 sm:px-24">
            Al momento de aplicar a un piso dependiendo del dueño se pueden
            pedir diferentes documentos como pueden ser:
          </p>
          <ul className="ml-8 py-6 list-inside list-disc sm:px-4 md:px-20 text-left sm:text-left">
            <li>Solicitud de alquiler por escrito (Wohnenbewerbung)</li>
            <li>Fotocopia del DNI o pasaporte (Personalausweis).</li>
            <li>
              Comprobante de ingresos de los últimos tres meses
              (Einkommensnachweis).
            </li>
            <li>
              Documento de recomendacion de anterior Propietario
              (Mietschuldenfreiheitsbescheinigung).
            </li>
            <li>
              Schufa algo parecido al veraz, es un certificado que contempla tu
              nivel de solvencia financiera.
            </li>
          </ul>
          <h2
            id="obtener-schufa"
            className="mt-10 text-l sm:text-3xl font-heading uppercase sm:mt-10"
          >
            Como obtener el SCHUFA
          </h2>
          <p className="px-8 text-left pt-10 sm:px-24">
            Se puede hacer de forma gratuita a través del proveedor official
            (puede tardar 2 semanas){" "}
            <a
              className="underline"
              href="https://www.meineschufa.de/de/datenkopie"
            >
              https://www.meineschufa.de/de/datenkopie
            </a>
          </p>
          <p className="px-8 text-left pt-10 sm:px-24">
            O bien se puede elegir pagar por el informe (29,95 EUR), en este
            caso el informe va a llegar en mucho menos tiempo{" "}
            <a
              className="underline"
              href="https://www.meineschufa.de/de/produkte"
            >
              https://www.meineschufa.de/de/produkte
            </a>
          </p>
          <p className="px-8 text-left pt-10 sm:px-24">
            Ambos Links son a la pagina oficial que emite ese document sin pasar
            por ningun intermediario.
          </p>
          <h2
            id="estafas"
            className="mt-10 px-8 text-l sm:text-3xl font-heading uppercase sm:mt-10"
          >
            Estafas a la hora de buscar departamento
          </h2>
          <p className="px-8 text-left pt-10 sm:px-24">
            Lamentablemente al momento de buscar departamento en los últimos
            meses han aparecido muchos casos de estafas, por fuera de los
            consejos básico de no transferir ningún dinero antes de firmar el
            contrato o entrega de las llaves si es valido (en la medida de lo
            posible hacer la firma de forma presencial), dejamos algunas notas
            de medio de comunicación locales donde tratan algunas de las estafas
            que se estuvieron dando en los últimos meses para que estemos al
            tanto.
          </p>
          <p className="px-8 text-left pt-10 sm:px-24">
            (Las noticias estan en Aleman, pero se pueden traducir facilmente)
          </p>
          <ul className="ml-8 py-6 list-inside list-disc sm:px-4 md:px-20 text-left sm:text-left">
            <li>
              <a
                className="underline"
                href="https://www.ndr.de/nachrichten/hamburg/Betrug-in-Hamburg-Wenn-die-neue-Wohnung-schon-vermietet-ist,mietbetrug112.html"
              >
                https://www.ndr.de/nachrichten/hamburg/Betrug-in-Hamburg-Wenn-die-neue-Wohnung-schon-vermietet-ist,mietbetrug112.html
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://www.ndr.de/ratgeber/verbraucher/Wie-man-Betrug-mit-falschen-Wohnungsanzeigen-erkennt,wohnungssuche164.html"
              >
                https://www.ndr.de/ratgeber/verbraucher/Wie-man-Betrug-mit-falschen-Wohnungsanzeigen-erkennt,wohnungssuche164.html
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://www.ndr.de/ratgeber/verbraucher/Dubiose-Wohnungsanzeigen-So-schuetzen-Sie-sich-vor-Betrug,wohnungsanzeigen102.html"
              >
                https://www.ndr.de/ratgeber/verbraucher/Dubiose-Wohnungsanzeigen-So-schuetzen-Sie-sich-vor-Betrug,wohnungsanzeigen102.html
              </a>
            </li>
          </ul>
          <footer className="text-center flex justify-center items-center p-4 sm:p-10 sm:mt-20">
            <Button>
              <Link href="/">Home</Link>
            </Button>
          </footer>
        </main>
      </div>
    </>
  );
}
