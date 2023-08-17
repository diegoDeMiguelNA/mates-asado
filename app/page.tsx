import { Button } from "./components/button/button";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ImageWrapper from "./components/imageWrapper/imageWrapper";
import HomeProps from "./components/home-icon/home-props";

export default async function Home() {

  return (
    <>
      <main className="text-center">
        <Header />
        <HomeProps />
        <div className="experiencias-de-vida mb-20">
          <ImageWrapper
            src="/images/rathaus-cut.webp"
            alt="hamburg Rathaus"
            width={500}
            height={500}
            divClassName="rathaus-cut"
          />
          <div className="h-72 bg-regular-grey flex flex-col px-16 py-10 justify-center items-center">
            <h3 className="text-s text-regular-red font-bold mb-4">
              Experiencias de vida
            </h3>
            <p className="text-xs font-light mb-4">
              Conocé relatos inspiradores de compatriotas en Hamburgo: desde
              valientes que montaron su propio negocio, hasta los que
              enfrentaron los desafíos del Führerschein y el trámite de
              Einbürgerung.
            </p>
            <Button
              className="bg-regular-red text-xxs rounded-full mt-4"
              size="customPill"
              style={{ color: "white" }}
            >
              Coming Soon
            </Button>
          </div>
        </div>
        <div className="about-us mb-20 flex flex-col px-16 py-6 justify-center items-center mb-20">
          <ImageWrapper
            src="/images/rainbow.webp"
            alt="Building with rainbow"
            width={270}
            height={500}
            divClassName="rainbow mb-10"
          />
          <h3 className="text-s text-regular-teal font-bold mb-4">
            Sobre Nosotros
          </h3>
          <p className="text-xs font-light mb-4">
            Somos hispanohablantes residentes en Hamburgo, trabajando ad honorem
            para brindar este espacio a nuestra comunidad. Todo comenzó con un
            grupo de WhatsApp de más de 500 miembros, donde nos asistimos y
            compartimos experiencias constantemente. ¡Bienvenidos a nuestro
            punto de encuentro!
          </p>
          <Button
            className="bg-regular-teal text-xxs rounded-full mt-4"
            size="customPill"
            style={{ color: "white" }}
          >
            Coming Soon
          </Button>{" "}
        </div>
        <Footer />
      </main>
    </>
  );
}
