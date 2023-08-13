import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button/button";
import MobileMenu from "@/components/ui/ResponsiveNavMenu/mobileMenu";

export default function Wohnungssuche() {
  const menuItems = [
    { content: 'Sitios Web', href: '#sitios-web' },
    { content: 'Pisos corto mediano plazo', href: '#pisos-corto-mediano-plazo' },
    { content: 'Terminologia y Abreviaturas', href: '#terminologia-abreviaturas' },
    { content: 'Requisitos', href: '#requisitos' },
    { content: 'Schufa', href: '#obtener-schufa' },
    { content: 'Estafas', href: '#estafas' },
  ];
  

  return (
    <>
      <header className="text-center flex justify-center items-center p-4 sm:p-10">
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </header>
      <div className="max-w-7xl mx-auto">
       <MobileMenu menuItems={menuItems} />
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
