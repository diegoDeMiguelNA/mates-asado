import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link';

export default function  Fuehrerschein
() {
  return (
    <main className={styles.contentContainer}> 
     <Link href="/" className={styles.goHomeButton}>
        Inicio
      </Link>
          <h1>Conducir en Alemania</h1>
    <p>En este artículo se explica qué requisitos existen para conducir en Alemania, y en particular en Hamburgo. Los requisitos en otras ciudades suelen ser similares, pero la oficina encargada va a ser otra y existe la posibilidad de que el orden de los pasos no sea exactamente el mismo.</p>
    <p>Cuando alguien se muda a Alemania y posee una licencia de conducir válida en su país de origen, puede usarla durante los primeros seis meses para conducir un vehículo normal de pasajeros (no camiones ni nada que no sea vehículos de la clase B).</p>
    <p>Pasado este tiempo, en general hace falta cambiar la licencia de conducir por una alemana. Las excepciones a esto son:</p>
    <ul>
        <li>Poseer una licencia de conducir europea que se obtuvo pasando los exámenes de conducir en la Unión Europea (no cuenta si se cambió 1 a 1 como se puede hacer por ejemplo con una licencia argentina por una española, más información sobre esto en la siguiente sección).</li>
        <li>Tener una licencia de conducir de un tercer país dentro de la lista de países exceptuados (en Latinoamérica no hay ninguno).</li>
    </ul>
    <h2>Resumen de los requisitos:</h2>
    <ul>
        <li>Documentación variada típica</li>
        <li>Aprobar examen de vista</li>
        <li>Hacer curso de primeros auxilios de día completo</li>
        <li>Iniciar el trámite</li>
        <li>Registrarse en alguna escuela de conducir</li>
        <li>Tomar clases teóricas</li>
        <li>Aprobar examen teórico</li>
        <li>Tomar clases prácticas</li>
        <li>Aprobar examen práctico (esto requiere alemán básico)</li>
    </ul>
    <p>Todos estos requisitos se desarrollan en el resto del artículo.</p>
         <h2>Aclaración - Licencias españolas o italianas cambiadas mano a mano sin examen habiendo residido en dichos países</h2>
    <p>En algunos países hay convenios unilaterales con países fuera de la unión para, al ser residente, hacer un canje de licencia de conducir mano a mano, sin pasar ningún en examen como requisito. Esto no es correcto. Pasados los primeros seis meses de residir en Alemania, no se puede conducir con una licencia que se obtuvo sin dar examen de conducir en la Unión Europea. Este mito se ha extendido en parte porque es una realidad que en Europa no hay tantos controles de tránsito proactivos como se conocen en Latinoamérica. Lo más probable es que algo así salga a la luz si se está involucrado en un accidente de tránsito y la policía controle la licencia de conducir. Técnicamente no es tan grave como estar sin licencia de conducir, pero la multa igualmente asciende a varios cientos de euros en el mejor de los casos. Es posible que la compañía de seguro del automotor dé problemas para cubrirnos en el caso de que la culpa sea propia. Resumiendo, esto es una confusión muy común y puede costarnos un disgusto y unos cuantos euros.</p>
    </main>
  )
}
