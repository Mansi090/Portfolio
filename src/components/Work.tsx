import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    number: "01",
    title: "Portfolio Website",
    category: "Web Development",
    tools: "React, CSS, GSAP, HTML",
    image: "/images/portfolio.webp",
  },
  {
    number: "02",
    title: "E-commerce App",
    category: "Full Stack Development",
    tools: "Next.js, Node.js, MongoDB",
    image: "/images/ecommerce.webp",
  },
  {
    number: "03",
    title: "Interactive Dashboard",
    category: "Data Visualization",
    tools: "D3.js, React, Tailwind CSS",
    image: "/images/dashboard.webp",
  },
  {
    number: "04",
    title: "Machine Learning Project",
    category: "Data Science",
    tools: "Python, TensorFlow, Scikit-Learn",
    image: "/images/mlproject.webp",
  },
  {
    number: "05",
    title: "Mobile App Prototype",
    category: "UI/UX Design",
    tools: "Figma, React Native",
    image: "/images/mobileapp.webp",
  },
  {
    number: "06",
    title: "Open Source Contribution",
    category: "Community Projects",
    tools: "TypeScript, Node.js, GitHub",
    image: "/images/opensource.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.number}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools & Technologies</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
