import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MiniLineChart, MiniBarChart } from "./visualizations/MetricChart";
import DataFlowDiagram, { PipelineNode } from "./visualizations/DataFlowDiagram";

function MetricCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 72;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/attached_assets/Jash Vaghasiya-Engineer_1751669132819.docx";
    link.download = "Jash_Vaghasiya_Resume.docx";
    link.click();
  };

  const metrics = [
    {
      value: 850,
      suffix: "K+",
      label: "Daily Records Processed",
      sublabel: "Enterprise-scale pipeline throughput",
      sparkline: [20, 35, 28, 45, 52, 68, 75, 82, 90, 85, 92, 100],
    },
    {
      value: 73,
      suffix: "%",
      label: "Faster Query Performance",
      sublabel: "Optimized data retrieval speed",
      progress: 73,
    },
    {
      value: 69,
      suffix: "%",
      label: "Processing Time Saved",
      sublabel: "Pipeline efficiency improvement",
      progress: 69,
    },
  ];

  const techIcons = [
    { name: "Python", color: "#3776AB" },
    { name: "Spark", color: "#E25A1C" },
    { name: "Databricks", color: "#FF3621" },
    { name: "Azure", color: "#0078D4" },
    { name: "Kafka", color: "#231F20" },
    { name: "SQL", color: "#4479A1" },
    { name: "Airflow", color: "#017CEE" },
    { name: "Docker", color: "#2496ED" },
  ];

  const pipelineNodes: PipelineNode[] = [
    { label: "Raw Data", type: "source", metric: "850K/day" },
    { label: "Ingestion", type: "orchestration", metric: "ADF + Kafka" },
    { label: "Processing", type: "process", metric: "Spark/PySpark" },
    { label: "Storage", type: "storage", metric: "Delta Lake" },
    { label: "Analytics", type: "analytics", metric: "Power BI" },
  ];

  // Chart data for volume trend
  const volumeTrendData = [120, 210, 340, 420, 510, 580, 620, 690, 730, 780, 820, 850];

  // Chart data for performance improvement
  const perfBarData = [
    { label: "Query", value: 73, color: "#22d3ee" },
    { label: "ETL", value: 69, color: "#3b82f6" },
    { label: "Ops", value: 80, color: "#10b981" },
    { label: "Deploy", value: 33, color: "#8b5cf6" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-data-dark-900 overflow-hidden"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.04] overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{
        background: "radial-gradient(ellipse at 50% 30%, rgba(34,211,238,0.04) 0%, transparent 60%)",
      }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-6 py-16 sm:py-20 md:py-28 overflow-hidden">
        {/* Terminal-style header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 w-full max-w-2xl mx-auto"
        >
          <div className="bg-white/70 dark:bg-data-dark-800/60 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/20 rounded-xl overflow-hidden shadow-lg shadow-gray-200/50 dark:shadow-none w-full">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-gray-200 dark:border-pipeline-blue/10 bg-gray-50/80 dark:bg-data-dark-800/40">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/60"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/60"></div>
              <span className="ml-2 sm:ml-3 text-xs sm:text-sm text-gray-400 dark:text-gray-500 font-retro truncate">jash@data-engineer ~ </span>
            </div>
            {/* Terminal content */}
            <div className="px-4 sm:px-5 md:px-6 py-5 sm:py-6">
              <div className="font-retro text-sm sm:text-base text-gray-400 dark:text-gray-500 mb-1">
                <span className="text-pipeline-green">$</span> whoami
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-pixel text-gray-900 dark:text-white tracking-tight leading-tight mb-2">
                Jash Vaghasiya
              </h1>
              <div className="font-retro text-sm sm:text-base text-gray-400 dark:text-gray-500 mb-1 mt-3 sm:mt-4">
                <span className="text-pipeline-green">$</span> role --current
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl text-pipeline-cyan font-semibold font-pixelify">
                Data Engineer
              </p>
              <div className="font-retro text-sm sm:text-base text-gray-400 dark:text-gray-500 mt-3 sm:mt-4 mb-1">
                <span className="text-pipeline-green">$</span> describe --brief
              </div>
              <p className="text-base sm:text-lg md:text-xl font-retro text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                Building enterprise-scale data pipelines and transforming raw data into
                actionable insights. Specializing in Azure, Databricks, and real-time
                streaming architectures.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Live Charts Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8 w-full max-w-xl mx-auto"
        >
          {/* Data Volume Trend */}
          <div className="bg-white/70 dark:bg-data-dark-800/40 backdrop-blur-xl border border-gray-200 dark:border-pipeline-cyan/15 rounded-xl p-4 sm:p-5 shadow-sm dark:shadow-none w-full min-w-0 overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider truncate">Data Volume Trend</span>
              <span className="text-xs font-retro text-pipeline-green flex-shrink-0">LIVE</span>
            </div>
            <div className="flex items-end justify-between gap-3 sm:gap-4 overflow-hidden">
              <div className="min-w-0">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white font-retro">850K</div>
                <div className="text-sm sm:text-base text-gray-400 dark:text-gray-500 font-retro">records/day</div>
              </div>
              <div className="flex-shrink-0">
                <MiniLineChart data={volumeTrendData} color="#22d3ee" height={44} width={90} label="" />
              </div>
            </div>
          </div>

          {/* Performance Improvement */}
          <div className="bg-white/70 dark:bg-data-dark-800/40 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-4 sm:p-5 shadow-sm dark:shadow-none w-full min-w-0 overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider truncate">Performance Gains</span>
              <span className="text-xs font-retro text-pipeline-cyan flex-shrink-0 whitespace-nowrap">% Improvement</span>
            </div>
            <div className="overflow-hidden">
              <MiniBarChart data={perfBarData} height={52} maxWidth={200} />
            </div>
          </div>
        </motion.div>

        {/* Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mb-6 sm:mb-8 w-full max-w-4xl mx-auto"
        >
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-data-dark-800/40 backdrop-blur-xl border border-gray-200 dark:border-pipeline-cyan/20 rounded-xl p-4 sm:p-5 hover:-translate-y-0.5 transition-transform duration-400 shadow-sm dark:shadow-none w-full min-w-0"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1 font-pixelify">
                <MetricCounter end={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-base sm:text-lg md:text-xl font-medium text-pipeline-cyan mb-1 font-retro">
                {metric.label}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 dark:text-gray-500 mb-3 font-retro">
                {metric.sublabel}
              </p>

              {/* Sparkline visualization */}
              {metric.sparkline && (
                <div className="flex items-end gap-[3px] h-8">
                  {metric.sparkline.map((val, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-pipeline-cyan/30 rounded-sm"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>
              )}

              {/* Progress bar visualization */}
              {metric.progress && (
                <div className="w-full h-2 bg-gray-200 dark:bg-data-dark-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-pipeline-cyan/60 to-pipeline-cyan"
                    style={{ width: `${metric.progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Pipeline Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-8 sm:mb-10 w-full max-w-4xl mx-auto overflow-hidden"
        >
          <div className="bg-white/70 dark:bg-data-dark-800/30 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/15 rounded-xl p-4 sm:p-5 shadow-sm dark:shadow-none overflow-x-auto scrollbar-thin w-full">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <span className="text-xs sm:text-sm font-retro text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                End-to-End Pipeline Architecture
              </span>
              <span className="text-xs font-retro text-pipeline-green flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-pipeline-green animate-pulse" />
                OPERATIONAL
              </span>
            </div>
            <DataFlowDiagram
              nodes={pipelineNodes}
              caption="850K+ records/day flowing through pipeline"
              animated={true}
            />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="text-base sm:text-lg font-medium font-retro text-white dark:text-data-dark-950 bg-pipeline-cyan hover:bg-pipeline-cyan/90 px-6 sm:px-7 md:px-8 py-3 rounded-lg transition-colors duration-300 min-h-[48px]"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-base sm:text-lg font-medium font-retro text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-pipeline-blue/30 hover:border-pipeline-cyan/50 hover:text-gray-900 dark:hover:text-white px-6 sm:px-7 md:px-8 py-3 rounded-lg transition-all duration-300 min-h-[48px]"
          >
            Contact
          </button>
          <button
            onClick={handleDownloadResume}
            className="text-base sm:text-lg font-medium font-retro text-gray-500 dark:text-gray-400 hover:text-pipeline-cyan px-6 sm:px-7 md:px-8 py-3 rounded-lg transition-colors duration-300 min-h-[48px]"
          >
            Download Resume
          </button>
        </div>

        {/* Tech Icons - Static */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4 mb-8 sm:mb-10">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 bg-white/70 dark:bg-data-dark-800/40 backdrop-blur-xl border border-gray-200 dark:border-pipeline-blue/10 rounded-lg px-3 sm:px-4 py-2 hover:-translate-y-0.5 transition-transform duration-400 shadow-sm dark:shadow-none"
            >
              <div
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-medium font-retro">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 md:gap-6 text-sm sm:text-base font-retro text-gray-400 dark:text-gray-500 text-center px-2">
          <span className="break-all">jashmukeshvaghasiya@gmail.com</span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">&middot;</span>
          <span>+1 (437) 436-3011</span>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">&middot;</span>
          <span>Canada</span>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-5">
          <a
            href="https://www.linkedin.com/in/jash-vaghasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base font-retro text-gray-400 dark:text-gray-500 hover:text-pipeline-cyan transition-colors duration-300 min-h-[44px] flex items-center"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/JashVaghasiya-DE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base font-retro text-gray-400 dark:text-gray-500 hover:text-pipeline-cyan transition-colors duration-300 min-h-[44px] flex items-center"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
