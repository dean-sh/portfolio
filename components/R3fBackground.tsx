'use client';

import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';

// Shader code for the animated gradient blob
const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  uniform vec3 uColorD;
  uniform vec3 uColorE;
  varying vec2 vUv;

  // Simplex 2D noise function
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // Create flowing ribbon patterns
  float flowingRibbons(vec2 uv, float time) {
    float result = 0.0;
    
    // Create multiple ribbon layers
    for (int i = 0; i < 5; i++) {
      float fi = float(i);
      float speed = 0.15 + 0.05 * fi;
      float thickness = 0.003 + 0.002 * sin(fi * 0.5);
      
      // Distorted sine waves for ribbon paths
      float y1 = 0.3 + 0.2 * fi/4.0 + 0.1 * sin(uv.x * 2.0 + time * speed);
      float y2 = 0.6 + 0.15 * fi/4.0 + 0.12 * sin(uv.x * 3.0 - time * speed * 0.8 + fi);
      float y3 = 0.5 - 0.15 * fi/4.0 + 0.08 * sin(uv.x * 4.0 + time * speed * 0.6 + fi * 0.7);
      
      // Create ribbon with smooth edges
      float ribbon1 = smoothstep(thickness, 0.0, abs(uv.y - y1)) * 0.15;
      float ribbon2 = smoothstep(thickness, 0.0, abs(uv.y - y2)) * 0.12;
      float ribbon3 = smoothstep(thickness, 0.0, abs(uv.y - y3)) * 0.1;
      
      // Adjust opacity based on horizontal position to fade ribbons in and out
      float fadeX1 = smoothstep(0.0, 0.1, uv.x) * smoothstep(1.0, 0.9, uv.x);
      float fadeX2 = smoothstep(0.0, 0.15, uv.x) * smoothstep(1.0, 0.85, uv.x);
      float fadeX3 = smoothstep(0.0, 0.05, uv.x) * smoothstep(1.0, 0.95, uv.x);
      
      result += ribbon1 * fadeX1 + ribbon2 * fadeX2 + ribbon3 * fadeX3;
    }
    
    return result;
  }
  
  // Create sparkle pattern
  float sparkles(vec2 uv, float time) {
    float result = 0.0;
    
    // Create multiple layers of sparkles
    for (int i = 0; i < 12; i++) {
      float fi = float(i);
      
      // Create positions that move slowly over time
      vec2 pos = vec2(
        fract(0.2 + fi * 0.27 + sin(time * 0.1 + fi * 0.873) * 0.1),
        fract(0.5 + fi * 0.39 + cos(time * 0.13 + fi * 0.753) * 0.1)
      );
      
      // Calculate distance to sparkle center
      float dist = length(uv - pos);
      
      // Sparkle intensity that pulses
      float brightness = 0.5 + 0.5 * sin(time * (0.3 + fi * 0.2) + fi * 2.0);
      
      // Create star shape with soft falloff
      float sparkleSize = 0.007 + 0.003 * brightness;
      float sparkle = smoothstep(sparkleSize, 0.0, dist) * brightness * 0.2;
      
      // Add directional rays
      float rays = 0.0;
      for (int j = 0; j < 4; j++) {
        float angle = 3.14159 * 0.5 * float(j) + time * 0.1 + fi;
        vec2 rayDir = vec2(cos(angle), sin(angle));
        float alignment = abs(dot(normalize(uv - pos), rayDir));
        rays += smoothstep(0.9, 1.0, alignment) * smoothstep(0.1, 0.0, dist) * 0.03 * brightness;
      }
      
      result += sparkle + rays;
    }
    
    return result;
  }

  void main() {
    // Create multi-layered noise with different scales and faster speeds
    float noise1 = snoise(vUv * 1.4 + vec2(uTime * 0.03, uTime * 0.04)) * 0.5 + 0.5;
    float noise2 = snoise(vUv * 2.3 + vec2(uTime * -0.04, uTime * 0.03)) * 0.5 + 0.5;
    float noise3 = snoise(vUv * 0.8 + vec2(uTime * 0.02, uTime * -0.03)) * 0.5 + 0.5;
    float noise4 = snoise(vUv * 3.1 + vec2(uTime * -0.02, uTime * 0.05)) * 0.5 + 0.5;
    
    // Combine the noise layers with moderate intensity for a dynamic effect
    float finalNoise = noise1 * 0.4 + noise2 * 0.3 + noise3 * 0.2 + noise4 * 0.1;
    
    // Create smooth transitions between 5 colors for more visual interest
    vec3 color;
    if (finalNoise < 0.2) {
      color = mix(uColorA, uColorB, smoothstep(0.0, 0.2, finalNoise));
    } else if (finalNoise < 0.4) {
      color = mix(uColorB, uColorC, smoothstep(0.2, 0.4, finalNoise));
    } else if (finalNoise < 0.6) {
      color = mix(uColorC, uColorD, smoothstep(0.4, 0.6, finalNoise));
    } else if (finalNoise < 0.8) {
      color = mix(uColorD, uColorE, smoothstep(0.6, 0.8, finalNoise));
    } else {
      color = mix(uColorE, uColorA, smoothstep(0.8, 1.0, finalNoise));
    }
    
    // Add flowing ribbons
    float ribbonPattern = flowingRibbons(vUv, uTime);
    color = mix(color, vec3(1.0, 1.0, 1.0), ribbonPattern);
    
    // Add sparkle effect
    float sparklePattern = sparkles(vUv, uTime);
    color = mix(color, vec3(1.0, 1.0, 1.0), sparklePattern);
    
    // Add a second layer of faster, smaller floating elements
    float fastNoise = snoise(vUv * 6.0 + vec2(uTime * 0.1, uTime * 0.12)) * 0.5 + 0.5;
    float speckles = smoothstep(0.6, 0.7, fastNoise) * 0.1;
    color = mix(color, vec3(1.0, 1.0, 1.0), speckles);
    
    // Add a subtle vignette effect that maintains readability
    float distToCenter = length(vUv - 0.5) * 1.6;
    float vignette = smoothstep(0.7, 1.5, distToCenter);
    color = mix(color, vec3(0.98, 0.98, 0.99), vignette * 0.5);
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

// The Blob component that uses the shader
const GradientBlob = () => {
  const mesh = useRef<any>();
  const uniforms = useRef({
    uTime: { value: 0 },
    uColorA: { value: [0.945, 0.976, 0.988] },  // Very light blue-gray #f1f9fc
    uColorB: { value: [0.925, 0.965, 0.976] },  // Light cyan #ecf6f9
    uColorC: { value: [0.890, 0.945, 0.945] },  // Soft mint #e3f1f1
    uColorD: { value: [0.937, 0.949, 0.965] },  // Light silver #eff2f6
    uColorE: { value: [0.914, 0.957, 0.969] }   // Pale sky #e9f4f7
  });

  useFrame(({ clock }) => {
    if (mesh.current) {
      // Faster animation speed
      uniforms.current.uTime.value = clock.getElapsedTime() * 0.6;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -0.5]} scale={[15, 15, 1]}>
      <planeGeometry args={[1, 1, 24, 24]} />
      <shaderMaterial 
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms.current}
      />
    </mesh>
  );
};

// Small floating particles component to add more elements
const FloatingParticles = () => {
  const particles = useRef<any>();
  const count = 50;
  
  useFrame(({ clock }) => {
    if (particles.current) {
      const time = clock.getElapsedTime();
      const positions = particles.current.geometry.attributes.position.array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        // Animate each particle in a unique pattern
        positions[i3] = Math.sin(time * 0.2 + i * 0.5) * 6;
        positions[i3 + 1] = Math.cos(time * 0.3 + i * 0.2) * 4;
        positions[i3 + 2] = Math.sin(time * 0.1 + i) * 2;
      }
      
      particles.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count}
          array={new Float32Array(count * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#b8c5d6" transparent opacity={0.6} />
    </points>
  );
};

// Main Background Component
export default function R3fBackground() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#fafbfc']} />
        <Suspense fallback={null}>
          <GradientBlob />
          <FloatingParticles />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
} 