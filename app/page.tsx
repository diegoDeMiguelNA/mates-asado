import { Button } from "./components/button/button";
import Header from "./components/header/header";
import HomeIcon from "./components/home-icon/home-icon";
import ImageWrapper from "./components/imageWrapper/imageWrapper";

export default function Home() {
  return (
    <>
      <main className="text-center">
        <Header />
        <div className="iconWrapper my-14 md:py-24 grid gap-8 md:gap-40 grid-cols-1 md:grid-cols-3 grid-rows-3 px-4 md:px-12">
          <HomeIcon
            iconSrc="./icons/document.svg"
            title="An-, Um- y Abmeldung"
            description=" Informacion sobre el registro de domicilio en Alemania."
            linkTo="/pages/anmeldung"
            contentfulReference="referenceIdForAnmeldungFromContentful"
          />
          <HomeIcon
            iconSrc="./icons/driving-license.svg"
            title="Führerschein"
            description="Como tramitar la licencia de conducir en Alemania"
            linkTo="/pages/fuehrerschein"
            contentfulReference="referenceIdForAnmeldungFromContentful"
          />
          <HomeIcon
            iconSrc="./icons/house.svg"
            title="Wohnungssuche"
            description="Busqueda de departamento/WG + como prevenir estafas"
            linkTo="/pages/wohnungssuche"
            contentfulReference="referenceIdForAnmeldungFromContentful"
          />
          <HomeIcon
            iconSrc="./icons/mate.svg"
            title="  Productos Latinos"
            description="  Donde comprar productos latinos en Hamburgo + Online"
            linkTo="/pages/productos-latinos"
            contentfulReference="referenceIdForAnmeldungFromContentful"
          />
          <HomeIcon
            iconSrc="./icons/phone.svg"
            title="Teléfonos Útiles"
            description="  Guia de teléfonos útiles para inmigrantes en Hamburgo"
            linkTo="/pages/telefonos-utiles"
            contentfulReference="referenceIdForAnmeldungFromContentful"
          />
          <HomeIcon
            iconSrc="./icons/train.svg"
            title="Deutschland Ticket"
            description="Información sobre el Deutschlandticket"
            linkTo="/pages/deutschlandticket"
            contentfulReference="referenceIdForAnmeldungFromContentful"
          />
          <HomeIcon
            iconSrc="./icons/stethoscope.svg"
            title="Médicos en Hamburgo"
            description="Info sobre médicos que hablan español o inglés."
            linkTo="/pages/medicos"
            contentfulReference="referenceIdForAnmeldungFromContentful"
          />
        </div>
        <div className="experiencias-de-vida mb-20">
          <ImageWrapper
            src="/images/rathaus-cut.webp"
            alt="Description"
            width={500}
            height={500}
            divClassName="rathaus-cut"
          />
          <div className="h-68 bg-F4F4F4 flex flex-col p-14">
            <h3 className="text-s text-B1060E font-bold mb-4">
              Experiencias de vida
            </h3>
            <p className="text-xs font-light mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus veritatis at nihil nisi qui corrupti possimus
              suscipit, tenetur saepe numquam accusamus excepturi quam!
              Repudiandae, animi accusamus? Deserunt maiores enim quidem!
            </p>
            <Button className="bg-B1060E text-white rounded-full">
              Coming Soon
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
