import "./App.css";

import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

function App() {
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

  const floor1Material = new THREE.MeshStandardMaterial({
    color: "#2e302f",
    metalness: 0,
    roughness: 0,
  });

  const desk = useGLTF("./Adjustable_Desk.glb");

  // desk.scene.children.forEach((mesh) => {
  //   mesh.castShadow = true;
  // });

  const desktop = useGLTF("./Computer.glb");

  const cactus = useGLTF("./Houseplant.glb");
  const bigPlant = useGLTF("./PlantBig.glb");

  const printer = useGLTF("./Printer.glb");
  const lamp = useGLTF("./Light_floor.glb");
  const boxes = useGLTF("./Cardboard_boxes.glb");
  const trashcan = useGLTF("./Trashcan_small.glb");

  const gundam = useGLTF("./gundam.glb");
  const chair = useGLTF("./Chair.glb");

  const wallArt = useGLTF("./wall_art6.glb");
  const wallArt2 = useGLTF("./wall_art3.glb");

  return (
    <main className="h-screen w-full">
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 200,
          position: [2.5, 1, 6],
        }}
      >
        <color args={["#252731"]} attach="background" />

        <OrbitControls makeDefault />

        <directionalLight
          castShadow
          position={[4, 4, 1]}
          intensity={1.5}
          shadow-mapSize={[1024, 1024]}
          shadow-camera-near={1}
          shadow-camera-far={10}
          shadow-camera-top={10}
          shadow-camera-right={10}
          shadow-camera-bottom={-10}
          shadow-camera-left={-10}
        />
        <ambientLight intensity={0.5} />

        {/* floor */}
        <mesh
          geometry={boxGeometry}
          material={floor1Material}
          position={[0, -2, 0]}
          scale={[4, 0.2, 4]}
        />

        {/* left wall */}
        <mesh
          position={[-2.1, -0.1, -0.05]}
          geometry={boxGeometry}
          material={floor1Material}
          scale={[0.2, 4, 4.1]}
          receiveShadow
        />

        {/* right wall */}
        <mesh
          position={[0, -0.1, -2]}
          geometry={boxGeometry}
          material={floor1Material}
          scale={[4, 4, 0.2]}
          receiveShadow
        />

        {/* Desk */}
        <primitive
          object={desk.scene}
          scale={0.8}
          rotation-y={Math.PI * 1.5}
          position={[0, -1.9, -1.4]}
        />

        {/* Desktop */}
        <primitive
          object={desktop.scene}
          scale={0.001}
          position={[-0.2, -1.15, -1.45]}
        />

        {/* Cactus */}
        <primitive
          object={cactus.scene}
          scale={0.5}
          position={[-0.6, -1.15, -1.6]}
        />

        {/* Big Plant */}
        <primitive
          object={bigPlant.scene}
          scale={1.1}
          position={[-1.4, -1.9, 1.8]}
        />

        {/* Printer */}
        <primitive
          object={printer.scene}
          scale={1}
          rotation-y={Math.PI * 1.8}
          position={[0.5, -1.15, -1.45]}
        />

        {/* Lamp */}
        <primitive
          object={lamp.scene}
          scale={1.5}
          rotation-y={Math.PI * 1.8}
          position={[-1.6, -1.92, -1.45]}
        />

        {/* Boxes */}
        <primitive
          object={boxes.scene}
          scale={0.7}
          rotation-y={Math.PI * 1.6}
          position={[1.3, -1.92, -1.3]}
        />

        {/* Trashcan */}
        <primitive
          object={trashcan.scene}
          scale={0.8}
          rotation-y={Math.PI * 1.55}
          position={[0.4, -1.92, -1.3]}
        />

        {/* Gundam */}
        <primitive
          object={gundam.scene}
          scale={0.1}
          rotation-y={Math.PI * 1.2}
          position={[-0.66, -1.01, -1.3]}
        />

        {/* Chair */}
        <primitive
          object={chair.scene}
          scale={1}
          rotation-y={Math.PI * 1.2}
          position={[-0.1, -1.9, -0.5]}
        />

        {/* Wall Art */}
        <primitive
          object={wallArt.scene}
          scale={1}
          rotation-y={Math.PI * 1.5}
          position={[-1.99, 0, -0.7]}
        />

        {/* Wall Art 2 */}
        <primitive
          object={wallArt2.scene}
          scale={1}
          rotation-y={Math.PI * 1.5}
          position={[-1.99, 0, -0.1]}
        />
      </Canvas>
    </main>
  );
}

export default App;
