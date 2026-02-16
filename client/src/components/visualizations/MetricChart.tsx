import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Mini line chart - great for trends */
interface LineChartProps {
  data: number[];
  color?: string;
  height?: number;
  width?: number;
  label?: string;
  animated?: boolean;
}

export function MiniLineChart({ data, color = "#22d3ee", height = 48, width = 120, label, animated = true }: LineChartProps) {
  const [show, setShow] = useState(!animated);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!animated || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setShow(true); },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const padding = 4;

  const points = data.map((val, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = padding + (1 - (val - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  }).join(" ");

  const areaPoints = `${padding},${height - padding} ${points} ${width - padding},${height - padding}`;

  return (
    <div className="flex flex-col items-center">
      <svg ref={ref} width={width} height={height} className="overflow-visible">
        {/* Gradient fill */}
        <defs>
          <linearGradient id={`lineGrad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {show && (
          <>
            <motion.polygon
              points={areaPoints}
              fill={`url(#lineGrad-${color.replace('#', '')})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.polyline
              points={points}
              fill="none"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            {/* End dot */}
            <motion.circle
              cx={parseFloat(points.split(" ").pop()!.split(",")[0])}
              cy={parseFloat(points.split(" ").pop()!.split(",")[1])}
              r="3"
              fill={color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
            </motion.circle>
          </>
        )}
      </svg>
      {label && <span className="text-[9px] font-mono text-gray-500 mt-1">{label}</span>}
    </div>
  );
}

/** Mini bar chart */
interface BarChartProps {
  data: { label: string; value: number; color?: string }[];
  height?: number;
  maxWidth?: number;
  animated?: boolean;
}

export function MiniBarChart({ data, height = 60, maxWidth = 160, animated = true }: BarChartProps) {
  const [show, setShow] = useState(!animated);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setShow(true); },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  const max = Math.max(...data.map(d => d.value));

  return (
    <div ref={ref} className="flex items-end gap-1.5" style={{ height, maxWidth }}>
      {data.map((item, i) => (
        <div key={i} className="flex flex-col items-center flex-1" style={{ height: "100%" }}>
          <div className="flex-1 w-full flex items-end">
            <motion.div
              className="w-full rounded-t-sm"
              style={{ backgroundColor: item.color || "#22d3ee" }}
              initial={{ height: 0 }}
              animate={show ? { height: `${(item.value / max) * 100}%` } : { height: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            />
          </div>
          <span className="text-[7px] font-mono text-gray-500 mt-1 truncate w-full text-center">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/** KPI Card with optional sparkline */
interface KPICardProps {
  value: string;
  label: string;
  sublabel?: string;
  color?: string;
  trend?: "up" | "down" | "neutral";
  sparkline?: number[];
}

export function KPICard({ value, label, sublabel, color = "#22d3ee", trend, sparkline }: KPICardProps) {
  return (
    <div
      className="rounded-lg border px-4 py-3 font-mono"
      style={{
        backgroundColor: color + "08",
        borderColor: color + "25",
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="text-xl font-bold" style={{ color }}>{value}</div>
          <div className="text-[10px] font-semibold text-gray-400 mt-0.5">{label}</div>
          {sublabel && <div className="text-[9px] text-gray-600 mt-0.5">{sublabel}</div>}
        </div>
        <div className="flex flex-col items-end">
          {trend && (
            <span className={`text-[10px] ${trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-gray-400"}`}>
              {trend === "up" ? "^" : trend === "down" ? "v" : "-"}
            </span>
          )}
          {sparkline && <MiniLineChart data={sparkline} color={color} height={24} width={60} />}
        </div>
      </div>
    </div>
  );
}

/** Before/After comparison chart */
interface ComparisonChartProps {
  before: number;
  after: number;
  label: string;
  unit?: string;
  color?: string;
}

export function ComparisonChart({ before, after, label, unit = "", color = "#22d3ee" }: ComparisonChartProps) {
  const improvement = Math.round(((before - after) / before) * 100);
  const max = Math.max(before, after);

  return (
    <div className="font-mono">
      <div className="text-[9px] text-gray-500 mb-1.5">{label}</div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-[8px] text-gray-500 w-10">Before</span>
          <div className="flex-1 h-3 bg-gray-800 rounded-sm overflow-hidden">
            <motion.div
              className="h-full rounded-sm bg-gray-600"
              initial={{ width: 0 }}
              whileInView={{ width: `${(before / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <span className="text-[9px] text-gray-500 w-12 text-right">{before}{unit}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] w-10" style={{ color }}>After</span>
          <div className="flex-1 h-3 bg-gray-800 rounded-sm overflow-hidden">
            <motion.div
              className="h-full rounded-sm"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${(after / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <span className="text-[9px] w-12 text-right" style={{ color }}>{after}{unit}</span>
        </div>
      </div>
      <div className="text-right mt-1">
        <span className="text-[10px] font-bold" style={{ color }}>{improvement}% improvement</span>
      </div>
    </div>
  );
}
