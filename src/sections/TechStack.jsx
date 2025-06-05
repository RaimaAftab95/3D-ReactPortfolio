import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants/index.js";
import TechIcon from "../components/Models/TechLogos/TechIcon.jsx";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="rainbow-border xl:rounded-full rounded-lg p-[2px]"
            >
              <div className="card-border tech-card relative overflow-hidden group w-full h-full xl:rounded-full rounded-lg">
                <div className="tech-card-animated-bg" />
                <div className="tech-card-content relative z-10">
                  <div className="tech-icon-wrapper">
                    <TechIcon model={icon} />
                  </div>

                  <div>
                    <p className="text-xs text-amber-400 -mt-6">{icon.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
