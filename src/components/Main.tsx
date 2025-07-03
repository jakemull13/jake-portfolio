import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/headshot.png')} alt="Jake Mullins" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jakemull13" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jakecmullins" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jake Mullins</h1>
          <p>Data Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jakemull13" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jakecmullins" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <div className="about-summary">
            <p>
              Data Engineer with 5 years of experience designing and deploying scalable data products in complex environments. Skilled in building resilient ETL/ELT pipelines with tools like Snowflake, Dbt, and Airflow, backed by deep expertise in Python and SQL. Extensive experience managing cloud projects and integrating data across AWS, Azure, and GCP environments. History of leading high-impact projects and facilitating cross-functional design discussions to deliver business-critical solutions.
            </p>
            <p>
              New York, NY | 770.402.8705 | jake.c.mullins@icloud.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;