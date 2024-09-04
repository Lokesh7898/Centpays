import React, { useEffect, useRef } from "react";
import { useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import worldimg from "../media/image/globeimg.jpg";

extend({ OrbitControls });

const Globe = () => {
  const globeRef = useRef();
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      worldimg,
      (texture) => {
        globeRef.current.material.map = texture;
        globeRef.current.material.needsUpdate = true;
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error);
      }
    );
  }, []);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
      globeRef.current.rotation.x = Math.PI / 4;
    }
    controlsRef.current.update();
  });

  return (
    <>
      <mesh ref={globeRef} rotation={[0, 0, 0]} scale={[3.2, 3.2, 3.2]}>
        <sphereGeometry args={[1, 128, 128]} />
        <meshPhongMaterial color="white" />
        <ambientLight intensity={0} />
        <pointLight position={[10, 10, 10]} intensity={0} />
      </mesh>
      <OrbitControls
        ref={controlsRef}
        enableDamping={true}
        dampingFactor={0.25}
        rotateSpeed={0.5}
        args={[camera, gl.domElement]}
        enableZoom={false}
      />
    </>
  );
};

export default Globe;
