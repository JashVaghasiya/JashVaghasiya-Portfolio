import { motion } from "framer-motion";

interface FlowingParticleProps {
  /** Color of the particle */
  color?: string;
  /** Duration in seconds for one complete flow */
  duration?: number;
  /** Delay before starting */
  delay?: number;
  /** Direction of particle flow */
  direction?: "horizontal" | "vertical";
  /** Size of particle in px */
  size?: number;
}

export default function FlowingParticle({
  color = "#22d3ee",
  duration = 2,
  delay = 0,
  direction = "horizontal",
  size = 6,
}: FlowingParticleProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color}50`,
        ...(isHorizontal ? { top: "50%", marginTop: -size / 2 } : { left: "50%", marginLeft: -size / 2 }),
      }}
      animate={
        isHorizontal
          ? { left: ["-5%", "105%"], opacity: [0, 1, 1, 0] }
          : { top: ["-5%", "105%"], opacity: [0, 1, 1, 0] }
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

/** A connector arrow between two nodes with flowing particles */
interface FlowConnectorProps {
  color?: string;
  particleCount?: number;
  width?: number;
  direction?: "horizontal" | "vertical";
  animated?: boolean;
}

export function FlowConnector({
  color = "#22d3ee",
  particleCount = 3,
  width = 60,
  direction = "horizontal",
  animated = true,
}: FlowConnectorProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className="relative flex items-center justify-center flex-shrink-0"
      style={
        isHorizontal
          ? { width, height: 20 }
          : { height: width, width: 20 }
      }
    >
      {/* Line */}
      <div
        className="absolute"
        style={
          isHorizontal
            ? { width: "100%", height: 2, backgroundColor: color + "30", top: "50%", marginTop: -1 }
            : { height: "100%", width: 2, backgroundColor: color + "30", left: "50%", marginLeft: -1 }
        }
      />

      {/* Dashed pattern */}
      <svg
        className="absolute"
        style={
          isHorizontal
            ? { width: "100%", height: 20, top: 0 }
            : { width: 20, height: "100%", left: 0 }
        }
      >
        {isHorizontal ? (
          <line
            x1="0"
            y1="10"
            x2={width}
            y2="10"
            stroke={color + "50"}
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ) : (
          <line
            x1="10"
            y1="0"
            x2="10"
            y2={width}
            stroke={color + "50"}
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        )}
      </svg>

      {/* Arrow */}
      <div
        className="absolute"
        style={
          isHorizontal
            ? { right: -2, top: "50%", marginTop: -4 }
            : { bottom: -2, left: "50%", marginLeft: -4 }
        }
      >
        <svg width="8" height="8" viewBox="0 0 8 8">
          {isHorizontal ? (
            <path d="M0 0 L8 4 L0 8 Z" fill={color + "70"} />
          ) : (
            <path d="M0 0 L8 0 L4 8 Z" fill={color + "70"} />
          )}
        </svg>
      </div>

      {/* Particles */}
      {animated &&
        Array.from({ length: particleCount }).map((_, i) => (
          <FlowingParticle
            key={i}
            color={color}
            duration={1.5 + Math.random()}
            delay={i * (1.5 / particleCount)}
            direction={direction}
            size={4}
          />
        ))}
    </div>
  );
}
