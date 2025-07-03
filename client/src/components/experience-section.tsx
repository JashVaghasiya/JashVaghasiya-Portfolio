import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Led the development of real-time data pipelines processing 10TB+ daily. Implemented Apache Kafka and Spark for streaming analytics, reducing data latency by 80%.",
      side: "left"
    },
    {
      title: "Data Engineer",
      company: "DataFlow Solutions",
      period: "2020 - 2022",
      description: "Built ETL pipelines using Python and SQL, processing customer data for machine learning models. Designed data warehouse architecture supporting 50+ analysts.",
      side: "right"
    },
    {
      title: "Junior Data Analyst",
      company: "Analytics Pro",
      period: "2018 - 2020",
      description: "Developed automated reporting systems and performed statistical analysis on business metrics. Created interactive dashboards using Tableau and Power BI.",
      side: "left"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My journey in data engineering and analytics across various industries
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: experience.side === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="flex items-center md:justify-between">
                {experience.side === "left" ? (
                  <>
                    <div className="w-full md:w-1/2 md:pr-8 md:text-right">
                      <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-slate-800 mb-2">
                            {experience.title}
                          </h3>
                          <p className="text-blue-600 font-medium mb-2">
                            {experience.company}
                          </p>
                          <p className="text-slate-600 text-sm mb-3">
                            {experience.period}
                          </p>
                          <p className="text-slate-700">
                            {experience.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                    
                    <div className="w-full md:w-1/2 md:pl-8 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:w-1/2 md:pr-8 hidden md:block"></div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                    
                    <div className="w-full md:w-1/2 md:pl-8">
                      <Card className="bg-slate-50 hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-slate-800 mb-2">
                            {experience.title}
                          </h3>
                          <p className="text-blue-600 font-medium mb-2">
                            {experience.company}
                          </p>
                          <p className="text-slate-600 text-sm mb-3">
                            {experience.period}
                          </p>
                          <p className="text-slate-700">
                            {experience.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
