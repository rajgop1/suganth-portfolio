import Image from "next/image";
import Landing from "./components/home/landing";
import ProjectShowcase from "./components/home/project-showcase";
import PortfolioAndUxDesign from "./components/home/portfolio-and-ux-design";
import LetsGoForTea from "./components/home/lets-go-for-tea";
import Email from "./components/home/email";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <ProjectShowcase />
      <PortfolioAndUxDesign/>
      <LetsGoForTea/>
      <Email/>
    </main>
  );
}
