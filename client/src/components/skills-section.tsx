import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Cloud, Code, Cog, Shield, BarChart3, Server } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Cloud & Data Platforms",
      icon: Cloud,
      color: "text-slate-800",
      skills: ["Azure Data Factory", "Power BI", "Azure Synapse Analytics", "Azure Data Lake", "Databricks", "AWS Redshift", "Lambda", "BigQuery", "Snowflake"]
    },
    {
      title: "Databases",
      icon: Server,
      color: "text-slate-800",
      skills: ["Microsoft SQL Server", "PostgreSQL", "MySQL", "NoSQL (MongoDB, CosmosDB)"]
    },
    {
      title: "Programming",
      icon: Code,
      color: "text-slate-800",
      skills: ["Python", "JavaScript", "SQL", "T-SQL", "PL-SQL", "PySpark", "Scala", "Bash", "PowerShell"]
    },
    {
      title: "Big Data Technologies",
      icon: BarChart3,
      color: "text-slate-800",
      skills: ["Apache Spark", "Hadoop", "Hive", "Kafka"]
    },
    {
      title: "Workflow & DevOps",
      icon: Cog,
      color: "text-slate-800",
      skills: ["Apache Airflow", "Azure DevOps", "Git", "Docker", "Kubernetes", "Terraform"]
    },
    {
      title: "Monitoring & Security",
      icon: Shield,
      color: "text-slate-800",
      skills: ["Azure Monitor", "Datadog", "Prometheus", "RBAC", "Unity Catalog", "Data Encryption"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-emerald-500 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300 p-6"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className={`h-5 w-5 ${category.color} mr-3`} />
                  <h3 className={`text-lg font-semibold ${category.color}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}