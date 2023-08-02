import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className="text-center flex justify-center items-center p-4 md:p-10">
        <div>
          <p className="text-center text-lg sm:text-xl lg:text-2xl tracking-normal sm:tracking-wide lg:tracking-wider uppercase">
            by M&A&apos;s Team
          </p>
        </div>
      </header>

      <main className="text-center px-4 md:px-12">
        <div className="pt-12">
          <h1 className="text-4xl md:text-9xl font-heading uppercase">
            Mates & Asado
          </h1>
        </div>
        <div className="py-6">
          <h3 className="text-xs md:text-2xl font-heading uppercase">
            Comunidad de ayuda en español para emigrados en Hamburgo
          </h3>
        </div>

        <div className="py-10 md:py-24 grid gap-8 md:gap-40 grid-cols-1 md:grid-cols-3 grid-rows-3 px-4 md:px-12">
          <a
            href="/anmeldung"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold text-lg md:text-xl">
              An-, Um- y Abmeldung
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm md:text-base">
              Informacion sobre el registro de domicilio en Alemania.
            </p>
          </a>
          <a
            href="/fuehrerschein"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold text-lg md:text-xl">
              Führerschein
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm md:text-base">
              Como tramitar la licencia de conducir en Alemania
            </p>
          </a>
          <a
            href="/wohnungssuche"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold text-lg md:text-xl">
              Wohnungssuche
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm md:text-base">
              Busqueda de departamento/WG + como prevenir estafas
            </p>
          </a>
          <a
            href="/productos-latinos"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold text-lg md:text-xl">
              Productoslatinos
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm md:text-base">
              Donde comprar productos latinos en Hamburgo + Online
            </p>
          </a>
          <a
            href="/telefonos-utiles"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold text-lg md:text-xl">
              Teléfonos Útiles
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm md:text-base">
              Guia de teléfonos útiles para inmigrantes en Hamburgo
            </p>
          </a>
          <a
            href="/deutschlandticket"
            className="text-center"
            rel="noopener noreferrer"
          >
            <h2 className="font-serif font-bold text-lg md:text-xl">
              Deutschland Ticket
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm md:text-base">
              Información sobre el Deutschlandticket
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
