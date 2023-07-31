import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className="text-center flex justify-center items-center p-10">
        <div>
          <p className="text-center text-lg tracking-[5rem] uppercase">
            by M&A&apos;s Team
          </p>
        </div>
      </header>
      <main className="text-center px-12">
        <div className="pt-12">
          <h1 className="text-9xl font-heading uppercase">Mates & Asado</h1>
        </div>
        <div className="py-6">
          <h3 className="text-2l font-heading uppercase">Comunidad de ayuda en español para emigrados en Hamburgo</h3>
        </div>

        <div className=" py-24 grid gap-40 grid-cols-3 grid-rows-1 px-12">
          <a
            href="/anmeldung"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold">
              An-, Um- y Abmeldung <span>-&gt;</span>
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm">
              Informacion sobre el registro de domicilio en Alemania.
            </p>
          </a>
          <a
            href="/fuehrerschein"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold">
              Führerschein <span>-&gt;</span>
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm">
              Como tramitar la licencia en Alemania
            </p>
          </a>
          <a
            href="/wohnungssuche"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold">
              Wohnungssuche <span>-&gt;</span>
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm">
              Busqueda de departamento/WG + como prevenir estafas
            </p>
          </a>
          <a
            href="/productos-latinos"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold">
              Productoslatinos <span>-&gt;</span>
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm">
              Donde comprar productos latinos en Hamburgo + Online
            </p>
          </a>
          <a
            href="/telefonos-utiles"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold">
              Teléfonos Útiles <span>-&gt;</span>
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm">
              Guia de teléfonos útiles para inmigrantes en Hamburgo
            </p>
          </a>
          <a
            href="/deutschlandticket"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold">
              Deutschland Ticket <span>-&gt;</span>
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm">
              Información sobre el Deutschlandticket
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
