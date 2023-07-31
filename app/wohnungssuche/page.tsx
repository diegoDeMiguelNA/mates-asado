import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Wohnungssuche() {
  return (
    <>
      <header className="text-center flex justify-center items-center p-10">
        <Button>
          <Link href="/">Home/Inicio</Link>
        </Button>
      </header>

      <main className="text-center px-20 mb-24 mx-24">
        <header className="text-center flex justify-center items-center p-10">
        </header>
        <h1 className="text-5xl font-heading uppercase">
          Busca de apartamento en Hamburgo 
        </h1>
        <h2 className="text-l font-heading uppercase m-8">
        (Tambien vale en la mayoria de las casos para toda Alemania)
        </h2>
        
        <h2 className="text-3xl font-heading uppercase mt-12 p-12">
          Sitios WEB de busqueda
        </h2>
        <ul className="py-2 list-inside list-disc px-24 text-left">
          <li>
            <a target="_blank" href="https://www.immowelt.de/suche/wohnungen">
              https://www.immowelt.de/suche/wohnungen
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.immobilienscout24.de/wohnen/wohnung.html"
            >
              https://www.immobilienscout24.de/wohnen/wohnung.html
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.kleinanzeigen.de/s-immobilien/hamburg/c195l9409"
            >
              https://www.kleinanzeigen.de/s-immobilien/hamburg/c195l9409
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.wg-gesucht.de/">
              https://www.wg-gesucht.de/
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.hamburg.de/wohnungen-hamburg/">
              https://www.hamburg.de/wohnungen-hamburg/
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.immonet.de/">
              https://www.immonet.de/
            </a>
          </li>
        </ul>
        <h2 className="text-3xl font-heading uppercase mt-12 p-12">
          Pisos a corto y mediano plazo
        </h2>
        <p className="text-left py-2 px-24">
          En ambas aclara si los pisos dan registro o no, con lo cual es una
          Buena opcion al momento de llegar a HH
        </p>
        <ul className="py-2 list-inside list-disc px-24 text-left">
          <li>
            <a href="https://wunderflats.com/">https://wunderflats.com/</a>
          </li>
          <li>
            <a href="https://www.city-wohnen.de/">
              https://www.city-wohnen.de/
            </a>
          </li>
        </ul>
        <h2 className="text-3xl font-heading uppercase mt-12 p-12">
          Terminología y abreviaturas
        </h2>
        <p className="text-left py-2 px-24">
          Conocer la terminología alemana del mundo de la vivienda, el alquiler
          y sus abreviaturas te ayudará a sobrevivir al proceso de buscar un
          piso, así que toma nota:
        </p>
        <ul className="py-2 list-inside list-disc px-24 text-left">
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
        <h2 className="text-3xl font-heading uppercase mt-8">Requisitos</h2>
        <p className="text-left py-2 px-24">
          Al momento de aplicar a un piso dependiendo del dueño se pueden pedir
          diferentes documentos como pueden ser:
        </p>
        <ul className="py-2 list-inside list-disc px-24 text-left">
          <li>solicitud de alquiler por escrito (Wohnenbewerbung)</li>
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
        <h2 className="text-3xl font-heading uppercase mt-12 p-12">
          Como obtener el SCHUFA
        </h2>
        <p className="text-left py-2 px-24">
          Se puede hacer de forma gratuita a través del proveedor official
          (puede tardar 2 semanas){" "}
          <a href="https://www.meineschufa.de/de/datenkopie">
            https://www.meineschufa.de/de/datenkopie
          </a>
        </p>
        <p className="text-left py-2 px-24">
          O bien se puede elegir pagar por el informe (29,95 EUR), en este caso
          el informe va a llegar en mucho menos tiempo{" "}
          <a href="https://www.meineschufa.de/de/produkte">
            https://www.meineschufa.de/de/produkte
          </a>
        </p>
        <p className="text-left py-2 px-24">
          Ambos Links son a la pagina official que emite ese document sin pasar
          por ningun intermediario.
        </p>
        <h2 className="text-3xl font-heading uppercase mt-12 p-12">
          Estafas a la hora de buscar departamento
        </h2>
        <p className="text-left py-2 px-24">
          Lamentablemente al momento de buscar departamento en los últimos meses
          han aparecido muchos casos de estafas, por fuera de los consejos
          básico de no transferir ningún dinero antes de firmar el contrato o
          entrega de las llaves si es valido (en la medida de lo posible hacer
          la firma de forma presencial), dejamos algunas notas de medio de
          comunicación locales donde tratan algunas de las estafas que se
          estuvieron dando en los últimos meses para que estemos al tanto.
        </p>
        <p className="text-left py-2 px-24">
          (Las noticias estan en Aleman, pero se pueden traducir facilmente)
        </p>
        <ul className="py-2 list-inside list-disc px-24 text-left">
          <li>
            <a href="https://www.ndr.de/nachrichten/hamburg/Betrug-in-Hamburg-Wenn-die-neue-Wohnung-schon-vermietet-ist,mietbetrug112.html">
              https://www.ndr.de/nachrichten/hamburg/Betrug-in-Hamburg-Wenn-die-neue-Wohnung-schon-vermietet-ist,mietbetrug112.html
            </a>
          </li>
          <li>
            <a href="https://www.ndr.de/ratgeber/verbraucher/Wie-man-Betrug-mit-falschen-Wohnungsanzeigen-erkennt,wohnungssuche164.html">
              https://www.ndr.de/ratgeber/verbraucher/Wie-man-Betrug-mit-falschen-Wohnungsanzeigen-erkennt,wohnungssuche164.html
            </a>
          </li>
          <li>
            <a href="https://www.ndr.de/ratgeber/verbraucher/Dubiose-Wohnungsanzeigen-So-schuetzen-Sie-sich-vor-Betrug,wohnungsanzeigen102.html">
              https://www.ndr.de/ratgeber/verbraucher/Dubiose-Wohnungsanzeigen-So-schuetzen-Sie-sich-vor-Betrug,wohnungsanzeigen102.html
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
