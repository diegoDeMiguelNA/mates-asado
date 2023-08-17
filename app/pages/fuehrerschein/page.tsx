import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Button } from "@/app/components/button/button";

export default function Fuehrerschein() {
  return (
    <>
      <header className="text-center flex justify-center items-center p-4 sm:p-10">
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </header>
      <div className="max-w-7xl mx-auto">
        <main className="text-center sm:px-10 mb-8 sm:mb-24 mx-2 sm:mx-24">
          <div className="pt-12 py-8">
            <h1 className="text-xl sm:text-5xl font-heading uppercase">
              Conducir en Alemania
            </h1>
          </div>
          <h3 className="text-xs mx-8 font-heading uppercase mb-4 sm:mx-24">
            En este artículo se explica qué requisitos existen para conducir en
            en Hamburgo. Los requisitos en otras ciudades suelen ser similares,
            pero existe la posibilidad de que el orden de los pasos no sea
            exactamente el mismo.
          </h3>
          <p className="px-6 text-left py-2 sm:px-24">
            Cuando alguien se muda a Alemania y posee una licencia de conducir
            válida en su país de origen, puede usarla durante los primeros seis
            meses para conducir un vehículo normal de pasajeros (no camiones ni
            nada que no sea vehículos de la clase B).
          </p>
          <p className="px-6 text-left py-2 sm:px-24">
            Pasado este tiempo, en general hace falta cambiar la licencia de
            conducir por una alemana. Las excepciones a esto son:
          </p>
          <p className="px-6 text-left py-2 sm:px-24">
            Poseer una licencia de conducir europea que se obtuvo pasando los
            exámenes de conducir en la Unión Europea (no cuenta si se cambió 1 a
            1 como se puede hacer por ejemplo con una licencia argentina por una
            española, más información sobre esto en la siguiente sección).
          </p>
          <p className="px-6 text-left py-2 sm:px-24">
            Tener una licencia de conducir de un tercer país dentro de la lista
            de países exceptuados (en Latinoamérica no hay ninguno).
          </p>

          <h2 className="mt-10 px-8 text-l sm:text-3xl font-heading uppercase sm:mt-10">
            Resumen de los requisitos:
          </h2>
          <ul className="py-6 px-8 list-inside list-decimal sm:px-4 md:px-20 text-center sm:text-left">
            <li className="text-left">Documentación variada típica</li>
            <li className="text-left">Aprobar examen de vista</li>
            <li className="text-left">
              Hacer curso de primeros auxilios de día completo
            </li>
            <li className="text-left">Iniciar el trámite</li>
            <li className="text-left">
              Registrarse en alguna escuela de conducir
            </li>
            <li className="text-left">Tomar clases teóricas</li>
            <li className="text-left">Aprobar examen teórico</li>
            <li className="text-left">Tomar clases prácticas</li>
            <li className="text-left">
              Aprobar examen práctico (esto requiere alemán básico)
            </li>
          </ul>
          <p className="px-6 text-left py-2 sm:px-24">
            Todos estos requisitos se desarrollan en el resto del artículo.
          </p>
          <h2 className="text-l sm:text-2xl font-heading uppercase m-10 mt-12">
            Aclaración - Licencias españolas o italianas cambiadas mano a mano
            sin examen habiendo residido en dichos países
          </h2>
          <p className="px-6 text-left sm:px-24">
            En algunos países hay convenios unilaterales con países fuera de la
            unión para, al ser residente, hacer un canje de licencia de conducir
            mano a mano, sin pasar ningún en examen como requisito. Esto no es
            correcto. Pasados los primeros seis meses de residir en Alemania, no
            se puede conducir con una licencia que se obtuvo sin dar examen de
            conducir en la Unión Europea. Este mito se ha extendido en parte
            porque es una realidad que en Europa no hay tantos controles de
            tránsito proactivos como se conocen en Latinoamérica. Lo más
            probable es que algo así salga a la luz si se está involucrado en un
            accidente de tránsito y la policía controle la licencia de conducir.
            Técnicamente no es tan grave como estar sin licencia de conducir,
            pero la multa igualmente asciende a varios cientos de euros en el
            mejor de los casos. Es posible que la compañía de seguro del
            automotor dé problemas para cubrirnos en el caso de que la culpa sea
            propia. Resumiendo, esto es una confusión muy común y puede
            costarnos un disgusto y unos cuantos euros.
          </p>
          <footer className="text-center flex justify-center items-center p-4 sm:p-10 mt-4 sm:mt-10">
            <Button>
              <Link href="/">Home</Link>
            </Button>
          </footer>
        </main>
      </div>
    </>
  );
}
