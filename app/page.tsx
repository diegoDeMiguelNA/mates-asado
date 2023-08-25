import { Button } from "./components/button/button";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import ImageWrapper from "./components/imageWrapper/imageWrapper";
import HomeProps from "./components/home-icon/home-props";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <main className="text-center flex flex-col items-center">
        <Header />

        <HomeProps />

        <div className="experiencias-de-vida mb-16 w-full flex">
          <section className="relative h-[200px] md:h-[300px] lg:hidden">
            <Image
              src="/images/rathaus-full.webp"
              alt="Rathaus"
              fill
              style={{objectFit:"cover"}}
            />
          </section>

          <div className="lg:grid lg:grid-cols-2 md:flex md:justify-center md:h-[350px] lg:h-[720px] bg-regular-grey px-16 py-10 items-center lg:px-12 w-full flex">
            <section className="relative hidden lg:block lg:h-[600px] lg:w-[500px]">
              <Image
                src="/images/rathaus-full.webp"
                alt="Rathaus"
                fill
                style={{objectFit:"cover", objectPosition:"bottom"}}
              />
            </section>

            <div className="flex flex-col items-center lg:items-center justify-center space-y-4">
              <h3 className="text-s md:text-xl text-regular-red font-bold">
                Experiencias de vida
              </h3>
              <p
                className="text-s md:text-sm md:px-6 md:py-6 font-light max-w-[650px]"
                style={{ lineHeight: "1.5rem" }}
              >
                Conocé relatos inspiradores de compatriotas en Hamburgo: desde
                valientes que montaron su propio negocio, hasta los que
                enfrentaron los desafíos del Führerschein y el trámite de
                Einbürgerung.
              </p>
              <Button
                className="bg-regular-red text-xxs md:text-xs lg:text-[12px] rounded-full mt-4"
                size="customPill"
                style={{ color: "white" }}
              >
                Coming Soon
              </Button>
            </div>
          </div>
        </div>

        <div className="about-us mb-16 flex flex-col px-16 py-6 justify-center items-center mb-20 lg:mb-[160px] lg:pt-[120px]">
          <div className="relative h-[130px] w-[290px] md:w-[500px] md:h-[210px] lg:w-[850px] md:h-[410px] rounded-2xl overflow-hidden">
            <Image
              src="/images/rainbow.webp"
              alt="Rainbow"
              fill
              style={{objectFit:"cover"}}
            />
          </div>
          <h3 className="text-s md:text-xl text-regular-teal font-bold mb-4 mt-12 lg:mt-16">
            Sobre Nosotros
          </h3>
          <p
            className="text-s md:text-sm md:px-6 font-light mb-4 max-w-[800px]"
            style={{ lineHeight: "1.5rem" }}
          >
            Somos hispanohablantes residentes en Hamburgo, trabajando ad honorem
            para brindar este espacio a nuestra comunidad. Todo comenzó con un
            grupo de WhatsApp de más de 500 miembros, donde nos asistimos y
            compartimos experiencias constantemente. ¡Bienvenidos a nuestro
            punto de encuentro!
          </p>
          <Button
            className="bg-regular-teal text-xxs md:text-xs lg:text-[12px] rounded-full mt-4"
            size="customPill"
            style={{ color: "white" }}
          >
            Coming Soon
          </Button>
        </div>
        <Footer />
      </main>
    </>
  );
}
