import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ProfessionalShowcase = () => {
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
        <TitleHeader title="Professional Projects" sub="🧑‍💼 Real-World Work" />
        <div className="showcaselayout mt-10">
          <div ref={shopperRef} className="first-project-wrapper">
            <a
              href="https://zenkly-update.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-wrapper block"
            >
              <img src="/images/project-4.png" alt="Zenkly App" />
            </a>
            <div className="text-content">
              <h2>
                Zenkly– AI-Powered Idea Generation & Project Management Tool
              </h2>
              <p className="text-white-50 md:text-xl">
                A modern, responsive React application built with Vite and
                Tailwind CSS, Zenkly Live empowers users to generate, manage,
                and save project or blog ideas. It features custom
                authentication, guided idea generation flows, and a clean,
                modular code structure. Deployed on Vercel for seamless
                performance.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={outworkxRef}>
              {/* <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project-2.png"
                  alt="Coworking Space Platform"
                />
              </div> */}

              <a
                href="https://outworkx.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper block"
              >
                <img
                  src="/images/project-2.png"
                  alt="Coworking Space Platform"
                />
              </a>

              <h2>
                Airbnb-Inspired Coworking Space Platform with Booking &
                Authentication Features
              </h2>
            </div>

            <div className="project" ref={growXRef}>
              <a
                href="https://github.com/RaimaAftab95/Growx/issues/1"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper block"
              >
                <img
                  src="/images/project-3.png"
                  alt="Web3-Enabled NFT Platform"
                />
              </a>
              <h2>
                Web3-Enabled NFT Platform with Wallet Integration & Secure
                Authentication (MERN + Docker)
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalShowcase;
