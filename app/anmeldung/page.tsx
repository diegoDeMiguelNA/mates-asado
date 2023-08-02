import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Anmeldung() {
  return (
    <>
      <header className="text-center flex justify-center items-center p-4 sm:p-10">
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </header>

      <main className="text-center sm:px-10 mb-8 sm:mb-24 mx-2 sm:mx-24">
        <div className="pt-12 py-12">
          <h1 className="text-xl sm:text-5xl font-heading uppercase">
            An-, Um- y Abmeldung
          </h1>
        </div>
        <p className="px-6 text-left py-2 sm:px-24">
          Cuando uno llega nuevo nuevito a Alemania (excepto turistas) lo
          primero que hay que hacer es registrar el domicilio. El registro o en
          alemán “Anmeldung”* es un trámite que se hace en las oficinas de la
          administración pública del municipio en el que uno va a vivir
          (Einwohnerangelegenheiten).
        </p>
        <p className="px-6 text-left py-2 sm:px-24">
          “Anmeldung” en alemán significa (entre otras cosas) registro,
          inscripción, y es una palabra que puede aplicar a muuuuchísimos
          contextos (ej: registro/inscripción a un curso, a la facu, a un
          evento, mil cosas). En este caso me voy a referir al registro del
          domicilio / lugar de residencia.
        </p>
        <p className="px-6 text-left py-2 sm:px-24">
          Este trámite es muy importante es porque es el trámite que activa una
          bola de nieve de procesos administrativos como:
        </p>
        <ul className="list-inside py-2 list-disc sm:px-24 text-center">
          <li className="px-6 text-left">
            Tu número de identificación fiscal (Steuer-ID)
          </li>
          <li className="px-6 text-left">
            Tu número de seguridad social (Sozialversicherungs­ausweis)
          </li>
        </ul>
        <p className="px-6 text-left py-2 sm:px-24">
          Estas identificaciones son necesarias para otras cosas como por
          ejemplo trabajar.
        </p>
        <p className="px-6 text-left py-2 sm:px-24">
          Aunque no es 100% un requisito, la verdad es que hay muchísimos
          empleadores que no te van a tomar hasta que tengas estas cosas. Pero
          en mi experiencia y la de algunos otros, existen también algunos que
          te dejan empezar mientras arreglas esos temas de papeles, pero para lo
          que seguro lo vas a necesitar es para que te puedan pagar el sueldo.
        </p>
        <p className="px-6 text-left py-2 sm:px-24">
          Ahora, yendo a lo concreto. ¿Cómo se hace el Anmeldung?
        </p>
        <p className="px-6 text-left py-2 sm:px-24">
          En Hamburgo para poder registrarte vas a necesitar:
        </p>
        <ul className="list-inside py-2 list-disc sm:px-24 text-center">
          <li className="px-6 text-left">
            Documento de identificación personal: Pasaporte si sos extranjero
          </li>
          <li className="px-6 text-left">
            <a href="https://welcome.hamburg.de/contentblob/2217296/42d1e8e18938d0d8b85e1d0c600755e2/data/anmeldung-des-wohnsitzes.pdf">
              Formulario de registración “Anmeldevordruck”
            </a>
          </li>
          <li className="px-6 text-left">
            Un formulario firmado por quien te alquila tu departamento /
            habitación / donde sea que vayas a vivir: el
            &ldquo;Wohnungsgeberbestätigung&ldquo;{" "}
            <a href="https://www.hamburg.de/Dibis/vordr/6700-25-barrierefrei.pdf">
              (descargar formulario)
            </a>
          </li>
        </ul>
        <p className="px-6 text-left py-2 sm:px-24">
          Si hay niños en la flia la web dice “En el caso de los niños, debe
          presentarse el certificado de nacimiento en la forma adecuada
          (certificado internacional o apostilla/legalización realizada por un
          traductor jurado en Alemania) y todas las personas sujetas a registro
          deben comparecer personalmente.”
        </p>
        <p className="px-6 text-left py-2 sm:px-24">
          En los siguientes casos también hay que presentar lo siguiente:
        </p>
        <ul className="list-inside py-2 list-disc sm:px-24 text-center">
          <li className="px-6 text-left">
            Personas casadas/parejas: certificado de matrimonio (original)
          </li>
          <li className="px-6 text-left">
            Personas divorciadas: sentencia de divorcio jurídicamente vinculante
            (original)
          </li>
          <li className="px-6 text-left">
            Personas viudas: Certificado de defunción (original)
          </li>
          <li className="px-6 text-left">
            Titulares de un permiso de residencia electrónico (eAT): el permiso
            de residencia
          </li>
        </ul>
        <p className="px-6 text-left py-2 sm:px-24">
          El trámite al día de hoy sale 12 euros.
        </p>
        <p className="px-6 text-left py-2 sm:px-24">
          Hoy en día por suerte en Hamburgo hay una plataforma online que te
          permite sacar turno para ciertos trámites y el Anmeldung es uno de
          ellos.
        </p>
        <p className="px-6 text-left py-2 sm:px-24">
          Para sacar turno tienen que ir acá:{" "}
          <a href="https://serviceportal.hamburg.de/HamburgGateway/FVP/FV/Bezirke/DigiTermin/Dsgvo">
            Plataforma de turnos
          </a>
        </p>
        <h4 className="text-l font-heading uppercase">Ummeldung</h4>
        <p className="px-6 text-left py-2 sm:px-24">
          El Ummeldung es el cambio de domicilio dentro de la ciudad. Osea si te
          mudas dentro de Hamburgo tener que elegir en el menu de los turnos
          “Wohnsitz Ummeldung innerhalb Hamburgs”. Y todo el resto es igual.
        </p>
        <h4 className="text-l font-heading uppercase">Abmeldung</h4>
        <p className="px-6 text-left py-2 sm:px-24">
          Cuando te vas de Hamburgo, si no te mudas y te vas a registrar en otro
          lugar de Alemania tenes que hacer el Abmeldung, para eso, en el menu
          de turnos elegis “Wohnsitz Abmeldung des Nebenwohnsitzes”.
        </p>
        <h3 className="text-l font-heading uppercase mt-12 mb-4">
          Temas: Registro, Cambio y Cancelación de registro
        </h3>
        <p className="px-6 text-left py-2 sm:px-24">
          Ahora, yendo a lo concreto, ¿cómo se realiza el empadronamiento en
          Hamburgo? Para poder registrarte en Hamburgo, necesitarás:
        </p>
        <ul className="list-inside py-2 list-disc sm:px-24 text-center">
          <li className="px-6 text-left">
            Documento de identidad personal: pasaporte si eres extranjero.
          </li>
          <li className="px-6 text-left">
            <a href="https://welcome.hamburg.de/contentblob/2217296/42d1e8e18938d0d8b85e1d0c600755e2/data/anmeldung-des-wohnsitzes.pdf">
              Formulario de empadronamiento &ldquo;Anmeldevordruck&ldquo;
            </a>
            .
          </li>
          <li className="px-6 text-left">
            Un formulario firmado por la persona que te alquila el departamento,
            habitación o lugar donde vivirás, llamado
            &ldquo;Wohnungsgeberbestätigung&ldquo;{" "}
            <a href="https://www.hamburg.de/Dibis/vordr/6700-25-barrierefrei.pdf">
              (descargar formulario)
            </a>
            . Este formulario incluye los datos del lugar de residencia, de las
            personas que se registrarán y de la persona que te alquila o aloja.
          </li>
        </ul>
        <p className="px-6 text-left py-2 sm:px-24">
          Si hay niños en la familia, según la página web, se debe presentar el
          certificado de nacimiento en la forma adecuada (certificado
          internacional o apostilla/legalización realizada por un traductor
          jurado en Alemania) y todas las personas sujetas a registro deben
          comparecer personalmente.
        </p>
        <p className="px-6 text-left py-2 sm:px-24">
          En los siguientes casos, también se debe presentar la documentación
          correspondiente:
        </p>
        <ul className="list-inside py-2 list-disc sm:px-24 text-center">
          <li className="px-6 text-left">
            Personas casadas/parejas: certificado de matrimonio (original).
          </li>
          <li className="px-6 text-left">
            Personas divorciadas: sentencia de divorcio legalmente vinculante
            (original).
          </li>
          <li className="px-6 text-left">
            Personas viudas: certificado de defunción (original).
          </li>
          <li className="px-6 text-left">
            Titulares de una tarjeta de residencia electrónica (eAT): la tarjeta
            de residencia.
          </li>
        </ul>
        <p className="px-6 text-left py-2 sm:px-24">
          El costo actual del trámite es de 12 euros. Afortunadamente, en
          Hamburgo, existe una plataforma en línea que permite sacar turno para
          ciertos trámites, incluyendo el empadronamiento. Para solicitar turno,
          debes ingresar aquí:{" "}
          <a href="https://serviceportal.hamburg.de/HamburgGateway/FVP/FV/Bezirke/DigiTermin/Dsgvo">
            Plataforma de turnos
          </a>
        </p>
        <h3 className="text-l font-heading uppercase mt-12">Pasos a seguir:</h3>
        <ol className="list-inside py-2 list-decimal sm:px-24 text-center">
          <li className="px-6 text-left">
            Accede al enlace que se menciona arriba.
          </li>
          <li className="px-6 text-left">
            Acepta las condiciones de protección de datos y haz clic en
            &ldquo;Weiter&ldquo; (Siguiente).
          </li>
          <li className="px-6 text-left">
            Completa los campos de nombre, apellido, correo electrónico y,
            opcionalmente, teléfono.
          </li>
          <li className="px-6 text-left">
            En el próximo menú, busca la opción &ldquo;Meldewesen&ldquo;.
          </li>
          <li className="px-6 text-left">
            Donde aparece el 0, elige la cantidad correspondiente de personas (1
            para una persona, 2 para dos personas, etc.). Si es tu primera vez
            registrándote en Alemania o en Hamburgo, selecciona la primera
            opción. Si te estás mudando dentro de la ciudad de Hamburgo, elige
            la segunda opción.
          </li>
          <li className="px-6 text-left">
            Desplázate hacia abajo hasta que puedas hacer clic en
            &ldquo;Weiter&ldquo;.
          </li>
          <li className="px-6 text-left">
            Verifica la disponibilidad de turnos en el mapa y elige uno.
          </li>
          <li className="px-6 text-left">
            Al finalizar, se mostrará un resumen de tu turno. Haz clic en
            &ldquo;Termin verbindlich vereinbaren&ldquo; (Confirmar cita).
            También recibirás los detalles de tu turno por correo electrónico.
          </li>
        </ol>
        <p className="px-6 text-left py-2 sm:px-24">
          Puedes utilizar la función de traducción de Google Chrome para
          traducir la página al español. Esto puede ser útil en caso de que
          encuentres alguna dificultad con la traducción.
        </p>
        <p className="px-6 text-left py-2 sm:px-24">
          Ten en cuenta que el sistema de turnos puede ser aleatorio, por lo que
          puede ser necesario actualizar la página varias veces para encontrar
          una opción más próxima en el tiempo.
        </p>
        <h4 className="text-l font-heading uppercase mt-12">Enlaces útiles:</h4>
        <ul className="list-inside py-2 list-disc sm:px-24 text-center">
          <li className="px-6 text-left">
            Versión en inglés de las instrucciones en el sitio web del Hamburg
            Welcome Center:{" "}
            <a href="https://www.hamburg.com/welcome/entry-residence/general-regulations/11725242/registration/">
              Instrucciones en inglés
            </a>
          </li>
          <li className="px-6 text-left">
            Guía paso a paso en inglés:{" "}
            <a href="https://www.hamburg.com/contentblob/11701420/7306804dcaa6d6881635172d1ad5e7fe/data/km1-appointment-kuz-%E2%80%93-guide-in-english-language.pdf">
              Guía paso a paso en inglés
            </a>
          </li>
        </ul>
        <h4 className="text-l font-heading uppercase mt-12">
          Cambio de Domicilio
        </h4>
        <p className="px-6 text-left py-2 sm:px-24">
          El cambio de domicilio dentro de la misma ciudad se conoce como
          Ummeldung. Si te mudas dentro de Hamburgo, debes seleccionar la opción
          &ldquo;Wohnsitz Ummeldung innerhalb Hamburgs&ldquo; en el menú de
          turnos. El resto del procedimiento es el mismo.
        </p>
        <h4 className="text-l font-heading uppercase mt-12">
          Cancelación de REgistro
        </h4>
        <p className="px-6 text-left py-2 sm:px-24">
          Cuando te vas de Hamburgo y te registras en otro lugar de Alemania,
          debes realizar la Abmeldung. Para ello, en el menú de turnos, elige
          &ldquo;Wohnsitz Abmeldung des Nebenwohnsitzes&ldquo;.
        </p>
        <footer className="text-center flex justify-center items-center p-4 sm:p-10">
          <Button>
            <Link href="/">Home</Link>
          </Button>
        </footer>
      </main>
    </>
  );
}
