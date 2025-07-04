import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ProjectsSection() {
  const projects = [
    {
      id: "gcp-azure-migration",
      title: "GCP to Azure Migration & Governance Platform",
      description: "Enterprise-scale automated data pipeline solution enabling seamless migration, processing, and governance of large-scale datasets between Google Cloud Platform and Microsoft Azure with zero data loss and comprehensive security controls.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Azure", "GCP", "PySpark", "SQL", "Databricks"]
    },
    {
      id: "real-time-analytics-pipeline",
      title: "Real-Time Streaming and Automated Deployments",
      description: "Enterprise-scale cloud-native data platform leveraging Infrastructure-as-Code, real-time streaming, and automated CI/CD deployments to deliver scalable, reliable, and high-performance data engineering solutions on Microsoft Azure.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Azure", "Kafka", "PySpark", "Databricks", "DLT"]
    },
    {
      id: "customer-analytics-dashboard",
      title: "Data Warehousing And Analytics Platform",
      description: "Comprehensive end-to-end data analytics platform processing 15+ years of LAPD crime and arrest data using Azure cloud services, implementing medallion architecture and FBI NIBRS compliance standards to deliver actionable public safety insights through advanced data warehousing and visualization capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Azure", "Power BI", "Airflow", "Spark", "SQL"]
    }
  ];

  const getColorClass = (index: number) => {
    const colors = [
      "bg-blue-100 text-blue-800",
      "bg-emerald-100 text-emerald-800",
      "bg-purple-100 text-purple-800",
      "bg-orange-100 text-orange-800",
      "bg-sky-100 text-sky-800",
      "bg-red-100 text-red-800"
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of data engineering projects and pipeline implementations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="transition-all duration-300"
            >
              <Link href={`/project/${project.id}`}>
                <Card className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 h-full cursor-pointer group overflow-hidden">
                  <div className="aspect-video overflow-hidden rounded-t-lg relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: techIndex * 0.1,
                            type: "spring",
                            stiffness: 300
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            y: -2
                          }}
                        >
                          <Badge 
                            className={`text-xs font-medium ${getColorClass(index)} cursor-default`}
                            variant="secondary"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                      View Project
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
