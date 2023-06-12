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

  return (
    <main className="h-screen w-full">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [2.5, 4, 6],
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
          position={[-2.1, -0.1, 0]}
          geometry={boxGeometry}
          material={floor1Material}
          scale={[0.2, 4, 4]}
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
      </Canvas>
    </main>
  );
}

export default App;
