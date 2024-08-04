import { createRoot } from 'react-dom/client'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'

import css from "../../../styles/css/3dModel.module.css"
import OrbitControls from "./OrbitControls"
import Scene from "../../../public/3D/Scene.jsx"

export default function ThreeDmodel() {

  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
          <ambientLight intensity={4}/>
          <OrbitControls />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
      </Canvas>
    </div>
  );
}