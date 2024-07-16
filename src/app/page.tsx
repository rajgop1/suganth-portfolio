import Image from "next/image";
import Landing from "./components/home/landing";
import ProjectShowcase from "./components/home/project-showcase";
import PortfolioAndUxDesign from "./components/home/portfolio-and-ux-design";
import LetsGoForTea from "./components/home/lets-go-for-tea";
import Email from "./components/home/email";
import Footer from "./components/common/Footer";
import { getHomePageGridCard } from "@/network-calls/api";
import { HomePageGridCard } from "@/interface/api-interface";

export default async function Home() {

  const result:any = await getHomePageGridCard()
  const gridCard: HomePageGridCard = result

  return (
    <main className="bg-black-100 ">
      <Landing />
      <ProjectShowcase homePageGridCard={gridCard}/>
      <PortfolioAndUxDesign/>
      <LetsGoForTea/>
      <Email/>
      <Footer/>
    </main>
  );
}
