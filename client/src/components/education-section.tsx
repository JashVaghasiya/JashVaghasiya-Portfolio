export default function EducationSection() {
  const educations = [
    {
      degree:
        "Postgraduate Certification, Artificial Intelligence and Machine Learning",
      institution: "Lambton College",
      location: "Canada",
      period: "Jan 2023 - Aug 2024",
      description:
        "Advanced studies in AI and machine learning with focus on practical applications in data engineering and analytics. Specialized in deep learning, neural networks, and AI-driven data processing systems.",
    },
    {
      degree:
        "B.C.A. (Bachelor of Computer Application), Computer Programming",
      institution: "Veer Narmad South Gujarat University, Surat",
      location: "India",
      period: "Jul 2017 - Jul 2021",
      description:
        "Comprehensive computer science education with focus on programming, database systems, and software engineering. Strong foundation in algorithms, data structures, and system design.",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-24 bg-white dark:bg-data-dark-950 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pixel text-gray-900 dark:text-white mb-4 md:mb-4 leading-tight">Education</h2>
        <p className="text-base sm:text-lg md:text-xl font-retro text-gray-500 dark:text-gray-400 mb-10 md:mb-16 leading-relaxed">
          Academic foundation in computer science and artificial intelligence.
        </p>

        <div className="space-y-5 md:space-y-6">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50/80 dark:bg-data-dark-800/40 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-5 md:p-6 hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-pixelify text-gray-900 dark:text-white leading-tight mb-2 break-words">
                    {edu.institution}
                  </h3>
                  <p className="text-base sm:text-base md:text-lg text-gray-400 dark:text-gray-500 font-retro mb-2">
                    {edu.location}
                  </p>
                  <p className="text-base sm:text-base md:text-lg font-medium font-retro text-pipeline-cyan leading-snug break-words">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-base md:text-base font-retro text-gray-400 dark:text-gray-400 w-fit flex-shrink-0">
                  {edu.period}
                </div>
              </div>

              <p className="text-base sm:text-base md:text-lg font-retro text-gray-500 dark:text-gray-400 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
