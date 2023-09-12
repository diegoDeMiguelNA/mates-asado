import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";
import HeaderHome from "./components/header/headerHome";
import AboutUs from "./components/homePageComponents/AboutUs";
import ExperienciasDeVida from "./components/homePageComponents/ExperienciasDeVida";
import HomeProps from "./components/homePageComponents/home-props";

export default async function Home() {
  const {
    fields: { homeIconComponent },
  } = await getHomeIcons();

  return (
    <>
      <HeaderHome />
      <div className="homePage text-center flex flex-col items-center">
        <HomeProps navigationElements={homeIconComponent} />

        <ExperienciasDeVida />

        <AboutUs />
      </div>
    </>
  );
}
