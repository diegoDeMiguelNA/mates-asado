import {
  getAsset,
  getHomeIcons,
} from "@/lib/contentful/fetchDataFromContentful";
import HeaderHome from "./components/header/headerHome";
import AboutUs from "./components/homePageComponents/AboutUs";
import ExperienciasDeVida from "./components/homePageComponents/ExperienciasDeVida";
import HomeProps from "./components/homePageComponents/home-props";
import Novedades from "./novedades/novedades";

export default async function Home() {
  const {
    fields: { homeIconComponent },
  } = await getHomeIcons();

  const { fields } = await getAsset("1SsCd0t1OAuqBzCgDVK2VJ");
  console.log(fields);

  return (
    <>
      <HeaderHome />
      <div className="homePage text-center flex flex-col items-center">
        <HomeProps navigationElements={homeIconComponent} />

        <Novedades fields={fields} />

        <ExperienciasDeVida />

        <AboutUs />
      </div>
    </>
  );
}
