import Image from "next/image";
import Landing from "./components/home/landing";
import ProjectShowcase from "./components/home/project-showcase";

export default function Home() {
  return (
    <main>
      <Landing/>
      <ProjectShowcase/>
    </main>
  );
}
