import Image from "next/image";
import Landing from "./components/home/landing";
import ProjectShowcase from "./components/home/project-showcase";
import PortfolioAndUxDesign from "./components/home/portfolio-and-ux-design";
import LetsGoForTea from "./components/home/lets-go-for-tea";
import Email from "./components/home/email";
import Footer from "./components/common/Footer";
import { getHomePageGridCard, getSinglePortfolios } from "@/network-calls/api";
import { HomePageGridCard, SinglePortfolioPageSchema } from "@/interface/api-interface";

export default async function Home() {

  const result:any = await getHomePageGridCard()
  const gridCard: HomePageGridCard = result

  const resultSinglePortfolio:any = await getSinglePortfolios()
  const singlePortflio:SinglePortfolioPageSchema = resultSinglePortfolio


  return (
    <main className="bg-black-100 ">
      <Landing />
      <ProjectShowcase homePageGridCard={gridCard} numberOfProjects={singlePortflio.data.length}/>
      <PortfolioAndUxDesign singlePortfolio={singlePortflio}/>
      <LetsGoForTea/>
      <Email/>
      <Footer/>
    </main>
  );
}
