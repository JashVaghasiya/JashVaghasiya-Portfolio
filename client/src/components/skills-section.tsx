import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiPython, SiPostgresql, SiDocker, SiJavascript, SiApachespark, SiApachekafka, SiApacheairflow, SiSnowflake, SiDatabricks } from "react-icons/si";
import { Database, Cloud, Code } from "lucide-react";

export default function SkillsSection() {
  const technicalSkills = [
    { name: "Python & PySpark", icon: SiPython, color: "text-blue-600" },
    { name: "SQL & T-SQL", icon: Database, color: "text-emerald-600" },
    { name: "Azure Data Factory & Synapse", icon: Cloud, color: "text-blue-500" },
    { name: "Apache Spark & Kafka", icon: SiApachespark, color: "text-orange-500" },
    { name: "Databricks & Delta Lake", icon: SiDatabricks, color: "text-red-600" },
    { name: "JavaScript & Scala", icon: SiJavascript, color: "text-yellow-500" },
    { name: "Docker & Kubernetes", icon: SiDocker, color: "text-blue-500" },
    { name: "Apache Airflow", icon: SiApacheairflow, color: "text-green-600" }
  ];

  const tools = [
    { name: "Python", icon: SiPython, color: "text-blue-600" },
    { name: "Apache Spark", icon: SiApachespark, color: "text-orange-500" },
    { name: "Databricks", icon: SiDatabricks, color: "text-red-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-emerald-600" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Kafka", icon: SiApachekafka, color: "text-purple-600" },
    { name: "Airflow", icon: SiApacheairflow, color: "text-green-600" },
    { name: "Snowflake", icon: SiSnowflake, color: "text-cyan-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive technical expertise across the data engineering ecosystem
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-slate-800 mb-8"
            >
              Technical Skills
            </motion.h3>
            
            <div className="grid grid-cols-1 gap-4">
              {technicalSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="bg-slate-50 hover:bg-blue-50 transition-colors duration-200">
                      <CardContent className="p-4 flex items-center">
                        <IconComponent className={`text-2xl ${skill.color} mr-4`} />
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold text-slate-800 mb-8"
            >
              Tools & Technologies
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => {
                const IconComponent = tool.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="bg-slate-50 hover:bg-blue-50 transition-colors duration-200 cursor-pointer">
                      <CardContent className="p-4 text-center">
                        <IconComponent className={`text-3xl ${tool.color} mb-2 mx-auto`} />
                        <p className="text-slate-700 font-medium">{tool.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}