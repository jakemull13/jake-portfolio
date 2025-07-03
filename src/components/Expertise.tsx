import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "SQL",
    "DBT",
    "ETL/ELT",
    "Airflow",
    "Snowflake",
    "Postgres",
    "BigQuery",
    "AWS",
    "Azure",
    "GCP"
];

const labelsSecond = [
    "Docker",
    "Kubernetes",
    "Linux",
    "S3",
    "EC2",
    "Data Modeling",
    "Data Warehouse",
    "Data Lake",
    "Metadata Management",
    "CI/CD",
    "Jenkins",
    "GitLab"
];

const labelsThird = [
    "Statistical Analysis",
    "Numpy",
    "Pandas",
    "Data Visualization",
    "Matplotlib",
    "Automated Testing",
    "Pytest",
    "REST APIs",
    "Data Validation",
    "Parquet"
];

function Expertise() {
    return (
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>Technical Skills</h1>
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="3x"/>
              <h3>Data Engineering & Cloud</h3>
              <p>Experienced in building resilient ETL/ELT pipelines, data integration, and cloud data solutions using Python, SQL, Airflow, Snowflake, DBT, and more. Skilled in AWS, Azure, and GCP environments.</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className='chip' label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faDocker} size="3x"/>
              <h3>DevOps, Automation & DataOps</h3>
              <p>Proficient in containerization, orchestration, CI/CD, and automation for data pipelines and cloud deployments. Experience with Docker, Kubernetes, Jenkins, and GitLab.</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} className='chip' label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="3x"/>
              <h3>Analytics & Data Science</h3>
              <p>Strong background in data modeling, validation, automated testing, and statistical analysis. Experienced with Numpy, Pandas, Matplotlib, and data visualization.</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsThird.map((label, index) => (
                  <Chip key={index} className='chip' label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="education-section" style={{marginTop: '2rem'}}>
          <h2>Education</h2>
          <ul>
            <li><strong>Galvanize Inc</strong>, Data Science Accelerator, 2020</li>
            <li><strong>Georgia Institute of Technology</strong>, B.S. Chemistry, 2014-2017</li>
          </ul>
        </div>
      </div>
    );
}

export default Expertise;