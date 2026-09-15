import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const groupRef = useRef(null);

  // Current mouse position
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  // Smooth mouse position
  const smoothMouse = useRef({
    x: 0,
    y: 0,
  });

  // Generate particles once
  const particles = useMemo(() => {
    const count = window.innerWidth < 768 ? 450 : 1100;
    const positions = new Float32Array(count * 3);

    let seed = 123456789;

    const random = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positions[i3] = (random() - 0.5) * 15;
      positions[i3 + 1] = (random() - 0.5) * 11;
      positions[i3 + 2] = (random() - 0.5) * 12;
    }

    return positions;
  }, []);

  // Track mouse at WINDOW level
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;

      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth mouse movement
    smoothMouse.current.x = THREE.MathUtils.lerp(
      smoothMouse.current.x,
      mouse.current.x,
      0.035,
    );

    smoothMouse.current.y = THREE.MathUtils.lerp(
      smoothMouse.current.y,
      mouse.current.y,
      0.035,
    );

    // Automatic slow rotation
    groupRef.current.rotation.z += delta * 0.002;
    groupRef.current.rotation.y += delta * 0.006;

    // Mouse influence
    const targetRotationY = smoothMouse.current.x * 0.35;

    const targetRotationX = smoothMouse.current.y * 0.22;

    // Smooth rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      0.025,
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      0.025,
    );

    // Horizontal parallax
    const targetPositionX = smoothMouse.current.x * 0.35;

    // Vertical parallax
    const targetPositionY = smoothMouse.current.y * 0.25;

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetPositionX,
      0.025,
    );

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      targetPositionY,
      0.025,
    );
  });

  return (
    <group ref={groupRef}>
      <Points positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f5ff"
          size={0.038}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#05070b]">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 60,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ParticleField />
      </Canvas>

      {/* Cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(5,7,11,0.25)_55%,#05070b_100%)]" />
    </div>
  );
}
