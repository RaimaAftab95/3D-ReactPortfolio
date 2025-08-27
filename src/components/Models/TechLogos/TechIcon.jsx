import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const TechIcon = ({ model }) => {
  // loaded in the model load the moe of glb
  const scene = useGLTF(model.modelPath);

  return (
    <div className="w-full h-full">
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enableRotate={true} />
        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
          <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
          </group>
        </Float>
      </Canvas>
    </div>
  );
};

export default TechIcon;
