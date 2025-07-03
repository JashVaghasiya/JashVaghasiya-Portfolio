import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SiPython, SiPostgresql, SiAmazonwebservices, SiDocker, SiTableau, SiGit } from "react-icons/si";
import { Database, Award, BarChart3 } from "lucide-react";

export default function SkillsSection() {
  const technicalSkills = [
    { name: "Python", percentage: 95 },
    { name: "SQL & Database Design", percentage: 90 },
    { name: "Apache Spark & Kafka", percentage: 85 },
    { name: "AWS/Azure Cloud Services", percentage: 80 },
    { name: "Docker & Kubernetes", percentage: 75 }
  ];

  const tools = [
    { name: "Python", icon: SiPython, color: "text-blue-600" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-emerald-600" },
    { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-500" },
    { name: "Docker", icon: SiDocker, color: "text-blue-500" },
    { name: "Tableau", icon: SiTableau, color: "text-purple-600" },
    { name: "Git", icon: SiGit, color: "text-red-600" }
  ];

  const certifications = [
    {
      name: "AWS Certified Data Engineer",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: SiAmazonwebservices,
      color: "bg-blue-600"
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2022",
      icon: Award,
      color: "bg-emerald-600"
    },
    {
      name: "Databricks Certified Data Engineer",
      issuer: "Databricks",
      year: "2023",
      icon: BarChart3,
      color: "bg-purple-600"
    }
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
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <span className="text-slate-600 text-sm">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-3" />
                </motion.div>
              ))}
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
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
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
            
            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold text-slate-800 mb-6">Certifications</h4>
              <div className="space-y-4">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-slate-50 hover:bg-blue-50 transition-colors duration-200">
                        <CardContent className="p-4 flex items-center">
                          <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                            <IconComponent className="text-white text-xl" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-800">{cert.name}</h5>
                            <p className="text-slate-600 text-sm">{cert.issuer} • {cert.year}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
