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
        <div className="experiencias-de-vida mb-16">
          <div className="inset-0 bg-cover bg-center h-[80px] md:h-[140px] bg-[url('/images/rathaus-cut.webp')]" />
          <div className="h-72 bg-regular-grey flex flex-col px-16 py-10 justify-center items-center">
            <h3 className="text-s md:text-xl text-regular-red font-bold mb-4">
              Experiencias de vida
            </h3>
            <p className="text-xs md:text-sm md:px-6 font-light mb-4">
              Conocé relatos inspiradores de compatriotas en Hamburgo: desde
              valientes que montaron su propio negocio, hasta los que
              enfrentaron los desafíos del Führerschein y el trámite de
              Einbürgerung.
            </p>
            <Button
              className="bg-regular-red text-xxs md:text-xs rounded-full mt-4"
              size="customPill"
              style={{ color: "white" }}
            >
              Coming Soon
            </Button>
          </div>
        </div>
        <div className="about-us mb-16 flex flex-col px-16 py-6 justify-center items-center mb-20">
        <div className="inset-0 bg-cover bg-center h-[120px] md:h-[210px] w-[500px] rounded-2xl bg-[url('/images/rainbow.webp')]" />
          <h3 className="text-s md:text-xl text-regular-teal font-bold mb-4 mt-12">
            Sobre Nosotros
          </h3>
          <p className="text-xs md:text-sm md:px-6 font-light mb-4">
            Somos hispanohablantes residentes en Hamburgo, trabajando ad honorem
            para brindar este espacio a nuestra comunidad. Todo comenzó con un
            grupo de WhatsApp de más de 500 miembros, donde nos asistimos y
            compartimos experiencias constantemente. ¡Bienvenidos a nuestro
            punto de encuentro!
          </p>
          <Button
             className="bg-regular-teal text-xxs md:text-xs rounded-full mt-4"
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
