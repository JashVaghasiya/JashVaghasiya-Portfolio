import { motion } from "framer-motion";
import { NodeType, nodeColors } from "./TechNode";

export interface LayerData {
  name: string;
  type: NodeType;
  technologies: string[];
  description?: string;
}

interface ArchitectureLayerProps {
  layers: LayerData[];
  title?: string;
}

export default function ArchitectureLayer({ layers, title }: ArchitectureLayerProps) {
  return (
    <div className="w-full">
      {title && (
        <h4 className="text-base font-retro text-gray-500 uppercase tracking-wider mb-4">{title}</h4>
      )}

      <div className="relative space-y-1">
        {/* Vertical flow arrow on the left */}
        <div className="absolute left-[18px] top-4 bottom-4 w-px hidden md:block">
          <div className="w-full h-full" style={{
            background: "linear-gradient(to bottom, #10b98150, #3b82f650, #8b5cf650, #f9731650)"
          }} />
          {/* Animated dots flowing down */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{
                background: "linear-gradient(to bottom, #22d3ee, #8b5cf6)",
                boxShadow: "0 0 8px #22d3ee50",
              }}
              animate={{ top: ["-5%", "105%"], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, delay: i * 1.3, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        {layers.map((layer, index) => {
          const colors = nodeColors[layer.type];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative md:ml-10 group"
            >
              {/* Connection dot */}
              <div
                className="absolute -left-[28px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 hidden md:block"
                style={{ borderColor: colors.border, backgroundColor: colors.bg }}
              />

              <div
                className="rounded-lg border px-4 py-3 cursor-default transition-all duration-300"
                style={{
                  backgroundColor: colors.bg,
                  borderColor: colors.border + "30",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = colors.border + "70";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${colors.glow}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = colors.border + "30";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  {/* Layer name */}
                  <div className="flex items-center gap-2 sm:w-44 flex-shrink-0">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colors.border }}
                    />
                    <span
                      className="text-base font-retro font-bold uppercase tracking-wider"
                      style={{ color: colors.text }}
                    >
                      {layer.name}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {layer.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-retro px-2 py-0.5 rounded border"
                        style={{
                          color: colors.text,
                          borderColor: colors.border + "30",
                          backgroundColor: colors.border + "10",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {layer.description && (
                  <p className="text-sm text-gray-500 mt-1.5 ml-4 font-retro">{layer.description}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
