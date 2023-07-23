import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="team">by M&A&apos;s Team</div>
      </div>
      <form></form>
      <div className={styles.center}>
        <h2>Mates & Asado Hamburg 🧉</h2>
      </div>

      <div className={styles.grid}>
        <a href="/anmeldung" className={styles.card} rel="noopener noreferrer">
          <h2 className={inter.className}>
            An-, Um- y Abmeldung <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Informacion sobre el registro de domicilio en Alemania.
          </p>
        </a>

        <a
          href="/fuehrerschein"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Führerschein <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Como conseguir la licencia en Alemania
          </p>
        </a>
      </div>
    </main>
  );
}
