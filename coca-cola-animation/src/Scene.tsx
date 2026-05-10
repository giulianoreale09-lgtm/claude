import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { ThreeCanvas } from "@remotion/three";
import { CocaColaCan } from "./CocaColaCan";
import * as THREE from "three";

const TOTAL_FRAMES = 300;

function Bubbles({ count = 40 }: { count?: number }) {
  const frame = useCurrentFrame();
  const bubbles = Array.from({ length: count }, (_, i) => {
    const seed = i * 137.508;
    const x = Math.sin(seed) * 2.5;
    const z = Math.cos(seed * 0.7) * 1.5 - 1.5;
    const speed = 0.015 + (i % 5) * 0.004;
    const size = 0.02 + (i % 4) * 0.015;
    const phaseOffset = (i * 23) % TOTAL_FRAMES;
    const y = ((frame * speed + phaseOffset) % 8) - 4;
    const opacity = interpolate(
      ((frame * speed + phaseOffset) % 8),
      [0, 1, 6, 8],
      [0, 0.6, 0.6, 0]
    );
    return { x, y, z, size, opacity };
  });

  return (
    <>
      {bubbles.map((b, i) => (
        <mesh key={i} position={[b.x, b.y, b.z]}>
          <sphereGeometry args={[b.size, 8, 8]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={b.opacity}
            roughness={0.05}
            metalness={0.1}
          />
        </mesh>
      ))}
    </>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.8, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#1a0005" roughness={0.8} metalness={0.2} />
    </mesh>
  );
}

function ReflectiveSurface() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.0, 0]} receiveShadow>
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial
        color="#F40009"
        roughness={0.05}
        metalness={0.9}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

function Lights({ scrollProgress }: { scrollProgress: number }) {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame * 0.05) * 0.1;

  return (
    <>
      <ambientLight intensity={0.8} color="#ffdddd" />
      {/* Key light - front right */}
      <spotLight
        position={[3, 5, 5]}
        angle={0.5}
        penumbra={0.4}
        intensity={5 * pulse}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      {/* Fill light - left */}
      <pointLight
        position={[-4, 2, 3]}
        intensity={3}
        color="#ffaaaa"
        distance={12}
      />
      {/* Red fill light from below */}
      <pointLight
        position={[0, -2, 3]}
        intensity={1.2}
        color="#FF3030"
        distance={8}
      />
      {/* Rim / back light */}
      <spotLight
        position={[-4, 3, -3]}
        angle={0.6}
        penumbra={0.5}
        intensity={2}
        color="#ff6666"
        castShadow={false}
      />
      {/* Top white highlight */}
      <pointLight position={[0, 6, 2]} intensity={2} color="#ffffff" />
    </>
  );
}

export function Scene3D({
  scrollProgress,
  width,
  height,
}: {
  scrollProgress: number;
  width: number;
  height: number;
}) {
  const frame = useCurrentFrame();

  const cameraY = interpolate(scrollProgress, [0, 1], [0.8, -0.8], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const cameraZ = interpolate(scrollProgress, [0, 0.3, 0.7, 1], [6.5, 5.5, 5.5, 6.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  const cameraX = interpolate(
    Math.sin(frame * 0.008),
    [-1, 1],
    [-0.5, 0.5]
  );

  return (
    <ThreeCanvas
      width={width}
      height={height}
      camera={{
        position: [cameraX, cameraY, cameraZ],
        fov: 45,
      }}
    >
      <Lights scrollProgress={scrollProgress} />
      <fog attach="fog" args={["#1a0005", 8, 20]} />
      <CocaColaCan scrollProgress={scrollProgress} />
      <Bubbles count={50} />
      <Ground />
      <ReflectiveSurface />
    </ThreeCanvas>
  );
}
