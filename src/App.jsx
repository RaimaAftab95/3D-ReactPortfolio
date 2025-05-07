import NavBar from "./components/NavBar";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import ShowCase from "./sections/ShowCase";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
    </>
  );
};

export default App;
