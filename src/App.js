import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Database, Cloud, Code, BarChart3, ExternalLink } from 'lucide-react';

const App = () => {
const [activeSection, setActiveSection] = useState('about');

const skills = {
'Programming & Frameworks': ['Python', 'SQL', 'NumPy', 'Pandas'],
'Data Engineering': ['dbt', 'Airflow', 'Apache Spark', 'Kafka', 'ETL/ELT'],
'Cloud & Infrastructure': ['AWS', 'GCP', 'Docker', 'Kubernetes'],
'Databases': ['Snowflake', 'BigQuery', 'PostgreSQL', 'Data Warehousing'],
'Tools & DevOps': ['Git', 'CI/CD', 'Jenkins', 'REST APIs']
};

const experience = [
{
title: 'Data Engineer (Contract)',
company: 'Pfizer Inc',
location: 'New York, NY',
period: '12/2023 - 08/2024',
highlights: [
'Led development of 50+ batch and streaming pipelines using Kafka, Snowflake, and Spark',
'Optimized critical SQL pipeline, doubling performance for 40+ internal customers',
'Integrated complex business requirements for 5-year global stock projections'
]
},
{
title: 'Data Engineer Consultant (Contract)',
company: 'U.S. Air Force',
location: 'New York, NY',
period: '05/2023 - 08/2023',
highlights: [
'Built scalable data pipelines with Python, Airflow, and Docker',
'Implemented comprehensive testing with Pytest across all layers',
'Deployed solutions 30 days ahead of schedule in high-security environment'
]
},
{
title: 'Data Analytics Engineer II',
company: 'Growth Loop',
location: 'New York, NY',
period: '03/2021 - 01/2023',
highlights: [
'Led identity resolution project integrating 50M+ customer records',
'Launched new identity resolution product with engineering and sales teams',
'Implemented master data management plan across VP stakeholders'
]
}
];

const projects = [
{
title: 'Real-Time Data Pipeline',
description: 'Built streaming pipeline processing 1M+ events/day using Kafka and Spark',
tech: ['Python', 'Apache Kafka', 'Spark', 'AWS'],
github: 'https://www.github.com/jakemull13/real-time-data-pipeline'
},
{
title: 'Customer Data Platform',
description: 'Identity resolution system unifying 50M customer records across 10+ sources',
tech: ['dbt', 'Snowflake', 'Airflow', 'Python'],
github: 'https://www.github.com/jakemull13/customer-data-platform'
},
{
title: 'ETL Framework',
description: 'Scalable dbt framework compatible with Snowflake and BigQuery',
tech: ['dbt', 'SQL', 'GCP', 'Docker'],
github: 'https://www.github.com/jakemull13/etl-framework'
}
];

const navItems = [
{ id: 'about', label: 'About', icon: <Code size={16} /> },
{ id: 'experience', label: 'Experience', icon: <Database size={16} /> },
{ id: 'skills', label: 'Skills', icon: <BarChart3 size={16} /> },
{ id: 'projects', label: 'Projects', icon: <Cloud size={16} /> }
];

return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
{/* Navigation */}
<nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 z-50">
<div className="max-w-6xl mx-auto px-6 py-4">
<div className="flex justify-between items-center">
<div className="text-xl font-bold text-blue-400">Jake Mullins</div>
<div className="hidden md:flex space-x-8">
{navItems.map(item => (
<button
key={item.id}
onClick={() => setActiveSection(item.id)}
className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${ activeSection === item.id ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800' }`}
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
<section className="pt-24 pb-16 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
Data Engineer
</h1>
<p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
Building scalable data products and pipelines that power business-critical decisions
</p>
<div className="flex flex-wrap justify-center gap-4 mb-8">
<div className="flex items-center space-x-2 text-slate-400">
<MapPin size={16} />
<span>New York, NY</span>
</div>
<div className="flex items-center space-x-2 text-slate-400">
<Phone size={16} />
<span>770.402.8705</span>
</div>
</div>
<div className="flex justify-center space-x-6">
<a href="mailto:jake.c.mullins@icloud.com" className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all">
<Mail size={18} />
<span>Email</span>
</a>
<a href="https://www.linkedin.com" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all">
<Linkedin size={18} />
<span>Linkedin</span>
</a>
<a href="https://www.github.com/jakemull13" className="flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-all">
<Github size={18} />
<span>Github</span>
</a>
</div>
</div>
</div>
</section>

{/* Content Sections */}
<div className="max-w-6xl mx-auto px-6 pb-16">

{/* About Section */}
{activeSection === 'about' && (
<section className="mb-16">
<h2 className="text-3xl font-bold mb-8 text-blue-400">About Me</h2>
<div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
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

{/* Experience Section */}
{activeSection === 'experience' && (
<section className="mb-16">
<h2 className="text-3xl font-bold mb-8 text-blue-400">Experience</h2>
<div className="space-y-8">
{experience.map((job, index) => (
<div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
<div>
<h3 className="text-xl font-semibold text-white">{job.title}</h3>
<p className="text-blue-400 font-medium">{job.company}</p>
<p className="text-slate-400">{job.location}</p>
</div>
<span className="text-slate-400 mt-2 md:mt-0">{job.period}</span>
</div>
<ul className="space-y-2">
{job.highlights.map((highlight, i) => (
<li key={i} className="text-slate-300 flex items-start">
<span className="text-blue-400 mr-2">•</span>
{highlight}
</li>
))}
</ul>
</div>
))}
</div>
</section>
)}

{/* Skills Section */}
{activeSection === 'skills' && (
<section className="mb-16">
<h2 className="text-3xl font-bold mb-8 text-blue-400">Technical Skills</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{Object.entries(skills).map(([category, skillList]) => (
<div key={category} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
<h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
<div className="flex flex-wrap gap-2">
{skillList.map(skill => (
<span key={skill} className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">
{skill}
</span>
))}
</div>
</div>
))}
</div>
</section>
)}

{/* Projects Section */}
{activeSection === 'projects' && (
<section className="mb-16">
<h2 className="text-3xl font-bold mb-8 text-blue-400">Featured Projects</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{projects.map((project, index) => (
<div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all">
<h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
<p className="text-slate-300 mb-4">{project.description}</p>
<div className="flex flex-wrap gap-2 mb-4">
{project.tech.map(tech => (
<span key={tech} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-sm">
{tech}
</span>
))}
</div>
<a href={project.github} className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
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
<footer className="bg-slate-900/80 border-t border-slate-700/50 py-8">
<div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
<p>&copy; 2025 Jake Mullins. Built with React and deployed on Vercel.</p>
<p className="mt-2 text-sm">Showcasing data engineering expertise through code.</p>
</div>
</footer>
</div>


);

};

export default App;
