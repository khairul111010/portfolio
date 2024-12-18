import BackgroundImage from "./components/BackgroundImage";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import Topcard from "./components/Topcard";

export default function Home() {
  return (
    <>
      <Topbar />
      <Topcard />
      <BackgroundImage />
      <Footer />
    </>
  );
}
