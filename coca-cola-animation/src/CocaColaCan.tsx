import { useRef } from "react";
import * as THREE from "three";
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";

const COCA_COLA_RED = "#EE0000";
const COCA_COLA_DARK_RED = "#AA0000";
const SILVER = "#D0D0D0";
const DARK_SILVER = "#888888";
const WHITE = "#FFFFFF";
const NEAR_WHITE = "#F8F8F8";

function CanBody() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const segments = 80;

  const spinY = frame * 0.025;

  return (
    <group rotation={[0, spinY, 0]}>
      {/* === Main red body === */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.88, 0.88, 2.6, segments]} />
        <meshStandardMaterial
          color={COCA_COLA_RED}
          roughness={0.12}
          metalness={0.75}
          envMapIntensity={1.2}
        />
      </mesh>

      {/* Top shoulder taper */}
      <mesh castShadow position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.62, 0.88, 0.5, segments]} />
        <meshStandardMaterial
          color={COCA_COLA_RED}
          roughness={0.12}
          metalness={0.75}
        />
      </mesh>

      {/* Bottom taper */}
      <mesh castShadow position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.88, 0.72, 0.5, segments]} />
        <meshStandardMaterial
          color={COCA_COLA_DARK_RED}
          roughness={0.15}
          metalness={0.7}
        />
      </mesh>

      {/* === Silver neck === */}
      <mesh position={[0, 1.78, 0]}>
        <cylinderGeometry args={[0.62, 0.62, 0.12, segments]} />
        <meshStandardMaterial color={SILVER} roughness={0.08} metalness={0.95} />
      </mesh>

      {/* Top disc (lid) */}
      <mesh position={[0, 1.86, 0]}>
        <cylinderGeometry args={[0.58, 0.62, 0.08, segments]} />
        <meshStandardMaterial color={DARK_SILVER} roughness={0.15} metalness={0.85} />
      </mesh>

      {/* Recessed top center */}
      <mesh position={[0, 1.9, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.04, segments]} />
        <meshStandardMaterial color="#606060" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* Pull tab ring */}
      <mesh position={[0.18, 1.95, 0.1]} rotation={[0.3, 0, 0.4]}>
        <torusGeometry args={[0.12, 0.025, 8, 24, Math.PI * 1.6]} />
        <meshStandardMaterial color={SILVER} roughness={0.05} metalness={0.98} />
      </mesh>

      {/* Pull tab bar */}
      <mesh position={[0.1, 1.93, 0.05]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.2, 0.025, 0.06]} />
        <meshStandardMaterial color={SILVER} roughness={0.05} metalness={0.98} />
      </mesh>

      {/* === Silver bottom === */}
      <mesh position={[0, -1.78, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.1, segments]} />
        <meshStandardMaterial color={DARK_SILVER} roughness={0.15} metalness={0.85} />
      </mesh>

      {/* Bottom dome indent */}
      <mesh position={[0, -1.86, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.06, segments]} />
        <meshStandardMaterial color="#555555" roughness={0.25} metalness={0.8} />
      </mesh>

      {/* === White wave stripe === */}
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry
          args={[0.885, 0.885, 0.35, segments, 1, true]}
        />
        <meshStandardMaterial
          color={WHITE}
          roughness={0.25}
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Thin white stripe above */}
      <mesh position={[0, 0.98, 0]}>
        <cylinderGeometry
          args={[0.885, 0.885, 0.06, segments, 1, true]}
        />
        <meshStandardMaterial
          color={NEAR_WHITE}
          roughness={0.3}
          metalness={0.1}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Logo script arcs (simulate Coca-Cola lettering) */}
      {[
        { y: 0.2, start: -0.4, length: 2.2, tilt: 0.12 },
        { y: 0.1, start: -0.2, length: 1.8, tilt: 0.06 },
        { y: 0.0, start: 0.0, length: 2.0, tilt: 0.0 },
        { y: -0.1, start: -0.15, length: 1.9, tilt: -0.06 },
      ].map((arc, i) => (
        <mesh
          key={i}
          position={[0, arc.y, 0]}
          rotation={[0, arc.start, arc.tilt]}
        >
          <cylinderGeometry
            args={[
              0.886,
              0.886,
              0.045,
              segments,
              1,
              true,
              0,
              arc.length,
            ]}
          />
          <meshStandardMaterial
            color={WHITE}
            roughness={0.2}
            metalness={0.05}
            side={THREE.FrontSide}
            transparent
            opacity={0.95}
          />
        </mesh>
      ))}

      {/* Red label top ridge */}
      <mesh position={[0, 1.08, 0]}>
        <cylinderGeometry args={[0.89, 0.89, 0.04, segments]} />
        <meshStandardMaterial color={COCA_COLA_RED} roughness={0.1} metalness={0.6} />
      </mesh>

      {/* Red label bottom ridge */}
      <mesh position={[0, -0.55, 0]}>
        <cylinderGeometry args={[0.89, 0.89, 0.04, segments]} />
        <meshStandardMaterial color={COCA_COLA_RED} roughness={0.1} metalness={0.6} />
      </mesh>
    </group>
  );
}

export function CocaColaCan({ scrollProgress }: { scrollProgress: number }) {
  const frame = useCurrentFrame();

  const tiltX = Math.sin(frame * 0.03) * 0.06;
  const tiltZ = Math.cos(frame * 0.025) * 0.04;
  const floatY = Math.sin(frame * 0.04) * 0.12;

  return (
    <group rotation={[tiltX, 0, tiltZ]} position={[0, floatY, 0]}>
      <CanBody />
    </group>
  );
}
