export default function Experience() {
  return (
    <section id="experience" className="bg-white shadow-lg rounded-xl p-8 mb-8">
      <h2 className="text-2xl font-bold mb-3">Experience</h2>
      <div className="space-y-6">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Data Engineer, Company A</h3>
            <span className="text-sm text-gray-400">2022 – Present</span>
          </div>
          <p className="text-gray-700">Lead development of data pipelines in cloud environments. Improved processing efficiency and data quality by introducing modern tools and frameworks.</p>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Analytics Engineer, Company B</h3>
            <span className="text-sm text-gray-400">2020 – 2022</span>
          </div>
          <p className="text-gray-700">Built analytics platforms for business insights. Worked closely with cross-functional teams to deliver actionable data solutions.</p>
        </div>
      </div>
    </section>
  )
}
