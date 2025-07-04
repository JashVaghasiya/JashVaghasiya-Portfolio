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
      verifyUrl: "https://learn.microsoft.com/en-us/users/jashvaghasiya-4649/credentials/d944bfaa682ef208",
      credentialId: "D944BFAA682EF208",
      expires: "Jul 2025"
    },
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      year: "2024",
      icon: SiDatabricks,
      color: "bg-red-600",
      verifyUrl: "https://credentials.databricks.com/247a6732-00b6-41f1-986f-9aa0deb06dad",
      expires: "Jul 2026"
    },
    {
      name: "Databricks Certified Data Engineer Professional",
      issuer: "Databricks",
      year: "2024",
      icon: Award,
      color: "bg-orange-600",
      verifyUrl: "https://credentials.databricks.com/1001cd75-9e1d-4340-ba0c-78332c105021#acc.OLoGDvFs",
      expires: "Aug 2026"
    },
    {
      name: "Databricks Certified Associate Developer for Apache Spark 3.0",
      issuer: "Databricks",
      year: "2024",
      icon: SiApachespark,
      color: "bg-emerald-600",
      verifyUrl: "https://credentials.databricks.com/71959e09-697b-4f64-8a15-ae7213dbf55c#acc.Mh67Y1rl",
      expires: "No expiration"
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
                              <p className="text-slate-500 text-sm">Issued {cert.year}</p>
                              <p className="text-slate-500 text-sm">Expires: {cert.expires}</p>
                              {cert.credentialId && (
                                <p className="text-slate-400 text-xs mt-1">ID: {cert.credentialId}</p>
                              )}
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