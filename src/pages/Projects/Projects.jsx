import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

// Import project images
import DrowsinessImg from "@/assets/images/projects/drowsiness.png";
import HospitalImg from "@/assets/images/projects/hospital.jpg";
import BrainImg from "@/assets/images/projects/brain.jpg";
import DashBoardImg from "@/assets/images/projects/DashBoard.png";  
import BistroImg from "@/assets/images/projects/bistro.jpg";

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
    githubLink: "https://github.com/SrimathiKumar01/Brain-Tumor-Detection",
    liveLink: "https://github.com/SrimathiKumar01/Brain-Tumor-Detection",
  },
  {
    title: "Bistro_Management",
    description:
      "A restaurant management system that streamlines order handling, menu management, and billing workflows. Built to simplify day-to-day operations with a clean, easy-to-use interface.",
    technologies: ["Java", "SQL", "Database"],
    category: "Web Application",
    filterCategory: "web",
    link: BistroImg,
    color: "#22c55e",
    githubLink: "https://github.com/SrimathiKumar01/Bistro-Management",
    liveLink: "https://github.com/SrimathiKumar01/Bistro-Management",
  },
  {
    title: " SIH Hospital Dashboard",
    description:
      "A comprehensive hospital dashboard UI design for efficient healthcare management. Features intuitive patient monitoring, appointment tracking, and medical data visualization. Designed for Smart India Hackathon with focus on usability and accessibility.",
    technologies: ["UI/UX Design", "Dashboard", "Healthcare", "SIH"],
    category: "Web Development",
    filterCategory: "web",
    link: DashBoardImg,
    color: "#f59e0b",
    githubLink: "https://github.com/SrimathiKumar01/sih_Hospital-Dashboard-UI-Design.git",
    liveLink: "https://github.com/SrimathiKumar01/sih_Hospital-Dashboard-UI-Design.git",
  },
];

const categories = [
  { id: "all", label: "All Projects", color: "gray" },
  { id: "ai", label: "AI & ML", color: "blue" },
  { id: "web", label: "Web Development", color: "purple" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.filterCategory === activeFilter);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="bg-slate-950 scroll-smooth min-h-screen pb-20" >
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <Card
                key={`p_${project.title}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                technologies={project.technologies}
                category={project.category}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            ))}
          </div>
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
  githubLink,
  liveLink,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
      className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl flex flex-col h-full group"
      style={{ 
        border: `1px solid ${color}40`,
        boxShadow: `0 0 15px ${color}15, 0 10px 40px rgba(0,0,0,0.5)`
      }}
    >
      {/* Image section */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={url}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Colored overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{ backgroundColor: color }}
        />

        {/* Category badge */}
        <div 
          className="absolute top-4 left-4 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border"
          style={{ backgroundColor: `${color}20`, borderColor: `${color}40` }}
        >
          {category}
        </div>

        {/* Project number */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-sm font-medium">
          0{i + 1}
        </div>
      </div>

      {/* Content section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-white mb-3">
            {title}
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Technology tags */}
          {technologies && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-xs rounded-full bg-gray-800/60 text-gray-300 border border-gray-700/50">
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Links section */}
        <div className="mt-5 pt-4 border-t border-gray-800/50">
          <div className="flex items-center justify-center gap-4">
            {/* GitHub Link */}
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all text-sm"
              style={{ 
                backgroundColor: `${color}30`,
                color: color,
                border: `1px solid ${color}50`
              }}
              whileHover={{ 
                backgroundColor: `${color}40`,
                scale: 1.05,
                transition: { duration: 0.2 } 
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>GitHub</span>
            </motion.a>

            {/* Live Link */}
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all text-sm"
              style={{ 
                backgroundColor: `${color}30`,
                color: color,
                border: `1px solid ${color}50`
              }}
              whileHover={{ 
                backgroundColor: `${color}40`,
                scale: 1.05,
                transition: { duration: 0.2 } 
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>Demo</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
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
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

