import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const PracticeShowcase = () => {
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
        <TitleHeader
          title="Practice Projects"
          sub="🧬My Experiments & Growth"
        />
        <div className="showcaselayout mt-10">
          <div ref={shopperRef} className="first-project-wrapper">
            <a
              href="https://full-stack-ecommerce-project-psi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="image-wrapper block"
            >
              <img src="/images/project-1.png" alt="Fullstack E-commerce App" />
            </a>
            <div className="text-content">
              <h2>
                Feature-Rich E-commerce App with Admin Dashboard & Real-Time
                Cart Management (MERN Stack)
              </h2>
              <p className="text-white-50 md:text-xl">
                A MERN stack e-commerce web app with a responsive React
                frontend, product listings, cart, and backend-ready
                architecture. <br />
                Live Link to admin Panel
                <br />
                <a
                  href="https://ecommerce-fullstack-9h7swtlef-raima-aftabs-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  Admin Dashboard
                </a>
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={outworkxRef}>
              <a
                href="https://boshop-ecommercesite.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper block"
              >
                <img src="/images/project-5.png" alt="BOSHOP Ecommerce" />
              </a>
              <h2>
                BOSHOP A React-based ecommerce web app built with
                React-Bootstrap, Bootstrap, and Redux Toolkit.
              </h2>
              {/* <p>
                Features include product listing, user authentication
                (login/logout), and a fully functional shopping cart with
                add-to-cart capability for seamless user shopping experience.
              </p> */}
            </div>

            <div className="project" ref={growXRef}>
              <a
                href="https://raimaaftab95.github.io/finate-website/"
                target="_blank"
                rel="noopener noreferrer"
                className="image-wrapper block"
              >
                <img src="/images/project-6.png" alt="Finate Website" />
              </a>
              <h2>
                Finate Website Responsive 5-page site with Bootstrap and CSS
                animations.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeShowcase;
