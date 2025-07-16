### New Features July 15, 2025
⸻

🧠 Personal Health Data Dashboard

This project integrates Apple Health data into a personal data engineering portfolio site. It demonstrates end-to-end data engineering workflows using Python, dbt, BigQuery, and GCP infrastructure — all containerized, reproducible, and built with long-term maintainability in mind.

⸻

🚀 Project Goals
	•	Receive Apple Health JSON exports via a secure HTTP POST endpoint
	•	Store raw health data in BigQuery for easy querying and analysis
	•	Transform data with dbt into structured, analytics-ready tables
	•	Visualize selected metrics (e.g. HRV, resting heart rate, step count) on a React dashboard
	•	Deploy fully in GCP using Cloud Run, BigQuery, dbt, and optionally Cloud Scheduler / API Gateway
	•	Keep it clean — modular architecture, secrets managed in one place, Dockerized services, and minimal “black box” behavior

⸻

🔧 Stack

Layer	Tool/Service	Purpose
Ingestion API	Python (Flask) + Cloud Run	Accepts and validates incoming POST requests
Data Warehouse	BigQuery	Stores raw and transformed health data
Transformation	dbt	Models raw JSON into analytics tables
Frontend	React	Displays dashboard on personal site
Orchestration	Cloud Build + Scheduler / dbt Cloud	Runs dbt models on a schedule
Secrets	Secret Manager	Manages credentials and tokens securely


⸻

📁 Directory Structure

personal-health-dashboard/
├── ingest/             # Flask app for receiving and storing health data
├── dbt/                # dbt project: staging, intermediate, and final models
├── frontend/           # React dashboard (integrated into personal site)
├── infra/              # Deployment configs: API Gateway, Cloud Run, Cloud Build
├── .env.example        # Sample environment config
└── README.md


⸻

✅ Features
	•	📲 Mobile-first ingestion — accepts Apple Health JSON from iOS app
	•	🔄 Modular transformation — dbt logic broken into clear layers (stg_, int_, fct_)
	•	📊 Frontend-ready — outputs clean, API-servable summary tables
	•	🔐 Secure — secrets in one place, scoped service accounts, Cloud IAM
	•	🐳 Containerized — ingestion service runs via Docker on Cloud Run

⸻

📌 Example Use Case

Automatically track and visualize your daily HRV, steps, or resting heart rate in a live dashboard — showing off your skills as a data engineer while also improving personal health awareness.

⸻
curl -X POST https://ingest-api-381855915236.us-central1.run.app/ingest \
  -H "Content-Type: application/json" \
  -d '{"type":"resting_heart_rate","value":62,"timestamp":"2025-07-15T07:45:00Z"}'

 https://ingest-api-381855915236.us-central1.run.app