import { motion } from "framer-motion";
import DataFlowDiagram, { PipelineNode } from "./visualizations/DataFlowDiagram";

interface ExperienceData {
  title: string;
  company: string;
  period: string;
  bullets: string[];
  tech: string;
  pipeline: PipelineNode[];
  pipelineCaption: string;
  metrics?: { value: string; label: string; color: string }[];
}

export default function ExperienceSection() {
  const experiences: ExperienceData[] = [
    {
      title: "Data Engineer",
      company: "SpicyChat.AI",
      period: "August 2024 - Present",
      bullets: [
        "Building enterprise-scale data pipelines processing 850K+ daily records using Azure Data Factory, Databricks, and Synapse Analytics.",
        "Achieved 73% faster queries and 69% processing time reduction through pipeline optimization.",
        "Architecting real-time streaming solutions with Kafka and Spark, implementing comprehensive data lakehouse governance with Unity Catalog.",
      ],
      tech: "Azure, Databricks, Kafka, Spark, Synapse, Unity Catalog",
      pipeline: [
        { label: "Postgres", type: "source", metric: "850K/day" },
        { label: "Data Factory", type: "orchestration", metric: "Orchestrate" },
        { label: "Databricks", type: "process", metric: "Transform" },
        { label: "Synapse", type: "storage", metric: "Warehouse" },
        { label: "Power BI", type: "analytics", metric: "Dashboards" },
      ],
      pipelineCaption: "850K+ records/day production pipeline",
      metrics: [
        { value: "850K+", label: "Records/Day", color: "#10b981" },
        { value: "73%", label: "Faster Queries", color: "#3b82f6" },
        { value: "69%", label: "Time Saved", color: "#22d3ee" },
      ],
    },
    {
      title: "Data Developer - Co-op",
      company: "SpicyChat.AI",
      period: "May 2024 - August 2024",
      bullets: [
        "Developed RESTful web services and API integrations using Python and JavaScript to process 850K+ daily records.",
        "Designed database schemas for both SQL and NoSQL systems, translating business requirements into technical solutions.",
        "Reduced sprint delivery time by 33% through Agile methodology and efficient cross-team collaboration.",
      ],
      tech: "Python, JavaScript, SQL, NoSQL, REST APIs",
      pipeline: [
        { label: "REST APIs", type: "source", metric: "Ingestion" },
        { label: "Python", type: "process", metric: "Processing" },
        { label: "SQL/NoSQL", type: "storage", metric: "Storage" },
        { label: "Analytics", type: "analytics", metric: "Insights" },
      ],
      pipelineCaption: "API-driven data processing pipeline",
      metrics: [
        { value: "850K+", label: "Daily Records", color: "#10b981" },
        { value: "33%", label: "Faster Delivery", color: "#8b5cf6" },
      ],
    },
    {
      title: "Data Engineer",
      company: "Dione Apps",
      period: "January 2021 - November 2022",
      bullets: [
        "Developed scalable data migration strategies using Azure Data Factory, PySpark, and Synapse Analytics to transfer terabytes of data with zero data loss.",
        "Designed end-to-end ETL pipelines optimizing workflows handling 100GB+ loads.",
        "Achieved 80% reduction in operational issues and 60% reduction in manual interventions.",
      ],
      tech: "Azure Data Factory, PySpark, Synapse Analytics, ETL",
      pipeline: [
        { label: "Sources", type: "source", metric: "TB-scale" },
        { label: "Data Factory", type: "orchestration", metric: "ETL" },
        { label: "PySpark", type: "process", metric: "Transform" },
        { label: "Synapse", type: "storage", metric: "100GB+ loads" },
      ],
      pipelineCaption: "TB-scale data migration pipeline",
      metrics: [
        { value: "0%", label: "Data Loss", color: "#10b981" },
        { value: "80%", label: "Fewer Issues", color: "#3b82f6" },
        { value: "60%", label: "Less Manual Work", color: "#f97316" },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-24 bg-white dark:bg-data-dark-950 overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-pixel text-gray-900 dark:text-white mb-3 leading-tight">Experience</h2>
          <p className="text-base sm:text-lg md:text-xl font-retro text-gray-500 dark:text-gray-400 mb-10 md:mb-12 leading-relaxed">
            Data pipelines built and impact delivered across roles.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px">
            <div className="w-full h-full" style={{
              background: "linear-gradient(to bottom, #22d3ee30, #3b82f630, #8b5cf630)"
            }} />
            {/* Animated dots flowing down the timeline */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-pipeline-cyan"
                style={{ boxShadow: "0 0 6px #22d3ee50" }}
                animate={{ top: ["-2%", "102%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 6, delay: i * 2, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </div>

          <div className="space-y-10 md:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-8 lg:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-2 w-px h-px">
                  <div className="absolute -left-[5px] -top-[5px] w-[11px] h-[11px] rounded-full bg-pipeline-cyan border-2 border-white dark:border-data-dark-950" />
                  <motion.div
                    className="absolute -left-[8px] -top-[8px] w-[17px] h-[17px] rounded-full border border-pipeline-cyan/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Card */}
                <div className="bg-gray-50/80 dark:bg-data-dark-800/30 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl overflow-hidden shadow-sm dark:shadow-none">
                  {/* Header */}
                  <div className="p-5 md:p-6 pb-4 md:pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold font-pixelify text-gray-900 dark:text-white break-words">
                          {exp.company}
                        </h3>
                        <p className="text-base sm:text-base md:text-lg text-pipeline-cyan mt-1 font-retro">
                          {exp.title}
                        </p>
                      </div>
                      <p className="text-base md:text-base text-gray-400 dark:text-gray-500 sm:text-right flex-shrink-0 font-retro">
                        {exp.period}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-4 md:mb-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-pipeline-cyan/40 rounded-full mt-2 mr-3 md:mr-3 flex-shrink-0" />
                          <span className="text-base sm:text-base md:text-lg font-retro text-gray-500 dark:text-gray-400 leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics Section */}
                  {exp.metrics && (
                    <div className="px-5 md:px-6 pb-4 md:pb-4">
                      <div className="bg-gray-100/80 dark:bg-data-dark-900/50 border border-gray-200 dark:border-pipeline-blue/10 rounded-lg p-3 md:p-3">
                        <span className="text-sm md:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider block mb-3">
                          Key Achievements
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {exp.metrics.map((metric, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 rounded border px-3 md:px-3 py-2.5"
                              style={{
                                backgroundColor: metric.color + "08",
                                borderColor: metric.color + "20",
                              }}
                            >
                              <span className="text-2xl md:text-2xl font-bold font-retro flex-shrink-0" style={{ color: metric.color }}>
                                {metric.value}
                              </span>
                              <span className="text-base md:text-base text-gray-500 dark:text-gray-400 font-retro">{metric.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pipeline Diagram */}
                  <div className="px-5 md:px-6 pb-4 md:pb-4">
                    <div className="bg-gray-100/80 dark:bg-data-dark-900/50 border border-gray-200 dark:border-pipeline-blue/10 rounded-lg p-3 md:p-3 overflow-x-auto scrollbar-thin">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <span className="text-sm md:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                          Pipeline Built
                        </span>
                        <span className="text-xs font-retro text-pipeline-green flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-pipeline-green animate-pulse" />
                          ACTIVE
                        </span>
                      </div>
                      <DataFlowDiagram
                        nodes={exp.pipeline}
                        caption={exp.pipelineCaption}
                        compact={true}
                        animated={true}
                      />
                    </div>
                  </div>


                  {/* Tech stack footer */}
                  <div className="px-5 md:px-6 pb-5">
                    <div className="flex flex-wrap gap-2 border-t border-gray-200 dark:border-pipeline-blue/10 pt-4">
                      {exp.tech.split(", ").map((t) => (
                        <span
                          key={t}
                          className="text-sm sm:text-base font-retro text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-data-dark-700/40 border border-gray-200 dark:border-pipeline-blue/10 rounded px-2.5 py-1"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
