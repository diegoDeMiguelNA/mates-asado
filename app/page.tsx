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
        <div className="py-12">
          <h1 className="text-9xl font-heading uppercase">Mates & Asado</h1>
        </div>

        <div className="grid gap-4 grid-cols-3 grid-rows-1 px-12">
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
              Como conseguir la licencia en Alemania
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
