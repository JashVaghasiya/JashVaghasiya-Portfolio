import { motion } from "framer-motion";
import { FlowConnector } from "./FlowingParticle";
import { NodeType, nodeColors } from "./TechNode";

export interface PipelineNode {
  label: string;
  type: NodeType;
  metric?: string;
}

interface DataFlowDiagramProps {
  nodes: PipelineNode[];
  /** Label text below the pipeline */
  caption?: string;
  /** Compact mode for smaller spaces */
  compact?: boolean;
  /** Show animated particles */
  animated?: boolean;
}

export default function DataFlowDiagram({ nodes, caption, compact = false, animated = true }: DataFlowDiagramProps) {
  const nodeSize = compact ? "sm" : "md";

  const sizeStyles = {
    sm: { minW: 72, h: 56, text: "text-sm font-retro", metric: "text-xs font-retro", badge: "text-xs font-retro", gap: 28 },
    md: { minW: 96, h: 68, text: "text-base font-retro", metric: "text-sm font-retro", badge: "text-xs font-retro", gap: 40 },
  };

  const s = sizeStyles[nodeSize];

  return (
    <div className="w-full">
      {/* Scrollable pipeline container */}
      <div className="overflow-x-auto pb-2">
        <div className="flex items-center justify-start min-w-max px-2 py-4">
          {nodes.map((node, index) => {
            const colors = nodeColors[node.type];
            return (
              <div key={index} className="flex items-center">
                {/* Node */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex flex-col items-center justify-center rounded-lg border font-mono cursor-default group flex-shrink-0"
                  style={{
                    minWidth: s.minW,
                    height: s.h,
                    backgroundColor: colors.bg,
                    borderColor: colors.border + "40",
                  }}
                >
                  {/* Pulse glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ boxShadow: `0 0 15px ${colors.glow}` }}
                  />

                  {/* Type badge */}
                  <div
                    className={`absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded ${s.badge} font-bold uppercase tracking-wider whitespace-nowrap`}
                    style={{ backgroundColor: colors.border + "25", color: colors.text }}
                  >
                    {node.type}
                  </div>

                  <span
                    className={`${s.text} font-semibold text-center leading-tight px-2`}
                    style={{ color: colors.text }}
                  >
                    {node.label}
                  </span>

                  {node.metric && (
                    <span className={`${s.metric} mt-0.5 opacity-60`} style={{ color: colors.text }}>
                      {node.metric}
                    </span>
                  )}
                </motion.div>

                {/* Connector arrow */}
                {index < nodes.length - 1 && (
                  <FlowConnector
                    color={colors.border}
                    width={s.gap}
                    particleCount={2}
                    animated={animated}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm font-retro text-gray-500 mt-1"
        >
          {caption}
        </motion.p>
      )}
    </div>
  );
}
