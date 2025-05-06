import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Room } from "./Room";

const RotatingRoom = ({ isMobile }) => {
  const groupRef = useRef();
  const { mouse } = useThree();
  const baseRotation = useRef(0); // Tracks continuous Y rotation

  useFrame(() => {
    if (groupRef.current) {
      // Update base Y rotation
      baseRotation.current += 0.005; // Clockwise spin speed

      // Combine base Y rotation with mouse X tilt
      groupRef.current.rotation.y = baseRotation.current + mouse.x * 0.4;

      // Tilt up/down based on mouse Y
      groupRef.current.rotation.x = -mouse.y * 0.3;
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 0.7 : 1} position={[0, -3.5, 0]}>
      <Room />
    </group>
  );
};

export default RotatingRoom;
