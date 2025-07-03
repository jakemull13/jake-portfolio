import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import Organizations from './Organizations';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer III </h3>
            <h4 className="vertical-timeline-element-subtitle">L'Oréal, New York, NY</h4>
            <ul>
              <li>Automated transforming raw market research data to deliver sales metrics for thousands of brand and competitor products, saving dozens of analyst hours every month.</li>
              <li>Supported research and data scientists in migrating projects from local silos to the enterprise cloud, integrating data from Onedrive and Azure to GCP and BigQuery.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer </h3>
            <h4 className="vertical-timeline-element-subtitle">Pfizer Inc, New York, NY</h4>
            <ul>
              <li>Led the development and deployment of 3 major data pipeline releases, designing and deploying 50+ batch and streaming pipelines using Apache Kafka, Snowflake streams, AWS S3, and Apache Spark.</li>
              <li>Established a robust budgeting and supply planning model for 5-year global stock projections.</li>
              <li>Optimized a critical SQL pipeline, doubling performance for a table supporting long-term budgeting and supply chain planning used by 40+ internal customers.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Engineer Consultant </h3>
            <h4 className="vertical-timeline-element-subtitle">U.S. Air Force, New York, NY</h4>
            <ul>
              <li>Built and scaled complex data pipelines with Python, Apache Airflow, and Docker, ensuring seamless ETL operations across heterogeneous storage systems in a high-security environment.</li>
              <li>Implemented comprehensive unit tests with Pytest, significantly improving code quality and reducing bugs in production.</li>
              <li>Led live demos, debugged beta software, and provided real-time support as the sole onsite engineer, deploying over 30 days ahead of schedule.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analytics Engineer II</h3>
            <h4 className="vertical-timeline-element-subtitle">Growth Loop, New York, NY</h4>
            <ul>
              <li>Led the development of an identity resolution project to integrate 50 million customer records from more than 10 sources, delivering 360-customer-view datasets and a single source of truth for the organization.</li>
              <li>Drafted technical specifications and collaborated on web application development, launching a new identity resolution product offering.</li>
              <li>Implemented a master data management plan, leading cooperation between multiple VP stakeholders to deliver an enterprise master data catalog.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analytics Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Growth Loop, New York, NY</h4>
            <ul>
              <li>Standardized SQL practices across client repositories by implementing an automated linter in production pipelines.</li>
              <li>Deployed and maintained production Airflow pipelines for five enterprise clients, syncing warehouse data with production CRM platforms.</li>
              <li>Created a scalable dbt framework cross-compatible with AWS/Snowflake and GCP/BigQuery, expanding the core product to 10+ new clients.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist</h3>
            <h4 className="vertical-timeline-element-subtitle">Galvanize Inc, New York, NY</h4>
            <ul>
              <li>Completed a rigorous python-based certificate program with a focus on machine learning on AWS cloud platforms, culminating in a final capstone project.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Organizations />
      </div>
    </div>
  );
}

export default Timeline;