import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { Billboard, Text, TrackballControls } from "@react-three/drei";
import skillList from "./skill-words";

type WordProps = {
  children: string;
  position: THREE.Vector3;
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full bg-[#242424] p-0 m-0 border-box px-5 pt-5"
    >
      <h3 className="sm:text-center text-base sm:text-xl font-semibold tracking-normal mb-4 pt-4 text-white">
        Skills
      </h3>
      <div className="sm:max-w-2/3 lg:max-w-1/2 h-[550px] sm:m-auto">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 25], fov: 125, near: 0.1, far: 1000 }}
        >
          <fog attach="fog" args={["#202025", 0, 80]} />
          <Suspense fallback={null}>
            <group rotation={[10, 10.5, 10]}>
              <Cloud count={6} radius={23} />
            </group>
          </Suspense>
          <TrackballControls />
        </Canvas>
      </div>
    </div>
  );
};

function Cloud({ count = 4, radius = 20 }: { count: number; radius: number }) {
  const words = useMemo(() => {
    const temp: [THREE.Vector3, string][] = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const word = skillList[(i * j) % skillList.length];
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          word,
        ]);
      }
    }
    return temp;
  }, [count, radius]);

  return (
    <>
      {words.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </>
  );
}

function Word({ children, position }: WordProps) {
  const color = new THREE.Color();
  const fontProps = {
    font: "", // Insert valid font URL or leave empty if default is OK
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };

  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const over = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(true);
  };

  const out = () => setHovered(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame(() => {
    if (!ref.current) return;

    (ref.current.material as THREE.MeshBasicMaterial).color.lerp(
      color.set(hovered ? "#747bff" : "white"),
      0.1
    );
  });

  return (
    <Billboard position={position}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        {...fontProps}
        children={children}
      />
    </Billboard>
  );
}

export default Skills;
