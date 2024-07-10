import Image from "next/image";
import Landing from "./components/home/landing";
import ProjectShowcase from "./components/home/project-showcase";
import PortfolioAndUxDesign from "./components/home/portfolio-and-ux-design";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <ProjectShowcase />
      <PortfolioAndUxDesign/>
    </main>
  );
}
