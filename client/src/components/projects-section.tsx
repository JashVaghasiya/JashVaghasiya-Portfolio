import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Real-time Analytics Pipeline",
      description: "Built a scalable real-time data pipeline using Apache Kafka, Spark, and Redis to process streaming e-commerce data with sub-second latency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Apache Kafka", "Spark", "Redis"],
      link: "#"
    },
    {
      title: "Customer Analytics Dashboard",
      description: "Designed interactive dashboards for customer behavior analysis, enabling data-driven marketing decisions and increasing conversion rates by 25%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Tableau", "SQL", "Python"],
      link: "#"
    },
    {
      title: "Data Warehouse Optimization",
      description: "Redesigned legacy data warehouse architecture, improving query performance by 70% and reducing storage costs by implementing efficient partitioning strategies.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["PostgreSQL", "Snowflake", "dbt"],
      link: "#"
    },
    {
      title: "ML Pipeline Automation",
      description: "Automated machine learning pipeline for predictive analytics, including data preprocessing, model training, and deployment using MLOps practices.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["MLflow", "Docker", "Kubernetes"],
      link: "#"
    },
    {
      title: "Cloud Data Migration",
      description: "Led migration of on-premises data infrastructure to AWS, implementing auto-scaling and cost optimization strategies that reduced operational costs by 40%.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["AWS", "Terraform", "Lambda"],
      link: "#"
    },
    {
      title: "Data Quality Framework",
      description: "Implemented comprehensive data quality monitoring system with automated testing, anomaly detection, and alerting mechanisms for critical data sources.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Great Expectations", "Airflow", "Grafana"],
      link: "#"
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
              <Card className="bg-white shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
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
                      <Badge 
                        key={techIndex}
                        className={`text-xs font-medium ${getColorClass(index)}`}
                        variant="secondary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    View Project
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
