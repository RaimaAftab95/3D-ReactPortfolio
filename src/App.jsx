import NavBar from "./components/NavBar";
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
    </>
  );
};

export default App;
