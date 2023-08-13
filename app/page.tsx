import Header from "./header/header";

export default function Home() {
  return (
    <>
      <main className="text-center px-4 md:px-12">
        <Header />
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
          <a href="/medicos" className="text-center" rel="noopener noreferrer">
            <h2 className="font-serif font-bold text-lg md:text-xl">
              Médicos en Hamburgo
            </h2>
            <p className="text-gray-400 font-thin font-playfair text-sm md:text-base">
              Info sobre médicos en Hamburgo que hablan español o inglés.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
