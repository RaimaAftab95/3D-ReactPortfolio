import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Room } from "./Room";

const RotatingRoom = ({ isMobile }) => {
  const groupRef = useRef();

  // This will run every frame and slowly rotate the model
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003; // adjust this value to speed up/slow down
    }
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 0.7 : 1}
      position={[0, -3.5, 0]}
      rotation={[0, -Math.PI / 4, 0]} // initial rotation
    >
      <Room />
    </group>
  );
};

export default RotatingRoom;
