import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Data Engineer",
      company: "SpicyChat.AI",
      period: "August 2024 - Present",
      description: "Building enterprise-scale data pipelines processing 850K+ daily records using Azure Data Factory, Databricks, and Synapse Analytics, achieving 73% faster queries and 69% processing time reduction. Architecting real-time streaming solutions with Kafka and Spark, implementing comprehensive data lakehouse governance with Unity Catalog.",
      side: "left"
    },
    {
      title: "Data Developer – Co-op",
      company: "SpicyChat.AI",
      period: "May 2024 - August 2024",
      description: "Developed and implemented RESTful web services and API integrations using Python and JavaScript to process 850K+ daily records. Translated business requirements into technical solutions by designing database schemas for both SQL and NoSQL systems, reducing sprint delivery time by 33% through Agile methodology.",
      side: "right"
    },
    {
      title: "Data Engineer",
      company: "Dione Apps",
      period: "January 2021 - November 2022",
      description: "Developed scalable data migration strategies using Azure Data Factory, PySpark, and Synapse Analytics to transfer terabytes of data with zero data loss. Designed end-to-end ETL pipelines optimizing workflows handling 100GB+ loads, achieving 80% reduction in operational issues and 60% reduction in manual interventions.",
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
