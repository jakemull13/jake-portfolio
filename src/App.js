import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";

// Example data (replace with your real info)
const navItems = [
  { id: "about", label: "About", icon: <span>👤</span> },
  { id: "experience", label: "Experience", icon: <span>💼</span> },
  { id: "skills", label: "Skills", icon: <span>🛠️</span> },
  { id: "projects", label: "Projects", icon: <span>📂</span> },
];

const experience = [
  {
    title: "Senior Data Engineer",
    company: "Acme Corp",
    location: "Remote",
    period: "2022–Present",
    highlights: [
      "Built scalable ETL pipelines with Airflow and dbt.",
      "Migrated legacy data warehouse to Snowflake.",
      "Led cross-functional data projects with product and analytics teams.",
    ],
  },
  {
    title: "Data Engineer",
    company: "DataWorks",
    location: "New York, NY",
    period: "2019–2022",
    highlights: [
      "Automated reporting workflows using Python and SQL.",
      "Integrated AWS and GCP data sources.",
      "Mentored junior engineers and interns.",
    ],
  },
];

const skills = {
  "Languages": ["Python", "SQL", "JavaScript"],
  "Data Tools": ["dbt", "Airflow", "Snowflake", "BigQuery", "Pandas"],
  "Cloud": ["AWS", "GCP", "Docker"],
  "Visualization": ["Tableau", "Metabase", "Power BI"],
};

const projects = [
  {
    title: "Modern Data Platform",
    description: "Designed and deployed a cloud-native data platform using dbt, Airflow, and Snowflake.",
    tech: ["dbt", "Airflow", "Snowflake", "AWS"],
    github: "https://github.com/jakemull13/modern-data-platform",
  },
  {
    title: "Streaming Analytics Pipeline",
    description: "Built a real-time analytics pipeline for IoT data using Kafka and BigQuery.",
    tech: ["Kafka", "BigQuery", "Python"],
    github: "https://github.com/jakemull13/streaming-analytics",
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-blue-700/30 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-blue-400 tracking-wide">Jake Mullins</div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-300 hover:text-blue-400 hover:bg-slate-800"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <img
              src="/avatar.png"
              alt="Jake Mullins"
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-6"
              onError={e => { e.target.style.display = 'none'; }} // hides if no avatar
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
              Data Engineer
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl text-center">
              Building scalable data products and pipelines that power business-critical decisions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-slate-400">
                <MapPin size={18} />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <Phone size={18} />
                <span>770.402.8705</span>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:jake.c.mullins@icloud.com"
                className="flex items-center space-x-2 bg-slate-800 hover:bg-blue-700 px-6 py-3 rounded-lg shadow transition-all"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow transition-all"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.github.com/jakemull13"
                className="flex items-center space-x-2 bg-slate-800 hover:bg-blue-700 px-6 py-3 rounded-lg shadow transition-all"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Section Selector for mobile */}
        <div className="flex md:hidden justify-center space-x-4 mb-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.id
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-blue-700 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* About */}
        {activeSection === "about" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 tracking-wide">About Me</h2>
            <div className="bg-slate-800/80 rounded-xl p-8 border border-blue-700/30 shadow-lg">
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Data Engineer with 5 years of experience designing and deploying scalable data products in complex environments.
                Skilled in building resilient ETL/ELT pipelines with tools like Snowflake, dbt, and Airflow, backed by deep expertise in Python and SQL.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Extensive experience managing cloud projects and integrating data across AWS and GCP environments.
                History of leading high-impact projects and facilitating cross-functional design discussions to deliver business-critical solutions.
              </p>
            </div>
          </section>
        )}

        {/* Experience */}
        {activeSection === "experience" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 tracking-wide">Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 rounded-xl p-8 border border-blue-700/30 shadow-lg hover:shadow-blue-500/10 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <p className="text-blue-400 font-medium">{job.company}</p>
                      <p className="text-slate-400">{job.location}</p>
                    </div>
                    <span className="text-slate-400 mt-2 md:mt-0">{job.period}</span>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-slate-300">
                    {job.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {activeSection === "skills" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 tracking-wide">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div
                  key={category}
                  className="bg-slate-800/80 rounded-xl p-6 border border-blue-700/30 shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {activeSection === "projects" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 tracking-wide">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 rounded-xl p-6 border border-blue-700/30 shadow-lg hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/95 border-t border-blue-700/30 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
          <p>&copy; 2025 Jake Mullins. Built with React and deployed on Vercel.</p>
          <p className="mt-2 text-sm">Showcasing data engineering expertise through code.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;