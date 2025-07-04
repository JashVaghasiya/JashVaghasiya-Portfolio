import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Code, Cog, Shield, BarChart3, Server } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Data Engineering",
      icon: Database,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      skills: ["ETL/ELT Pipelines", "Data Warehousing", "Data Modeling (Star & Snowflake Schema)", "Data Governance"]
    },
    {
      title: "Cloud & Data Platforms",
      icon: Cloud,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      skills: ["Azure Data Factory", "Power BI", "Azure Synapse Analytics", "Azure Data Lake", "Databricks", "AWS Redshift", "Lambda", "BigQuery", "Snowflake"]
    },
    {
      title: "Databases",
      icon: Server,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      skills: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "NoSQL (MongoDB, CosmosDB)"]
    },
    {
      title: "Programming",
      icon: Code,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      skills: ["Python", "JavaScript", "SQL", "T-SQL", "PL-SQL", "PySpark", "Scala", "Bash", "PowerShell"]
    },
    {
      title: "Big Data Technologies",
      icon: BarChart3,
      color: "text-red-600",
      bgColor: "bg-red-50",
      skills: ["Apache Spark", "Hadoop", "Hive", "Kafka"]
    },
    {
      title: "Workflow & DevOps",
      icon: Cog,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      skills: ["Apache Airflow", "Azure DevOps", "Git", "Docker", "Kubernetes", "Terraform"]
    },
    {
      title: "Monitoring & Security",
      icon: Shield,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      skills: ["Azure Monitor", "Datadog", "Prometheus", "RBAC", "Unity Catalog", "Data Encryption"]
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
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive expertise across the modern data engineering technology stack
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`${category.bgColor} border-l-4 border-l-current hover:shadow-lg transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-4`}>
                        <IconComponent className={`h-6 w-6 ${category.color}`} />
                      </div>
                      <h3 className={`text-xl font-semibold ${category.color}`}>
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-white/80 text-slate-700 hover:bg-white transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}