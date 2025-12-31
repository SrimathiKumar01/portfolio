import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

// Import project images
import DrowsinessImg from "@/assets/images/projects/drowsiness.png";
import HospitalImg from "@/assets/images/projects/hospital.jpg";
import BrainImg from "@/assets/images/projects/brain.jpg";
import ArrivalImg from "@/assets/images/projects/arriva.png";

const projects = [
  {
    title: "Drowsiness Detection",
    description:
      "Uses computer vision and deep learning to detect driver drowsiness in real time. Analyzes eye and facial features from a webcam feed. When drowsiness is detected, triggers an alert to prevent accidents.",
    technologies: ["Python", "OpenCV", "Keras", "Real-time Processing"],
    category: "AI & Computer Vision",
    filterCategory: "ai",
    link: DrowsinessImg,
    color: "#5196fd",
    githubLink: "https://github.com/SrimathiKumar01/drowsy-detection.git",
    liveLink: "https://github.com/SrimathiKumar01/drowsy-detection.git",
  },
  {
    title: "Hospital Management System",
    description:
      "A web-based system to manage hospital operations efficiently. Features patient registration, appointment scheduling, and billing. Enables doctors and staff to access and update records securely.",
    technologies: ["Python", "Django", "Bootstrap", "PostgreSQL"],
    category: "Web Application",
    filterCategory: "web",
    link: HospitalImg,
    color: "#8f89ff",
    githubLink: "https://github.com/SrimathiKumar01/Hospital-Management-System.git",
    liveLink: "https://github.com/SrimathiKumar01/Hospital-Management-System.git",
  },
  {
    title: "Brain Tumor Detection",
    description:
      "Detects brain tumors from MRI images using image processing and AI. Automates tumor segmentation and classification for medical analysis. Improves diagnostic accuracy and supports radiologists in decision-making.",
    technologies: ["Python", "OpenCV", "Deep Learning", "TensorFlow"],
    category: "AI & Healthcare",
    filterCategory: "ai",
    link: BrainImg,
    color: "#10b981",
    githubLink: "https://github.com/SrimathiKumar01/bistro_managementt",
    liveLink: "https://github.com/SrimathiKumar01/bistro_managementt",
  },
  {
    title: "Arrival",
    description:
      "A modern web application for seamless event or product arrivals. Showcases real-time updates, notifications, and user-friendly dashboards. Responsive design ensures accessibility across all devices.",
    technologies: ["HTML", "CSS", "JavaScript", "Backend Integration"],
    category: "Web Development",
    filterCategory: "web",
    link: ArrivalImg,
    color: "#ed649e",
    githubLink: "#",
    liveLink: "#",
  },
];

const categories = [
  { id: "all", label: "All Projects", color: "gray" },
  { id: "ai", label: "AI & ML", color: "blue" },
  { id: "web", label: "Web Development", color: "purple" },
];

export default function Projects() {
  const container = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.filterCategory === activeFilter);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 60vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="bg-slate-950 scroll-smooth" ref={container}>
        {/* Projects Header - Added pt-20 to account for fixed header */}
        <section className="min-h-[35vh] flex items-center justify-center relative overflow-hidden pt-24 pb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 sm:left-20 w-32 sm:w-48 h-32 sm:h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 sm:right-20 w-28 sm:w-40 h-28 sm:h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
            >
              My Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-6"
            >
              From AI-powered solutions to web applications
            </motion.p>
            
            {/* Filter Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center gap-3 flex-wrap"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === cat.id
                      ? cat.id === "all"
                        ? "bg-white text-slate-900"
                        : cat.id === "ai"
                        ? "bg-blue-500 text-white"
                        : "bg-purple-500 text-white"
                      : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-gray-500"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Cards */}
        <section className="text-white w-full bg-slate-950">
          {filteredProjects.map((project, i) => {
            const targetScale = 1 - (filteredProjects.length - i) * 0.05;
            return (
              <Card
                key={`p_${project.title}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                technologies={project.technologies}
                category={project.category}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}


function Card({
  i,
  title,
  description,
  url,
  color,
  technologies,
  category,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[55vh] sm:h-[60vh] md:h-[65vh] flex items-center justify-center sticky top-14 sm:top-16 project-container px-4"
    >
      <motion.div
        style={{
          scale,
        }}
        className="relative h-auto w-full sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%] origin-top project-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        whileHover={{
          y: -3,
          transition: { duration: 0.15 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900/95 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl border border-gray-800/50">
          {/* Image section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] h-[160px] sm:h-[200px] md:h-[260px] lg:h-[300px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Category badge */}
            <div 
              className="absolute top-4 left-4 md:top-6 md:left-6 backdrop-blur-md text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border"
              style={{ backgroundColor: `${color}20`, borderColor: `${color}40` }}
            >
              {category}
            </div>

            {/* Project number */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
              0{i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-10 sm:w-16" style={{ backgroundColor: color }} />
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                {title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-3 sm:line-clamp-none">
                {description}
              </p>

              {/* Technology tags */}
              {technologies && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 sm:mt-6 md:mt-auto pt-3 sm:pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-6">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    View Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live Demo
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  technologies: PropTypes.array,
  category: PropTypes.string,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

