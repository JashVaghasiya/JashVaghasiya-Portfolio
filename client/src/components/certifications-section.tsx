import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiDatabricks, SiApachespark } from "react-icons/si";
import { Shield, Award, ExternalLink } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      name: "Microsoft Certified: Azure Data Engineer Associate",
      issuer: "Microsoft",
      year: "2024",
      icon: Shield,
      color: "bg-blue-600",
      verifyUrl: "https://learn.microsoft.com/en-us/certifications/azure-data-engineer/"
    },
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      year: "2024",
      icon: SiDatabricks,
      color: "bg-red-600",
      verifyUrl: "https://www.databricks.com/learn/certification/data-engineer-associate"
    },
    {
      name: "Databricks Certified Data Engineer Professional",
      issuer: "Databricks",
      year: "2024",
      icon: Award,
      color: "bg-orange-600",
      verifyUrl: "https://www.databricks.com/learn/certification/data-engineer-professional"
    },
    {
      name: "Databricks Certified Associate Developer for Apache Spark 3.0",
      issuer: "Databricks",
      year: "2024",
      icon: SiApachespark,
      color: "bg-emerald-600",
      verifyUrl: "https://www.databricks.com/learn/certification/apache-spark-developer-associate"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Certifications</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional certifications in data engineering and cloud technologies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                          <IconComponent className="text-white h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                                {cert.name}
                              </h3>
                              <p className="text-slate-600 mb-1">{cert.issuer}</p>
                              <p className="text-slate-500 text-sm">{cert.year}</p>
                            </div>
                            <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}