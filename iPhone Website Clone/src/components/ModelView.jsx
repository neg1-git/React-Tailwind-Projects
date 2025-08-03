import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import Lights from './Lights'
import IPhone from './IPhone'
import * as THREE from 'three'
import { useSpring, a } from '@react-spring/three'

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  // 🟡 Spring scale logic goes here (before return)
  const { scale } = useSpring({
    scale: size === 'small' ? [15, 15, 15] : [17, 17, 17],
    config: { tension: 170, friction: 26 }
  })

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      
      <a.group
        ref={groupRef}
        position={[0, 0, 0]}
        name={index === 1 ? 'small' : 'large'}
        scale={scale}
      >
        <Suspense fallback={'Loading'}>
          <IPhone item={item} size={size} />
        </Suspense>
      </a.group>
    </View>
  )
}

export default ModelView
