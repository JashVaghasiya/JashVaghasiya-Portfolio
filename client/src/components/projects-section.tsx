import { ArrowRight, ArrowRightIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import DataFlowDiagram, { PipelineNode } from "./visualizations/DataFlowDiagram";
import { MiniBarChart, MiniLineChart } from "./visualizations/MetricChart";

// ETL Pipeline Component
function ETLPipelineFlow({ stages }: { stages: { name: string; color: string }[] }) {
  return (
    <div className="flex items-center gap-1.5 md:gap-1.5 flex-wrap justify-center">
      {stages.map((stage, index) => (
        <div key={stage.name} className="flex items-center gap-1.5 md:gap-1.5">
          <div
            className="px-2.5 md:px-2.5 py-2 rounded-md border text-center min-w-[75px] md:min-w-[80px]"
            style={{
              backgroundColor: stage.color + "10",
              borderColor: stage.color + "30",
            }}
          >
            <div className="text-sm md:text-sm font-retro font-bold" style={{ color: stage.color }}>
              {stage.name}
            </div>
          </div>
          {index < stages.length - 1 && (
            <ArrowRightIcon className="h-3 w-3 md:h-3 md:w-3 text-gray-400 dark:text-gray-600 flex-shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  pipeline: PipelineNode[];
  pipelineStages: { name: string; color: string }[];
  metrics: {
    bars?: { label: string; value: number; color?: string }[];
    line?: { data: number[]; color: string; label: string };
    kpis?: { value: string; label: string; color: string }[];
  };
  architectureLayers: { name: string; techs: string[]; color: string }[];
}

export default function ProjectsSection() {
  const projects: ProjectData[] = [
    {
      id: "gcp-azure-migration",
      title: "GCP to Azure Migration & Governance Platform",
      description:
        "Enterprise-scale automated data pipeline solution enabling seamless migration, processing, and governance of large-scale datasets between Google Cloud Platform and Microsoft Azure with zero data loss.",
      technologies: ["Azure", "GCP", "PySpark", "SQL", "Databricks"],
      pipeline: [
        { label: "GCP BigQuery", type: "source", metric: "TB-scale" },
        { label: "Data Factory", type: "orchestration", metric: "Orchestration" },
        { label: "Databricks", type: "process", metric: "Transform" },
        { label: "Azure Synapse", type: "storage", metric: "Warehouse" },
        { label: "Power BI", type: "analytics", metric: "Reports" },
      ],
      pipelineStages: [
        { name: "Extract", color: "#10b981" },
        { name: "Migrate", color: "#3b82f6" },
        { name: "Transform", color: "#06b6d4" },
        { name: "Load", color: "#8b5cf6" },
        { name: "Validate", color: "#f97316" },
      ],
      metrics: {
        kpis: [
          { value: "0%", label: "Data Loss", color: "#10b981" },
          { value: "TB+", label: "Data Migrated", color: "#3b82f6" },
          { value: "99.9%", label: "Uptime", color: "#22d3ee" },
        ],
        bars: [
          { label: "Extract", value: 95, color: "#10b981" },
          { label: "Transform", value: 88, color: "#3b82f6" },
          { label: "Load", value: 92, color: "#8b5cf6" },
          { label: "Validate", value: 100, color: "#22d3ee" },
        ],
      },
      architectureLayers: [
        { name: "Source", techs: ["GCP BigQuery", "Cloud Storage"], color: "#10b981" },
        { name: "Orchestration", techs: ["Azure Data Factory"], color: "#06b6d4" },
        { name: "Processing", techs: ["Databricks", "PySpark"], color: "#3b82f6" },
        { name: "Storage", techs: ["Azure Synapse", "ADLS Gen2"], color: "#8b5cf6" },
        { name: "Visualization", techs: ["Power BI"], color: "#f97316" },
      ],
    },
    {
      id: "real-time-analytics-pipeline",
      title: "Real-Time Streaming and Automated Deployments",
      description:
        "Cloud-native data platform leveraging Infrastructure-as-Code, real-time streaming, and automated CI/CD deployments to deliver scalable, high-performance data engineering solutions on Azure.",
      technologies: ["Azure", "Kafka", "PySpark", "Databricks", "DLT"],
      pipeline: [
        { label: "Kafka Stream", type: "source", metric: "Real-time" },
        { label: "Event Hub", type: "orchestration", metric: "Ingestion" },
        { label: "Databricks", type: "process", metric: "Streaming" },
        { label: "Delta Lake", type: "storage", metric: "Lakehouse" },
        { label: "Dashboard", type: "analytics", metric: "Real-time" },
      ],
      pipelineStages: [
        { name: "Ingest", color: "#10b981" },
        { name: "Stream", color: "#3b82f6" },
        { name: "Process", color: "#06b6d4" },
        { name: "Store", color: "#8b5cf6" },
        { name: "Deliver", color: "#f97316" },
      ],
      metrics: {
        line: {
          data: [10, 25, 35, 50, 65, 80, 90, 95, 98, 99, 99.5, 99.9],
          color: "#22d3ee",
          label: "Streaming Uptime %",
        },
        kpis: [
          { value: "<1s", label: "Latency", color: "#10b981" },
          { value: "24/7", label: "Streaming", color: "#3b82f6" },
          { value: "Auto", label: "CI/CD Deploy", color: "#8b5cf6" },
        ],
      },
      architectureLayers: [
        { name: "Ingestion", techs: ["Kafka", "Event Hubs"], color: "#10b981" },
        { name: "Processing", techs: ["Databricks Streaming", "DLT"], color: "#3b82f6" },
        { name: "Storage", techs: ["Delta Lake", "ADLS"], color: "#8b5cf6" },
        { name: "Deployment", techs: ["Terraform", "Azure DevOps"], color: "#06b6d4" },
        { name: "Monitoring", techs: ["Azure Monitor", "Datadog"], color: "#f97316" },
      ],
    },
    {
      id: "customer-analytics-dashboard",
      title: "Data Warehousing and Analytics Platform",
      description:
        "End-to-end data analytics platform processing 15+ years of LAPD crime and arrest data, implementing medallion architecture and FBI NIBRS compliance for public safety insights.",
      technologies: ["Azure", "Power BI", "Airflow", "Spark", "SQL"],
      pipeline: [
        { label: "Raw CSV", type: "source", metric: "15+ Years" },
        { label: "Bronze Layer", type: "storage", metric: "Raw Ingest" },
        { label: "Silver Layer", type: "process", metric: "Cleaned" },
        { label: "Gold Layer", type: "storage", metric: "Aggregated" },
        { label: "Power BI", type: "analytics", metric: "Reports" },
      ],
      pipelineStages: [
        { name: "Ingest", color: "#10b981" },
        { name: "Bronze", color: "#3b82f6" },
        { name: "Silver", color: "#06b6d4" },
        { name: "Gold", color: "#8b5cf6" },
        { name: "Reports", color: "#f97316" },
      ],
      metrics: {
        bars: [
          { label: "Bronze", value: 100, color: "#cd7f32" },
          { label: "Silver", value: 85, color: "#c0c0c0" },
          { label: "Gold", value: 70, color: "#ffd700" },
          { label: "Reports", value: 60, color: "#f97316" },
        ],
        kpis: [
          { value: "15+", label: "Years of Data", color: "#10b981" },
          { value: "NIBRS", label: "FBI Compliant", color: "#3b82f6" },
          { value: "100%", label: "Data Quality", color: "#22d3ee" },
        ],
      },
      architectureLayers: [
        { name: "Source", techs: ["CSV Files", "LAPD Open Data"], color: "#10b981" },
        { name: "Orchestration", techs: ["Apache Airflow"], color: "#06b6d4" },
        { name: "Processing", techs: ["Apache Spark", "PySpark"], color: "#3b82f6" },
        { name: "Storage", techs: ["Medallion Architecture", "Delta Lake"], color: "#8b5cf6" },
        { name: "Analytics", techs: ["Power BI", "SQL Analytics"], color: "#f97316" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-gray-50 dark:bg-data-dark-950 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pixel text-gray-900 dark:text-white mb-4 md:mb-4 leading-tight">
            Selected Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-retro text-gray-500 dark:text-gray-400 mb-10 md:mb-12 max-w-2xl leading-relaxed">
            Enterprise-scale data engineering solutions and pipeline
            implementations.
          </p>
          {/* Pipeline legend */}
          <div className="flex flex-wrap gap-3 md:gap-4 -mt-4 md:-mt-6 mb-6 md:mb-6">
            {[
              { type: "Source", color: "#10b981" },
              { type: "Processing", color: "#3b82f6" },
              { type: "Storage", color: "#8b5cf6" },
              { type: "Analytics", color: "#f97316" },
              { type: "Orchestration", color: "#06b6d4" },
            ].map((item) => (
              <div key={item.type} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-sm sm:text-base font-retro text-gray-400 dark:text-gray-500">{item.type}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-8 md:space-y-8">
          {projects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
              className="bg-white/80 dark:bg-data-dark-800/30 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl overflow-hidden group shadow-sm dark:shadow-none"
            >
              {/* Project Header */}
              <div className="p-5 md:p-6 pb-4 md:pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-pixelify text-gray-900 dark:text-white mb-2 leading-snug break-words">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-base md:text-lg font-retro text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                  <Link href={`/project/${project.id}`}>
                    <span className="text-base md:text-base font-medium font-retro text-pipeline-cyan inline-flex items-center hover:gap-2 transition-all duration-300 flex-shrink-0 cursor-pointer min-h-[44px]">
                      View Details
                      <ArrowRight className="ml-1 h-5 w-5 md:h-5 md:w-5" />
                    </span>
                  </Link>
                </div>

                {/* ETL Pipeline Flow */}
                <div className="mb-4 md:mb-4 bg-gray-100/80 dark:bg-data-dark-900/30 border border-gray-200 dark:border-pipeline-blue/10 rounded-lg p-3 md:p-3 overflow-x-auto scrollbar-thin">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <span className="text-sm md:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      ETL Pipeline Stages
                    </span>
                  </div>
                  <ETLPipelineFlow stages={project.pipelineStages} />
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 md:gap-2 mb-4 md:mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm sm:text-base text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-data-dark-700/60 border border-gray-200 dark:border-pipeline-blue/10 rounded px-2.5 py-1 font-retro"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pipeline Diagram */}
              <div className="px-5 md:px-6 pb-4 md:pb-4">
                <div className="bg-gray-100/80 dark:bg-data-dark-900/50 border border-gray-200 dark:border-pipeline-blue/10 rounded-lg p-4 md:p-4 overflow-x-auto scrollbar-thin">
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <span className="text-sm md:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      Data Pipeline Architecture
                    </span>
                    <span className="text-xs font-retro text-pipeline-green flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-pipeline-green animate-pulse" />
                      PIPELINE
                    </span>
                  </div>
                  <DataFlowDiagram
                    nodes={project.pipeline}
                    compact={false}
                    animated={true}
                  />
                </div>
              </div>

              {/* Metrics & Architecture Row */}
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* KPI Cards */}
                  {project.metrics.kpis && (
                    <div className="space-y-3">
                      <span className="text-sm md:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        Key Metrics
                      </span>
                      <div className="space-y-2">
                        {project.metrics.kpis.map((kpi, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 md:gap-3 rounded-lg border px-3 md:px-3 py-2.5"
                            style={{
                              backgroundColor: kpi.color + "08",
                              borderColor: kpi.color + "20",
                            }}
                          >
                            <span className="text-2xl md:text-2xl font-bold font-retro flex-shrink-0" style={{ color: kpi.color }}>
                              {kpi.value}
                            </span>
                            <span className="text-base md:text-base text-gray-500 dark:text-gray-400 font-retro">{kpi.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Architecture Stack */}
                  <div className="space-y-3">
                    <span className="text-sm md:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      Architecture Stack
                    </span>
                    <div className="space-y-2">
                      {project.architectureLayers.map((layer, i) => (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row sm:items-center gap-2 rounded border px-3 py-2 min-w-0"
                          style={{
                            backgroundColor: layer.color + "08",
                            borderColor: layer.color + "20",
                          }}
                        >
                          <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
                            <div
                              className="w-2 h-2 rounded-full flex-shrink-0"
                              style={{ backgroundColor: layer.color }}
                            />
                            <span className="text-sm md:text-sm font-retro font-bold uppercase truncate" style={{ color: layer.color }}>
                              {layer.name}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 sm:ml-auto">
                            {layer.techs.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs sm:text-xs font-retro px-2 py-1 rounded whitespace-nowrap"
                                style={{
                                  color: layer.color,
                                  backgroundColor: layer.color + "15",
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
