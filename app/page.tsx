import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HomeProps from "./components/homePageComponents/home-props";
import ExperienciasDeVida from "./components/homePageComponents/ExperienciasDeVida";
import AboutUs from "./components/homePageComponents/AboutUs";
import { Entry } from "contentful";
import { IHomeIconResuableFields } from "@/@types/generated/contentful";
import { getHomeIcons } from "@/lib/contentful/fetchDataFromContentful";

export default async function Home() {
  return (
    <>
      <main className="text-center flex flex-col items-center">
        <Header />

        <HomeProps />

        <ExperienciasDeVida />

        <AboutUs />
       
        <Footer />

      </main>
    </>
  );
}
