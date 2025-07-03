export default function Projects() {
  return (
    <section id="projects" className="bg-white shadow-lg rounded-xl p-8 mb-8">
      <h2 className="text-2xl font-bold mb-3">Projects</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg">Modern Data Pipeline</h3>
          <p className="text-gray-700">Designed and deployed a robust ETL pipeline using Python, Airflow, and GCP, enabling scalable data processing for millions of records daily.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Data Catalog Implementation</h3>
          <p className="text-gray-700">Led the implementation of a metadata management system to support data discovery and governance across business units.</p>
        </div>
      </div>
    </section>
  )
}
