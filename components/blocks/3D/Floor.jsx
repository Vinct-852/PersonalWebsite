import React from "react";

export default function Floor(props) {
  return (
    <mesh {...props} receiveShadow>
      <boxGeometry args={[20,1,10]} />
      <meshStandardMaterial color='white' />
    </mesh>
  );
}