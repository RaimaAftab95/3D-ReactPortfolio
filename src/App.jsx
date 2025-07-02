import NavBar from "./components/NavBar";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import ProfessionalShowCase from "./sections/ProfessionalShowCase";
import PracticeShowCase from "./sections/PracticeShowCase";
import LearningShowCase from "./sections/LearningShowCase";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ProfessionalShowCase />
      <PracticeShowCase />
      <LearningShowCase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
    </>
  );
};

export default App;
