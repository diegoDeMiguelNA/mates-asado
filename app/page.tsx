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

  let fields;

  try {
    const assetData = await getAsset("1SsCd0t1OAuqBzCgDVK2VJ");
    fields = assetData.fields;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return (
    <>
      <HeaderHome />
      <div className="homePage text-center flex flex-col items-center">
        <HomeProps navigationElements={homeIconComponent} />

        {fields && <Novedades fields={fields} />}

        <ExperienciasDeVida />

        <AboutUs />
      </div>
    </>
  );
}
