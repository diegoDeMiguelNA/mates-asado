"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export default function TelefonosUtiles() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      <header className="text-center flex justify-center items-center p-4 sm:p-10">
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </header>
      <div className="max-w-7xl mx-auto">
        <nav className="text-center py-4 bg-gray-100 px-4">
          <div className="block sm:hidden">
            <button
              onClick={handleMenuToggle}
              className="flex items-center px-3 py-2 border rounded text-blue-600 border-white hover:text-white hover:bg-black"
            >
              <svg
                className="w-5 h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75C2 4.33579 2.33579 4 2.75 4H17.25C17.6642 4 18 4.33579 18 4.75C18 5.16421 17.6642 5.5 17.25 5.5H2.75C2.33579 5.5 2 5.16421 2 4.75ZM2 9.75C2 9.33579 2.33579 9 2.75 9H17.25C17.6642 9 18 9.33579 18 9.75C18 10.1642 17.6642 10.5 17.25 10.5H2.75C2.33579 10.5 2 10.1642 2 9.75ZM2.75 14C2.33579 14 2 14.3358 2 14.75C2 15.1642 2.33579 15.5 2.75 15.5H17.25C17.6642 15.5 18 15.1642 18 14.75C18 14.3358 17.6642 14 17.25 14H2.75Z"
                />
              </svg>
            </button>
          </div>

          <ul
            className={clsx(
              "sm:flex",
              "sm:justify-center",
              "sm:space-x-8",
              "flex",
              "items-center",
              {
                hidden: !menuOpen,
              }
            )}
          >
            <li className="underline">Indice:</li>
            <li>
              <a href="#welcome-center">Hamburg Welcome Center</a>
            </li>
            <li>
              <a href="#consideraciones-generales">Consideraciones Grales.</a>
            </li>
            <li>
              <a href="#numeros-emergencia">Números de Emergencia</a>
            </li>
            <li>
              <a href="#salud">Salud</a>
            </li>
            <li>
              <a href="#practicas-de-emergencia">Prácticas de Emergencia</a>
            </li>
            <li>
              <a href="#urgencias-dentales">Urgencias Dentales</a>
            </li>
            <li>
              <a href="#violencia-contra-la-mujer">Violencia contra la Mujer</a>
            </li>
            <li>
              <a href="#otros">Otros servicios de emergencia</a>
            </li>
            <li>
              <a href="#adicciones">Adicciones</a>
            </li>
          </ul>
        </nav>
        <main className="text-center sm:px-10 m-8 sm:mb-24 mx-2 sm:mx-24">
          <h1 className="text-2xl sm:text-5xl font-heading uppercase px-4">
            Teléfonos Útiles
          </h1>

          <div className="py-6 text-xl text-center sm:mt-20">
            <h2
              id="welcome-center"
              className="text-l sm:text-xl font-heading uppercase"
            >
              Hamburg Welcome Center:
            </h2>
            <p className="px-8 text-left pt-10 sm:px-24">
              Servicio de inmigración y naturalización en Hamburgo
            </p>
            <p className="px-8 text-left pt-2 sm:px-24">
              Süderstraße 32B, 20097 Hamburg:
            </p>
            <br />
            <a
              href="https://welcome.hamburg.de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline sm:text-2xl hover:text-blue-800 visited:text-purple-600"
            >
              Link al sitio
            </a>

            <h2 className="text-l sm:text-xl font-heading uppercase mt-16 sm:mb-8">
              Horario de apertura:
            </h2>

            <p className="px-8 text-left pt-2 sm:px-24">
              De lunes a miércoles, de 9.00 a 15.00 horas
            </p>

            <p className="px-8 text-left pt-2 sm:px-24">Jueves de 10 a 18 hs</p>

            <p className="px-6 text-left pt-2 sm:px-24">
              Viernes de 9 a 12hs. Durante las horas de apertura, se puede
              llamar al teléfono de atención al público (040) 42839-5555
            </p>

            <p className="px-6 text-left pt-2 sm:px-24">
              Envíe sus consultas por correo electrónico a{" "}
              <a
                href="mailto:info@welcome.hamburg.de"
                className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
              >
                info@welcome.hamburg.de
              </a>
            </p>

            <p className="px-6 text-left pt-2 sm:px-24">
              El prefijo internacional de Alemania es el +49
            </p>
            <p className="px-6 text-left pt-2 sm:px-24">
              En caso de emergencia aguda, avisa a los bomberos o ambulancia al
              112 o a la policía al 110, o en casos menos urgentes, contacta con
              los servicios de emergencia y prácticas de emergencia.
            </p>

            <h2
              id="consideraciones-generales"
              className="text-l sm:text-2xl font-heading uppercase mt-12 sm:mt-20 sm:mb-6"
            >
              Aquí hay algunas cosas a tener en cuenta al informar una
              emergencia:
            </h2>
            <ul className="py-6 px-8 list-inside list-disc sm:px-4 md:px-16 text-center sm:text-left list-none sm:mx-4">
              <li>
                Si reporta una emergencia a los bomberos (112): Nombra la
                ubicación de la emergencia, responde las preguntas del centro de
                control y espera hasta que el centro de control finalice la
                llamada.
              </li>
              <li>
                Si informa de un incendio a los bomberos (112): Informe al
                centro de control utilizando las siguientes preguntas: ¿Dónde
                está el incendio? Qué se está quemando que grande es el fuego
                ¿Cuáles son los peligros agudos? ¿Las personas están en peligro?
                Espere las preguntas y no cuelgue antes de que el centro de
                control haya finalizado la llamada.
              </li>
            </ul>

            <h2
              id="numeros-emergencia"
              className="text-l sm:text-2xl font-heading uppercase mt-12 mb-4"
            >
              Números generales de emergencia
            </h2>
            <ul className="py-6 px-8 list-inside list-disc sm:px-4 md:px-16 text-center sm:text-left list-none sm:mx-4">
              <li>Departamento de bomberos: 112</li>
              <li>Policía: 110</li>
              <li>
                Fax de emergencia para personas con discapacidad auditiva y del
                habla
              </li>
              <li>Departamento de bomberos: 112</li>
              <li>Policía: 110</li>
              <li>
                Teléfono de texto de servicios de emergencia: 040 19296
              </li>{" "}
            </ul>

            <h2
              id="salud"
              className="text-l sm:text-2xl font-heading uppercase mt-12"
            >
              Salud
            </h2>
            <p className="px-8 text-left pt-10 sm:px-20">
              En el caso de todas las enfermedades y accidentes que no pongan en
              peligro la vida, comuníquese con su médico de familia durante el
              horario de atención . Fuera del horario de oficina, póngase en
              contacto con el servicio de urgencias médicas o con el consultorio
              del médico de urgencias:
            </p>
            <ul className="py-6 px-8 list-inside list-disc sm:px-4 md:px-16 text-center sm:text-left list-none sm:mx-4">
              <li>
                Servicio de urgencias del seguro médico obligatorio: 040 228022
                o 116117
              </li>
              <li>Urgencias médicas privadas: 040 19257</li>
              <li>
                Servicio de urgencias médicas de guardia para personas con
                discapacidad auditiva y del habla:
              </li>
            </ul>
            <p className="px-8 text-left pt-10 sm:px-24">
              7 am a medianoche por fax al 040 22802475
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              De 12:00 a 07:00 por fax al 040 66955459
            </p>
            <h2
              id="practicas-de-emergencia"
              className="mt-12 text-l sm:text-2xl font-heading uppercase sm:mt-20 mb-4"
            >
              Prácticas de emergencia:
            </h2>
            <ul className="py-6 px-8 list-inside list-disc sm:px-4 md:px-16 text-center sm:text-left list-none sm:mx-4">
              <li>
                Práctica de emergencia Altona, Stresemannstraße 54, 22769
                Hamburgo
              </li>
              <li>
                Práctica de emergencia en el Bundeswehr Hospital Wandsbek,
                Lesserstraße 180, 22049 Hamburgo
              </li>
              <li>
                Horario: lunes, viernes, jueves y viernes de 19 a 24 h,
                miércoles de 13 a 24 h, sábados, domingos y festivos de 7 a 24 h
              </li>
            </ul>
            <p className="px-8 text-left pt-10 sm:px-24">
              También puede acudir a cualquier hospital público de urgencias.
              Puede encontrar una lista de hospitales de emergencia{" "}
              <a
                href="https://hospital.com/emergency"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-800 visited:text-purple-600"
              >
                aquí
              </a>
              .
            </p>

            <h2
              id="urgencias-dentales"
              className="mt-12 text-l sm:text-2xl font-heading uppercase sm:mt-20 mb-2"
            >
              Servicio de urgencias dentales
            </h2>
            <p className="px-8 text-left pt-10 sm:px-24">
              Buscador de servicios de emergencia de farmacia: 040 22833 o 0800
              00 22833 (llamada gratuita)
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Veneno llamada al 911
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              GIZ Norte 0551 19240
            </p>
            <h2
              id="violencia-contra-la-mujer"
              className="mt-12 text-l sm:text-xl font-heading uppercase sm:mt-20"
            >
              Llamada de emergencia violencia contra la mujer
            </h2>
            <p className="px-8 text-left pt-10 sm:px-24">
              Número de emergencia para mujeres y niñas violadas: 040 255566
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Línea de ayuda contra la violencia contra la mujer: 0800 116016
              (llamada gratuita)
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Refugios autónomos para mujeres en Hamburgo Llamada de emergencia
              (medianoche): 040 800041000 o fax 040 8000410019
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Llamada de emergencia Violencia y emergencias contra niñas o niños
              Urgencias infantil y juvenil: 040 428 15 32 00
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Hogar de niñas: 040 428 15 32 71
            </p>
            <h2
              id="otros"
              className="mt-12 text-l sm:text-2xl font-heading uppercase sm:mt-20"
            >
              Otros números de emergencia y servicios de emergencia
            </h2>
            <p className="px-8 text-left pt-10 sm:px-24">
              Teléfono de la víctima Weisser Ring: 116006 (llamada gratuita)
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Servicio de urgencias veterinarias: 040 434379
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Llamada de emergencia para animales heridos abandonados y animales
              salvajes enfermos: 040 222277
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Urgencias legales: 0171 6105949
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Llamada de emergencia de bloqueo de tarjeta: 116116 (llamada
              gratuita)
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Línea directa de extremismo de derecha (policía): 040 428676767
            </p>
            <h2
              id="adicciones"
              className="mt-12 text-l sm:text-2xl font-heading uppercase sm:mt-20"
            >
              Servicios de emergencia para adicciones
            </h2>
            <p className="px-8 text-left pt-10 sm:px-24">
              Teléfono de información sobre drogas de bienestar juvenil: 040
              28051107 (8 a 20 h) y (040) 2803204 (20 a 8 h)
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Consulta externa para adictos en la Clínica Asklepios Norte (Casa
              32 planta baja): 040 1818872524
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Alcohólicos Anónimos, Saarlandstrasse 9, 22303 Hamburgo: 040 19295
            </p>
            <p className="px-8 text-left pt-10 sm:px-24">
              Jugadores anónimos: 040 2099009
            </p>
          </div>
          <header className="text-center flex justify-center items-center p-4 sm:p-10">
            <Button>
              <Link href="/">Home</Link>
            </Button>
          </header>
        </main>
      </div>
    </>
  );
}
