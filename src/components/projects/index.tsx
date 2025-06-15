import * as THREE from "three";
import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import {
  Image,
  ScrollControls,
  useScroll,
  type ImageProps,
} from "@react-three/drei";
import { easing } from "maath";
import {
  useRef,
  useState,
  type JSX,
  type SetStateAction,
  type Dispatch,
} from "react";
import projectList, { type ProjectType } from "./latest-works";
import BentPlaneGeometry from "./bent-plane-geometry";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card as ShadcnCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CardProps = ImageProps & {
  url: string;
  onHover: () => void;
  onEndHover: () => void;
};

const Projects = () => {
  const isMobile = useIsMobile();
  const [showCard, setShowCard] = useState<ProjectType | null>();

  return (
    <div id="works" className="bg-white pt-5 pb-10 px-5">
      <h3 className="sm:text-center sm:text-xl text-base font-semibold tracking-normal mb-4 pt-4">
        Featured Works
      </h3>
      {isMobile ? (
        <div className="flex flex-col gap-10">
          <MobileContainer />
        </div>
      ) : (
        <div className="relative min-h-[500px] h-[550px] lg:max-w-2/3 lg:m-auto">
          <Canvas camera={{ position: [0, 50, 100], fov: 13 }}>
            <fog attach="fog" args={["#a79", 8.5, 12]} />
            <ScrollControls pages={4} infinite>
              <Rig rotation={[0, 0, 0.15]}>
                <Carousel setShowCard={setShowCard} radius={1.4} count={6} />
              </Rig>
            </ScrollControls>
          </Canvas>
          {showCard && (
            <ShadcnCard className="font-semibold absolute right-10 lg:right-[-20%] w-[45%] xl:w-[35%] top-[-20%] lg:top-10 px-5 bg-[#252525] text-white z-10">
              <CardHeader>
                <CardTitle>{showCard.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{showCard.description}</p>
                <p className="font-semibold mt-2">{showCard.year}</p>
              </CardContent>
            </ShadcnCard>
          )}
        </div>
      )}
    </div>
  );
};

const MobileContainer = () => {
  return projectList.slice(0, 4).map((proj, i) => (
    <div className="flex flex-col gap-4" key={i}>
      <ShadcnCard
        className="p-0 shadow-2xl cursor-pointer"
        onClick={() => window.open(proj.demo, "blank")}
      >
        <CardContent className="p-0">
          <img src={proj.img} alt={proj.title} className="rounded-xl" />
        </CardContent>
      </ShadcnCard>
      <p className="capitalise text-sm font-semibold">{proj.title}</p>
      <p className="text-muted-foreground">{proj.description}</p>
    </div>
  ));
};

const Card = ({ url, onHover, onEndHover, ...props }: CardProps) => {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const pointerOver = (e: ThreeEvent<PointerEvent>) => {
    hover(true);
    onHover();
    e.stopPropagation();
  };
  const pointerOut = () => {
    onEndHover();
    hover(false);
  };
  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }

    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.25 : 0.1,
      0.2,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });
  return (
    <Image
      // @ts-expect-error - THREE.Mesh ref type mismatch with Image component
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <BentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
};
Card.displayName = "Card";

function Rig(props: JSX.IntrinsicElements["group"]) {
  const ref = useRef<THREE.Mesh | null>(null);
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2); // Rotate contents
    state.events.update?.(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    ); // Move camera
    state.camera.lookAt(0, 0, 0); // Look at center
  });
  return <group ref={ref} {...props} />;
}

function Carousel({
  radius = 1.4,
  count = 6,
  setShowCard,
}: {
  setShowCard: Dispatch<SetStateAction<ProjectType | null | undefined>>;
  count: number;
  radius: number;
}) {
  return projectList.map((proj, i) => (
    <Card
      onHover={() => setShowCard(proj)}
      onEndHover={() => setShowCard(null)}
      onClick={() => window.open(proj.demo, "blank")}
      key={i}
      url={proj.img}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius,
      ]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ));
}

export default Projects;
