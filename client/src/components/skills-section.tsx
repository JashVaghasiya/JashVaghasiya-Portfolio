import { motion } from "framer-motion";
import ArchitectureLayer, { LayerData } from "./visualizations/ArchitectureLayer";
import { FlowConnector } from "./visualizations/FlowingParticle";

export default function SkillsSection() {
  const architectureLayers: LayerData[] = [
    {
      name: "Orchestration Layer",
      type: "orchestration",
      technologies: ["Apache Airflow", "Azure Data Factory", "Synapse Pipelines", "Azure DevOps"],
      description: "Workflow scheduling and pipeline orchestration",
    },
    {
      name: "Streaming Layer",
      type: "source",
      technologies: ["Apache Kafka", "Event Hubs", "Spark Streaming", "Change Data Capture"],
      description: "Real-time data ingestion and streaming",
    },
    {
      name: "Storage Layer",
      type: "storage",
      technologies: ["ADLS Gen2", "Snowflake", "Delta Lake", "SQL Server", "PostgreSQL", "MongoDB", "CosmosDB"],
      description: "Data lakes, warehouses, and operational databases",
    },
    {
      name: "Processing Layer",
      type: "process",
      technologies: ["Apache Spark", "PySpark", "Scala", "Delta Live Tables"],
      description: "Batch and stream processing at scale",
    },
    {
      name: "Analytics Layer",
      type: "process",
      technologies: ["Azure Synapse", "Databricks SQL", "BigQuery", "Redshift"],
      description: "Data warehousing and analytical queries",
    },
    {
      name: "Visualization Layer",
      type: "analytics",
      technologies: ["Power BI", "Tableau", "Plotly", "SQL Analytics"],
      description: "Business intelligence, dashboards, and reporting",
    },
  ];

  // Side flow diagram showing data through the stack
  const dataFlowSteps = [
    { label: "Ingest", color: "#10b981", desc: "Raw data streams in" },
    { label: "Store", color: "#8b5cf6", desc: "Persist to data lake" },
    { label: "Process", color: "#3b82f6", desc: "Transform & enrich" },
    { label: "Analyze", color: "#06b6d4", desc: "Query & aggregate" },
    { label: "Visualize", color: "#f97316", desc: "Dashboards & reports" },
  ];

  // Programming languages and tools
  const coreSkills = [
    { name: "Python", proficiency: 95, color: "#3776AB" },
    { name: "SQL / T-SQL", proficiency: 95, color: "#4479A1" },
    { name: "PySpark", proficiency: 90, color: "#E25A1C" },
    { name: "Scala", proficiency: 75, color: "#DC322F" },
    { name: "JavaScript", proficiency: 70, color: "#F7DF1E" },
    { name: "Bash / PowerShell", proficiency: 80, color: "#4EAA25" },
  ];

  // DevOps / Infra
  const devopsTools = [
    { name: "Docker", color: "#2496ED" },
    { name: "Kubernetes", color: "#326CE5" },
    { name: "Terraform", color: "#7B42BC" },
    { name: "Git", color: "#F05032" },
    { name: "Azure DevOps", color: "#0078D4" },
    { name: "Unity Catalog", color: "#FF3621" },
    { name: "RBAC", color: "#22d3ee" },
    { name: "Azure Monitor", color: "#0078D4" },
    { name: "Datadog", color: "#632CA6" },
    { name: "Prometheus", color: "#E6522C" },
  ];

  return (
    <section id="skills" className="py-20 md:py-24 bg-white dark:bg-data-dark-900 overflow-x-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pixel text-gray-900 dark:text-white mb-3 leading-tight">
            Data Architecture & Technologies
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-retro text-gray-500 dark:text-gray-400 mb-10 md:mb-12 max-w-2xl leading-relaxed">
            Comprehensive expertise across the modern data engineering stack, organized by architectural layer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main architecture diagram - takes 2 columns */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50/80 dark:bg-data-dark-800/30 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-5 md:p-6 h-full shadow-sm dark:shadow-none"
            >
              <div className="flex items-center justify-between mb-5 md:mb-5 flex-wrap gap-2">
                <span className="text-sm md:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  Data Stack Architecture
                </span>
                <span className="text-xs font-retro text-pipeline-cyan whitespace-nowrap">
                  6 LAYERS | 30+ TECHNOLOGIES
                </span>
              </div>

              <ArchitectureLayer layers={architectureLayers} />
            </motion.div>
          </div>

          {/* Side panel: Data Flow Diagram */}
          <div className="space-y-5 md:space-y-6">
            {/* Vertical data flow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50/80 dark:bg-data-dark-800/30 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-5 md:p-5 h-fit shadow-sm dark:shadow-none"
            >
              <span className="text-sm md:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-4 md:mb-4">
                Data Flow Path
              </span>
              <div className="space-y-0">
                {dataFlowSteps.map((step, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 border"
                        style={{
                          backgroundColor: step.color + "15",
                          borderColor: step.color + "30",
                          color: step.color,
                        }}
                      >
                        {index + 1}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-base font-retro font-semibold truncate" style={{ color: step.color }}>
                          {step.label}
                        </div>
                        <div className="text-sm text-gray-400 dark:text-gray-500 font-retro truncate">{step.desc}</div>
                      </div>
                    </div>
                    {index < dataFlowSteps.length - 1 && (
                      <div className="flex my-1 ml-2">
                        <FlowConnector
                          color={step.color}
                          width={24}
                          direction="vertical"
                          particleCount={1}
                          animated={true}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* DevOps & Governance Tools */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50/80 dark:bg-data-dark-800/30 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-5 md:p-5 h-fit shadow-sm dark:shadow-none"
            >
              <span className="text-sm md:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-3">
                DevOps & Governance
              </span>
              <div className="flex flex-wrap gap-2">
                {devopsTools.map((tool) => (
                  <span
                    key={tool.name}
                    className="text-sm md:text-sm font-retro px-2.5 py-1.5 rounded border whitespace-nowrap"
                    style={{
                      color: tool.color,
                      borderColor: tool.color + "25",
                      backgroundColor: tool.color + "08",
                    }}
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Programming Languages - Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 md:mt-8 bg-gray-50/80 dark:bg-data-dark-800/30 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-5 md:p-6 shadow-sm dark:shadow-none"
        >
          <span className="text-sm md:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-5 md:mb-5">
            Programming Languages & Proficiency
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-8 gap-y-4 md:gap-y-4">
            {coreSkills.map((skill, index) => (
              <div key={skill.name} className="flex items-center gap-3 md:gap-3 min-w-0">
                <span className="text-base md:text-lg font-retro text-gray-500 dark:text-gray-400 w-32 md:w-32 flex-shrink-0 truncate" title={skill.name}>
                  {skill.name}
                </span>
                <div className="flex-1 h-2.5 bg-gray-200 dark:bg-data-dark-700 rounded-full overflow-hidden min-w-0">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="text-base md:text-base font-retro text-gray-400 dark:text-gray-500 w-10 md:w-10 text-right flex-shrink-0">
                  {skill.proficiency}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
