// import { Inter } from "@next/font/google";
import styles from "./page.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="text-center flex justify-center items-center p-10">
        <div>
          <p className="text-center">July 20.0.2023</p>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.description}>
          <div className="team">by M&A&apos;s Team</div>
        </div>
        <div className="py-4">
          <h1 className="text-9xl">Mates & Asado Hamburg 🧉</h1>
        </div>

        <div className={styles.grid}>
          <a
            href="/anmeldung"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className="font-serif">
              An-, Um- y Abmeldung <span>-&gt;</span>
            </h2>
            <p className="font-serif">
              Informacion sobre el registro de domicilio en Alemania.
            </p>
          </a>

          <a
            href="/fuehrerschein"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className="font-heading">
              Führerschein <span>-&gt;</span>
            </h2>
            <p className="font-playfair">
              Como conseguir la licencia en Alemania
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
