import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import HeaderHome from "./components/header/headerHome";
import AboutUs from "./components/homePageComponents/AboutUs";
import Elecciones from "./components/homePageComponents/EleccionesPresidencaiales";
import ExperienciasDeVida from "./components/homePageComponents/ExperienciasDeVida";
import Feriados from "./components/homePageComponents/Feriados";
import HomeProps from "./components/homePageComponents/home-props";

export default async function Home() {
  const navigationElements = await getHomeIcons();

  return (
    <>
      <HeaderHome />
      <div className="homePage min-h-screen text-center flex flex-col items-center">
        <HomeProps navigationElements={navigationElements} />

        <Elecciones />

        <Feriados />

        <ExperienciasDeVida />

        <AboutUs />
      </div>
    </>
  );
}
