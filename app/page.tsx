import HomeProps from "./components/homePageComponents/home-props";
import ExperienciasDeVida from "./components/homePageComponents/ExperienciasDeVida";
import AboutUs from "./components/homePageComponents/AboutUs";
import { Entry } from "contentful";
import { IHomeIconResuableFields } from "@/@types/generated/contentful";
import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";


export default async function Home() {
  const {
    fields: { homeIconComponent },
  }: Entry<IHomeIconResuableFields> = await getHomeIcons();

  return (
    <div className="homePage text-center flex flex-col items-center">
      <HomeProps navigationElements={homeIconComponent} />

      <ExperienciasDeVida />

      <AboutUs />
    </div>
  );
}
