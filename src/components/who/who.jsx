import React from "react";
import "./who.css";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./cube";

const Who = () => {
  return (
    <div className="who" id="who">
      <div className="containerWho">
        <div className="whoLeft">
          <div className="wrapperLeft">
            <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
              <OrbitControls enableZoom={false} autoRotate={true} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
            </Canvas>
          </div>
        </div>
        {/* ini kanan */}
        <div className="whoRight">
          <h1 className="title">Think Outside The Square Space</h1>
          <div className="subtitle">
            <p className="line"></p>
            <h2 className="text">Who We Are</h2>
          </div>
          {/* <p className="desc">
          Seorang Individu Kreatif desainer dan pengembangan dengan hasrat untuk seni.
          </p> */}
          <p className="desc">
            A Creative Individual of designers and development with a passion
            for the arts.
          </p>
          <a href="#work" className="btn">
            See our works
          </a>
        </div>
      </div>
    </div>
  );
};

export default Who;
