import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TelefonosUtiles() {
  return (
    <>
      <header className="text-center flex justify-center items-center p-10">
        <Button>
          <Link href="/">Home/Inicio</Link>
        </Button>
      </header>

      <main className="text-center px-20 mb-24 mx-24">
        <h1 className="text-5xl font-heading uppercase m-12">
          Teléfonos Útiles
        </h1>

        <div className="py-6 text-xl m-12 text-left">
          <h2 className="text-3xl font-heading uppercase m-12">
            Hamburg Welcome Center:
          </h2>
          <p>Servicio de inmigración y naturalización en Hamburgo</p>
          <p>Süderstraße 32B, 20097 Hamburg:</p>
          <br />
          <a
            href="https://welcome.hamburg.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          >
            https://welcome.hamburg.de
          </a>

          <h2 className="text-3xl font-heading uppercase m-12">Horario de apertura:</h2>

          <p> De lunes a miércoles, de 9.00 a 15.00 horas</p>

          <p>Jueves de 10 a 18 hs</p>

          <p>
            Viernes de 9 a 12hs. Durante las horas de apertura, se puede llamar
            al teléfono de atención al público (040) 42839-5555
          </p>

          <p className="text-xl">
            Envíe sus consultas por correo electrónico a{" "}
            <a
              href="mailto:info@welcome.hamburg.de"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              info@welcome.hamburg.de
            </a>
          </p>

          <p className="text-lg font-normal">
            El prefijo internacional de Alemania es el +49
          </p>
          <p className="text-lg font-normal">
            En caso de emergencia aguda, avisa a los bomberos o ambulancia al
            112 o a la policía al 110, o en casos menos urgentes, contacta con
            los servicios de emergencia y prácticas de emergencia.
          </p>

          <h2 className="text-3xl font-heading uppercase m-12">
            Aquí hay algunas cosas a tener en cuenta al informar una emergencia:
          </h2>
          <ul className="list-disc list-inside text-lg font-normal">
            <li>
              Si reporta una emergencia a los bomberos (112): Nombra la
              ubicación de la emergencia, responde las preguntas del centro de
              control y espera hasta que el centro de control finalice la
              llamada.
            </li>
            <li>
              Si informa de un incendio a los bomberos (112): Informe al centro
              de control utilizando las siguientes preguntas: ¿Dónde está el
              incendio? Qué se está quemando que grande es el fuego ¿Cuáles son
              los peligros agudos? ¿Las personas están en peligro? Espere las
              preguntas y no cuelgue antes de que el centro de control haya
              finalizado la llamada.
            </li>
          </ul>

          <h3 className="text-2xl font-heading uppercase m-12">Números generales de emergencia</h3>
          <ul className="list-disc list-inside text-lg font-normal">
            <li>Departamento de bomberos: 112</li>
            <li>Policía: 110</li>
          </ul>

          <p className="text-lg font-normal">
            Fax de emergencia para personas con discapacidad auditiva y del
            habla
          </p>
          <ul className="list-disc list-inside text-lg font-normal">
            <li>Departamento de bomberos: 112</li>
            <li>Policía: 110</li>
            <li>Teléfono de texto de servicios de emergencia: 040 19296</li>
          </ul>

          <h3 className="text-2xl font-heading uppercase m-12">Salud</h3>
          <p className="text-lg font-normal">
            En el caso de todas las enfermedades y accidentes que no pongan en
            peligro la vida, comuníquese con su médico de familia durante el
            horario de atención . Fuera del horario de oficina, póngase en
            contacto con el servicio de urgencias médicas o con el consultorio
            del médico de urgencias:
          </p>
          <ul className="list-disc list-inside text-lg font-normal">
            <li>
              Servicio de urgencias del seguro médico obligatorio: 040 228022 o
              116117
            </li>
            <li>Urgencias médicas privadas: 040 19257</li>
            <li>
              Servicio de urgencias médicas de guardia para personas con
              discapacidad auditiva y del habla:
            </li>
          </ul>
          <p className="text-lg font-normal">
            7 am a medianoche por fax al 040 22802475
          </p>
          <p className="text-lg font-normal">
            De 12:00 a 07:00 por fax al 040 66955459
          </p>
          <h3 className="text-2xl font-heading uppercase m-12">Prácticas de emergencia:</h3>
          <ul className="list-disc list-inside text-lg font-normal">
            <li>
              Práctica de emergencia Altona, Stresemannstraße 54, 22769 Hamburgo
            </li>
            <li>
              Práctica de emergencia en el Bundeswehr Hospital Wandsbek,
              Lesserstraße 180, 22049 Hamburgo
            </li>
            <li>
              Horario: lunes, viernes, jueves y viernes de 19 a 24 h, miércoles
              de 13 a 24 h, sábados, domingos y festivos de 7 a 24 h
            </li>
          </ul>
          <p className="text-lg font-normal">
            También puede acudir a cualquier hospital público de urgencias.
            Puede encontrar una lista de hospitales de emergencia{" "}
            <a
              href="https://hospital.com/emergency"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              aquí
            </a>
            .
          </p>

          <h3 className="text-2xl font-heading uppercase m-12">Servicio de urgencias dentales</h3>
          <p className="text-lg font-normal">
            Buscador de servicios de emergencia de farmacia: 040 22833 o 0800 00
            22833 (llamada gratuita)
          </p>
          <p className="text-lg font-normal">Veneno llamada al 911</p>
          <p className="text-lg font-normal">GIZ Norte 0551 19240</p>
          <h3 className="text-2xl font-heading uppercase m-12">
            Llamada de emergencia violencia contra la mujer
          </h3>
          <p className="text-lg font-normal">
            Número de emergencia para mujeres y niñas violadas: 040 255566
          </p>
          <p className="text-lg font-normal">
            Línea de ayuda contra la violencia contra la mujer: 0800 116016
            (llamada gratuita)
          </p>
          <p className="text-lg font-normal">
            Refugios autónomos para mujeres en Hamburgo Llamada de emergencia
            (medianoche): 040 800041000 o fax 040 8000410019
          </p>
          <p className="text-lg font-normal">
            Llamada de emergencia Violencia y emergencias contra niñas o niños
            Urgencias infantil y juvenil: 040 428 15 32 00
          </p>
          <p className="text-lg font-normal">
            Hogar de niñas: 040 428 15 32 71
          </p>
          <h3 className="text-2xl font-heading uppercase m-12">
            Otros números de emergencia y servicios de emergencia
          </h3>
          <p className="text-lg font-normal">
            Teléfono de la víctima Weisser Ring: 116006 (llamada gratuita)
          </p>
          <p className="text-lg font-normal">
            Servicio de urgencias veterinarias: 040 434379
          </p>
          <p className="text-lg font-normal">
            Llamada de emergencia para animales heridos abandonados y animales
            salvajes enfermos: 040 222277
          </p>
          <p className="text-lg font-normal">Urgencias legales: 0171 6105949</p>
          <p className="text-lg font-normal">
            Llamada de emergencia de bloqueo de tarjeta: 116116 (llamada
            gratuita)
          </p>
          <p className="text-lg font-normal">
            Línea directa de extremismo de derecha (policía): 040 428676767
          </p>
          <h3 className="text-2xl font-heading uppercase m-12">
            Servicios de emergencia para adicciones
          </h3>
          <p className="text-lg font-normal">
            Teléfono de información sobre drogas de bienestar juvenil: 040
            28051107 (8 a 20 h) y (040) 2803204 (20 a 8 h)
          </p>
          <p className="text-lg font-normal">
            Consulta externa para adictos en la Clínica Asklepios Norte (Casa 32
            planta baja): 040 1818872524
          </p>
          <p className="text-lg font-normal">
            Alcohólicos Anónimos, Saarlandstrasse 9, 22303 Hamburgo: 040 19295
          </p>
          <p className="text-lg font-normal">Jugadores anónimos: 040 2099009</p>
        </div>
      </main>
    </>
  );
}
