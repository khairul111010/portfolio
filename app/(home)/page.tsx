import BackgroundImage from "./components/BackgroundImage";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Topbar from "./components/Topbar";
import Topcard from "./components/Topcard";

export default function Home() {
  return (
    <>
      <Topbar />
      <Topcard />
      <BackgroundImage />
      <Experience />
      <Project />
      {/* <Footer /> */}
    </>
  );
}
