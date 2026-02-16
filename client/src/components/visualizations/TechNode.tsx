import { motion } from "framer-motion";

export type NodeType = "source" | "process" | "storage" | "analytics" | "orchestration";

const nodeColors: Record<NodeType, { bg: string; border: string; glow: string; text: string }> = {
  source: { bg: "rgba(16,185,129,0.12)", border: "#10b981", glow: "rgba(16,185,129,0.25)", text: "#34d399" },
  process: { bg: "rgba(59,130,246,0.12)", border: "#3b82f6", glow: "rgba(59,130,246,0.25)", text: "#60a5fa" },
  storage: { bg: "rgba(139,92,246,0.12)", border: "#8b5cf6", glow: "rgba(139,92,246,0.25)", text: "#a78bfa" },
  analytics: { bg: "rgba(249,115,22,0.12)", border: "#f97316", glow: "rgba(249,115,22,0.25)", text: "#fb923c" },
  orchestration: { bg: "rgba(6,182,212,0.12)", border: "#06b6d4", glow: "rgba(6,182,212,0.25)", text: "#22d3ee" },
};

interface TechNodeProps {
  label: string;
  type: NodeType;
  metric?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  delay?: number;
  pulse?: boolean;
}

export default function TechNode({ label, type, metric, icon, size = "md", delay = 0, pulse = true }: TechNodeProps) {
  const colors = nodeColors[type];
  const sizes = {
    sm: { w: "w-20", h: "h-20", text: "text-[10px]", metric: "text-[8px]", icon: "w-4 h-4" },
    md: { w: "w-28", h: "h-24", text: "text-xs", metric: "text-[10px]", icon: "w-5 h-5" },
    lg: { w: "w-32", h: "h-28", text: "text-sm", metric: "text-xs", icon: "w-6 h-6" },
  };
  const s = sizes[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`relative ${s.w} ${s.h} flex flex-col items-center justify-center rounded-xl border font-mono cursor-default group`}
      style={{
        backgroundColor: colors.bg,
        borderColor: colors.border + "40",
      }}
      whileHover={{ scale: 1.05, borderColor: colors.border }}
    >
      {/* Pulse glow */}
      {pulse && (
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{ boxShadow: `0 0 20px ${colors.glow}` }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay }}
        />
      )}

      {icon && <div className={`${s.icon} mb-1`} style={{ color: colors.text }}>{icon}</div>}
      <span className={`${s.text} font-semibold text-center leading-tight px-1`} style={{ color: colors.text }}>
        {label}
      </span>
      {metric && (
        <span className={`${s.metric} mt-0.5 opacity-60`} style={{ color: colors.text }}>
          {metric}
        </span>
      )}

      {/* Type badge */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded text-[7px] font-bold uppercase tracking-wider"
        style={{ backgroundColor: colors.border + "30", color: colors.text }}
      >
        {type}
      </div>
    </motion.div>
  );
}

export { nodeColors };
