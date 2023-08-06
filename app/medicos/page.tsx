import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button/button";

export default function Medicos() {
  const data = [
    {
      Especialidad: "General",
      Nombre:
        "Dr. med Stefan Siemund-Konert\n Dr. med. Sandra Martinez-Stoltenberg",
      Direccion: "Plattenfoort 2 22159 Hamburg",
      Telefono: "040 – 6 44 87 48",
      "Mail o website": "praxissiemund@web.de",
      Idioma: "Ingles",
    },
    {
      Especialidad: "Ortopäden",
      Nombre: "Dr. Rose und Dr. Koch",
      Direccion: "Julius-Leber-Straße 10. 22765 Hamburg",
      Telefono: "040 - 380 68 28",
      "Mail o website": "praxis@orthopaeden-altona.de",
      Idioma: "Ingles",
    },
    {
      Especialidad: "General",
      Nombre: "Beatriz Cañas de Sandberger",
      Direccion: "Burmesterstrasse 2, 22305 Hamburg",
      Telefono: "49 (0) 40 294165",
      "Mail o website": "www.hamburg-tropenmedizin.de/",
      Idioma: "Ingles y español",
    },
    {
      Especialidad: "Psiquiatría",
      Nombre: "Dr. Michael Brune",
      Direccion: "Seewartenstrasse 10 20459 Hamburg",
      Telefono: "4043099075",
      "Mail o website": "http://www.gzstpauli.de/",
      Idioma: "Español",
    },
    {
      Especialidad: "Dentista",
      Nombre: "Danny Bohne",
      Direccion: "Johannisbollwerk 20, 20459 Hamburg",
      Telefono: "040 43184810",
      "Mail o website": "https://www.zahnarztpraxis-danny-bohne.de/",
      Idioma: "Español",
    },
    {
      Especialidad: "General",
      Nombre: "Katrin Wierecky",
      Direccion: "Speersort 8, 20095 Hamburgo",
      Telefono: "040 3 57 17 77 - 40\n040 33 55 60",
      "Mail o website": "https://www.arzt-auskunft.de",
      Idioma: "Español",
    },
    {
      Especialidad: "Ginecologia",
      Nombre: "Elisenda Laborda",
      Direccion: "Isestraße 63, 20149 Hamburg",
      Telefono: "4940483008",
      "Mail o website": "https://frauenarztpraxis-isestrasse.business.site/",
      Idioma: "Español",
    },
    {
      Especialidad: "Ginecologia",
      Nombre: "Sabine Ehrentreich",
      Direccion: "Jakobikirchhof 8, 20095 Hamburg",
      Telefono: "40324931",
      "Mail o website": "http://www.ganzheitlichefrauenheilkunde.de/",
      Idioma: "Ingles",
    },
    {
      Especialidad: "General",
      Nombre: "Heiko Marn",
      Direccion: "Ottenser Hauptstrasse 1a 22765 Hamburgo",
      Telefono: "040 39 80 86 61",
      "Mail o website": "www.praxis-heiko-marn.de",
      Idioma: "Ingles y español",
    },
    {
      Especialidad: "General",
      Nombre: "Joneth Mayorca",
      Direccion: "Washingtonallee 14A, 22111 Hamburg",
      Telefono: "040 55643224",
      "Mail o website":
        "https://www.doctolib.de/allgemeinmedizin/hamburg/joneth-mayorca-hamburg",
      Idioma: "Español",
    },
    {
      Especialidad: "Oftalmología",
      Nombre: "Paula Zotter",
      Direccion: "Nordschieswigerstraße 68, 22049 Hamburg",
      Telefono: "406829061",
      "Mail o website": "www.artemiskliniken.de",
      Idioma: "español",
    },
    {
      Especialidad: "Dermatología",
      Nombre: "Friederike Wagner",
      Direccion: "Stephansplatz 5, 20354 Hamburg",
      Telefono: "040-35 10 75-0",
      "Mail o website": "info@dermatologikum.de",
      Idioma: "Ingles y español",
    },
    {
      Especialidad: "Urologia",
      Nombre: "Gilberto Coxilha",
      Direccion: "Hoheluftchaussee 18 Hamburg-Nord, 20253 Hamburg",
      Telefono: "0 40 - 4134 999 0",
      "Mail o website": "https://www.uro-medic.de/praxis/eindruecke/",
      Idioma: "Ingles",
    },
    {
      Especialidad: "Urologia",
      Nombre: "Jörg Sablotny",
      Direccion: "Tibarg 7-9, 22459 Hamburg",
      Telefono: "040 – 584343",
      "Mail o website":
        "https://www.doctolib.de/urologie/hamburg/joerg-sablotny?pid=practice-422663",
      Idioma: "Ingles",
    },
    {
      Especialidad: "Otorrino",
      Nombre: "Dr. med. S. Girlich",
      Direccion: "Osterstrasse 126, 20255 Hamburg",
      Telefono: "040 - 4917474\n040 - 4910081\n040 - 757757",
      "Mail o website": "http://www.hno-osterstrasse.de/index.html",
      Idioma: "Ingles",
    },
    {
      Especialidad: "Ortopäden",
      Nombre: "Karsten Christesen",
      Direccion: "Rothenbaumchaussee 71, 20148 Hamburg",
      Telefono: "040 45 53 11",
      "Mail o website": "https://www.praxis-rotherbaum-hamburg.de/",
      Idioma: "Ingles",
    },
  ];

  return (
    <>
      <header className="text-center flex justify-center items-center p-4 sm:p-10">
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </header>
      <div className="max-w-7xl mx-auto">
        <main className="text-center sm:px-10 mb-8 sm:mb-24 mx-2 sm:mx-24">
          <div className="pt-12 py-12">
            <h1 className="text-2xl sm:text-5xl font-heading uppercase">
              Médicos en Hamburgo
            </h1>
          </div>
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 text-left">Especialidad</th>
                <th className="py-2 px-4 text-left">Nombre</th>
                <th className="py-2 px-4 text-left">Dirección</th>
                <th className="py-2 px-4 text-left">Teléfono</th>
                <th className="py-2 px-4 text-left">Mail o website</th>
                <th className="py-2 px-4 text-left">Idioma</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="py-2 px-4">{row.Especialidad}</td>
                  <td className="py-2 px-4">{row.Nombre}</td>
                  <td className="py-2 px-4">{row.Direccion}</td>
                  <td className="py-2 px-4">{row.Telefono}</td>
                  <td className="py-2 px-4">
                    <a
                      className="underline break-all"
                      href={row["Mail o website"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row["Mail o website"]}
                    </a>
                  </td>
                  <td className="py-2 px-4">{row.Idioma}</td>
                </tr>
              ))}
            </tbody>
          </table>

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
