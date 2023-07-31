import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DeutschlandTicket() {
  return (
    <>
      <header className="text-center flex justify-center items-center p-10">
        <Button>
          <Link href="/">Home/Inicio</Link>
        </Button>
      </header>

      <main className="text-center px-20 mb-24 mx-24">
        <h1 className="text-5xl font-heading uppercase mt-12">Deutschland Ticket</h1>

        <div className="py-8 px-24">
          <h2 className="text-3xl font-heading uppercase m-12">Precio</h2>
          <p>
            Su hvv Deutschlandticket cuesta 49,00 € al mes. En el hvv puede
            comenzar de manera flexible y pagar a prorrata en el primer mes.
          </p>
        </div>

        <div className="py-8 px-24">
          <h2 className="text-3xl font-heading uppercase mb-12">
            Periodo de validez
          </h2>
          <p>
            Puede cancelar el hvv Deutschlandticket mensualmente (antes del día
            10 del mes en curso en cuestión). De lo contrario, su
            Deutschlandticket se renovará automáticamente por otro mes.
          </p>
        </div>

        <div className="py-8 px-24">
          <h2 className="text-3xl font-heading uppercase mb-12">Validez</h2>
          <p>
            El hvv Deutschlandticket es válido para viajar en 2ª clase sin
            restricciones de tiempo. El billete no es válido en trenes de larga
            distancia (IC, EC, ICE).
          </p>
          <p>
            Puedes conseguir un upgrade a 1ª clase por 47,20 € (a partir del
            05/01/2023) al mes por ejemplo en la App o en las máquinas
            expendedoras de billetes.
          </p>
        </div>

        <div className="py-8 px-24">
          <h2 className="text-3xl font-heading uppercase mb-12">
            Intransferible, llevar contigo a otros, perros y bicicletas
          </h2>
          <p>
            Su hvv Deutschlandticket solo es válido para una persona. Los niños
            de hasta 6 años todavía pueden viajar gratis.
          </p>
          <p>
            También en hvv: si compras un billete adicional por 15,00 €, 1
            persona y 3 niños (de 6 a 14 años) pueden acompañarte en toda la red
            de hvv de forma gratuita los sábados, domingos y festivos, así como
            en Nochebuena. y Nochevieja. Este Weekend+ Ticket es válido durante
            un mes natural a la vez y está disponible, por ejemplo, en la
            aplicación hvv switch o en las máquinas expendedoras de billetes.
          </p>
          <p>
            Puede llevar su bicicleta a bordo de forma gratuita de lunes a
            viernes fuera de las horas punta (de 6 a 9 horas, de 16 a 18 horas),
            así como los fines de semana y festivos durante todo el día. Los
            perros se pueden llevar a bordo de forma gratuita en cualquier
            momento.
          </p>
        </div>
      </main>
    </>
  );
}
