import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const LearningShowcase = () => {
  const sectionRef = useRef(null);
  const shopperRef = useRef(null);
  const outworkxRef = useRef(null);
  const growXRef = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);
  const project6Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      shopperRef.current,
      outworkxRef.current,
      growXRef.current,
      project4Ref.current,
      project5Ref.current,
      project6Ref.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader title="Learning Projects" sub="🧑‍💻Built While Learning" />
        <div className="showcaselayout mt-10">
          <div ref={shopperRef} className="first-project-wrapper">
            <a
              href="https://raimaaftab95.github.io/webpagelayout/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-wrapper block"
            >
              <img src="/images/project-7.png" alt="Back to Yourself" />
            </a>
            <div className="text-content">
              <h2>Back to Yourself</h2>
              <p className="text-white-50 md:text-xl">
                A Fully Responsive and Professional Landing Page
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={outworkxRef}>
              <a
                href="https://site-of-vanlife.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper block"
              >
                <img src="/images/project-8.png" alt="VanLife" />
              </a>
              <h2>
                Van-life — A React Router 6 project featuring dynamic van type
                filtering.
              </h2>
            </div>

            <div className="project" ref={growXRef}>
              <a
                href="https://drive.google.com/file/d/1EKJ1TFfBHeuSpvaTvr29bYpP7jZ0ZTnf/view"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper bg-[#FFEFDB] block"
              >
                <img src="/images/project-9.png" alt="Admin Dashboard" />
              </a>
              <h2>Responsive Admin Dashboard built with React and Bootstrap</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningShowcase;
