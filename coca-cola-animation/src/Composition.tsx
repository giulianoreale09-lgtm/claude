import { useCurrentFrame, useVideoConfig, interpolate, Easing, AbsoluteFill } from "remotion";
import { Scene3D } from "./Scene";

const TOTAL_FRAMES = 300;

function TextOverlay({ scrollProgress }: { scrollProgress: number }) {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(
    frame,
    [0, 20, 80, 100],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  const taglineOpacity = interpolate(
    frame,
    [110, 130, 200, 220],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  const refreshOpacity = interpolate(
    frame,
    [230, 250, TOTAL_FRAMES - 10, TOTAL_FRAMES],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  const titleY = interpolate(
    frame,
    [0, 20],
    [30, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  const taglineY = interpolate(
    frame,
    [110, 130],
    [30, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  const refreshY = interpolate(
    frame,
    [230, 250],
    [30, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          width: "100%",
          textAlign: "center",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: 90,
            fontWeight: "bold",
            color: "#ffffff",
            letterSpacing: 6,
            textShadow: "0 0 40px rgba(244,0,9,0.8), 0 4px 20px rgba(0,0,0,0.9)",
          }}
        >
          Coca‑Cola
        </div>
      </div>

      {/* Tagline */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          width: "100%",
          textAlign: "center",
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: 42,
            fontStyle: "italic",
            color: "#ffffff",
            letterSpacing: 4,
            textShadow: "0 0 30px rgba(244,0,9,0.7), 0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          Open Happiness
        </div>
      </div>

      {/* Refresh line */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          width: "100%",
          textAlign: "center",
          opacity: refreshOpacity,
          transform: `translateY(${refreshY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: 28,
            color: "#ffcccc",
            letterSpacing: 8,
            textTransform: "uppercase",
            textShadow: "0 0 20px rgba(244,0,9,0.6), 0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          Taste the Feeling
        </div>
      </div>

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,0,2,0.75) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Red glow at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background:
            "linear-gradient(to top, rgba(180,0,10,0.35), transparent)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
}

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const scrollProgress = interpolate(frame, [0, TOTAL_FRAMES], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: "#1a0005" }}>
      <Scene3D scrollProgress={scrollProgress} width={width} height={height} />
      <TextOverlay scrollProgress={scrollProgress} />
    </AbsoluteFill>
  );
};
