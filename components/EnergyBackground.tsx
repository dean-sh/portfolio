'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// Wind Turbine Component
interface WindTurbineProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

function WindTurbine({ position, rotation = [0, 0, 0], scale = 1 }: WindTurbineProps) {
  const turbineRef = useRef<THREE.Group>(null);
  const bladesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (bladesRef.current) {
      bladesRef.current.rotation.z += 0.02; // Realistic turbine speed
    }
    
    // Subtle sway animation
    if (turbineRef.current) {
      turbineRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group ref={turbineRef} position={position} rotation={rotation} scale={scale}>
      {/* Turbine Tower */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 4, 8]} />
        <meshStandardMaterial color="#e5e7eb" metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Nacelle (turbine housing) */}
      <mesh position={[0, 2.2, 0]}>
        <boxGeometry args={[0.4, 0.3, 0.8]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Rotor Hub */}
      <mesh position={[0, 2.2, 0.4]}>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 16]} />
        <meshStandardMaterial color="#9ca3af" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Turbine Blades */}
      <group ref={bladesRef} position={[0, 2.2, 0.5]}>
        {[0, 1, 2].map((i) => (
          <group key={i} rotation={[0, 0, (i * Math.PI * 2) / 3]}>
            <mesh position={[0, 1, 0]}>
              <boxGeometry args={[0.05, 2, 0.2]} />
              <meshStandardMaterial 
                color="#f8fafc" 
                metalness={0.1} 
                roughness={0.9}
                transparent
                opacity={0.9}
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

// Solar Panel Component
interface SolarPanelProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

function SolarPanel({ position, rotation = [0, 0, 0], scale = 1 }: SolarPanelProps) {
  // Completely static panels - no animation at all
  return (
    <group position={position} rotation={rotation} scale={scale}>
        {/* Solar Panel Frame */}
        <mesh>
          <boxGeometry args={[2, 0.05, 1.2]} />
          <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Solar Cells with Sun Reflection */}
        <mesh position={[0, 0.03, 0]}>
          <boxGeometry args={[1.9, 0.01, 1.1]} />
          <meshStandardMaterial 
            color="#1e3a8a" 
            metalness={0.8} 
            roughness={0.05}
            emissive="#fbbf24"
            emissiveIntensity={0.15}
            envMapIntensity={2.0}
          />
        </mesh>
        
        {/* Sun Reflection Spots */}
        <mesh position={[0.3, 0.04, 0.2]}>
          <circleGeometry args={[0.15, 16]} />
          <meshStandardMaterial 
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.8}
            transparent
            opacity={0.6}
          />
        </mesh>
        <mesh position={[-0.4, 0.04, -0.1]}>
          <circleGeometry args={[0.1, 16]} />
          <meshStandardMaterial 
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.6}
            transparent
            opacity={0.4}
          />
        </mesh>
        
        {/* Grid Lines */}
        {Array.from({ length: 4 }, (_, i) => (
          <mesh key={`v-${i}`} position={[-0.9 + i * 0.6, 0.04, 0]}>
            <boxGeometry args={[0.02, 0.005, 1.1]} />
            <meshStandardMaterial color="#64748b" />
          </mesh>
        ))}
        
        {Array.from({ length: 3 }, (_, i) => (
          <mesh key={`h-${i}`} position={[0, 0.04, -0.4 + i * 0.4]}>
            <boxGeometry args={[1.9, 0.005, 0.02]} />
            <meshStandardMaterial color="#64748b" />
          </mesh>
        ))}
        
        {/* Support Structure */}
        <mesh position={[0, -0.5, -0.3]} rotation={[0.3, 0, 0]}>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#6b7280" metalness={0.5} roughness={0.7} />
        </mesh>
      </group>
  );
}

// Energy Particles Component
interface EnergyParticlesProps {
  count?: number;
}

function EnergyParticles({ count = 100 }: EnergyParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30; // X - wider spread
      positions[i * 3 + 1] = Math.random() * 8 + 1; // Y - ground to mid-height
      positions[i * 3 + 2] = Math.random() * -40 - 5; // Z - start from far back
    }
    return positions;
  }, [count]);
  
  const colors = useMemo(() => {
    const colors = new Float32Array(count * 3);
    const energyColors = [
      [0.02, 0.6, 0.41], // energy-600
      [0.96, 0.62, 0.04], // solar-500
      [0.01, 0.52, 0.78], // wind-500
    ];
    
    for (let i = 0; i < count; i++) {
      const colorIndex = Math.floor(Math.random() * energyColors.length);
      const color = energyColors[colorIndex];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }
    return colors;
  }, [count]);
  
  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime;
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        // Wind flow animation - moving into 3D space (Z direction)
        positions[i3] += Math.sin(time + i) * 0.005; // X - slight side drift
        positions[i3 + 1] += Math.cos(time + i) * 0.003; // Y - vertical drift
        positions[i3 + 2] += 0.02 + Math.sin(time * 0.3 + i) * 0.01; // Z - main wind direction into space
        
        // Reset particles that drift too far - wind flows from back to front
        if (positions[i3] > 15) positions[i3] = -15;
        if (positions[i3] < -15) positions[i3] = 15;
        if (positions[i3 + 1] > 12) positions[i3 + 1] = 0;
        if (positions[i3 + 1] < -2) positions[i3 + 1] = 10;
        if (positions[i3 + 2] > 15) positions[i3 + 2] = -20; // Reset to far back when reaching front
        if (positions[i3 + 2] < -20) positions[i3 + 2] = -20;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={false}
      />
    </points>
  );
}

// Camera Controller
function CameraController() {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(5, 3, 8);
    camera.lookAt(0, 1, 0);
  }, [camera]);
  
  return null;
}

// Main Scene Component
function EnergyScene() {
  return (
    <>
      <CameraController />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} color="#1e293b" />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.2} 
        color="#fbbf24"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-10, 5, -10]} intensity={0.3} color="#059669" />
      
      {/* Wind Turbines - All facing same direction */}
      <WindTurbine position={[-4, 0, -2]} rotation={[0, 0.5, 0]} scale={0.8} />
      <WindTurbine position={[-6, 0, 2]} rotation={[0, 0.5, 0]} scale={0.6} />
      <WindTurbine position={[8, 0, -4]} rotation={[0, 0.5, 0]} scale={0.7} />
      <WindTurbine position={[2, 0, -6]} rotation={[0, 0.5, 0]} scale={0.5} />
      <WindTurbine position={[-8, 0, -1]} rotation={[0, 0.5, 0]} scale={0.9} />
      
      {/* Massive Solar Panel Farm - Tilted towards viewer for better visibility */}
      <SolarPanel position={[3, 1, 1]} rotation={[0.8, 0, 0]} scale={0.8} />
      <SolarPanel position={[4, 1, -1]} rotation={[0.8, 0, 0]} scale={0.6} />
      <SolarPanel position={[-2, 1, 3]} rotation={[0.8, 0, 0]} scale={0.7} />
      <SolarPanel position={[1, 1, 4]} rotation={[0.8, 0, 0]} scale={0.6} />
      <SolarPanel position={[6, 1, 2]} rotation={[0.8, 0, 0]} scale={0.7} />
      <SolarPanel position={[-1, 1, -3]} rotation={[0.8, 0, 0]} scale={0.5} />
      <SolarPanel position={[5, 1, -3]} rotation={[0.8, 0, 0]} scale={0.8} />
      <SolarPanel position={[-3, 1, 5]} rotation={[0.8, 0, 0]} scale={0.6} />
      
      {/* Additional Solar Panel Rows */}
      <SolarPanel position={[7, 1, 4]} rotation={[0.8, 0, 0]} scale={0.7} />
      <SolarPanel position={[8, 1, 1]} rotation={[0.8, 0, 0]} scale={0.6} />
      <SolarPanel position={[9, 1, -2]} rotation={[0.8, 0, 0]} scale={0.8} />
      <SolarPanel position={[-4, 1, -1]} rotation={[0.8, 0, 0]} scale={0.7} />
      <SolarPanel position={[-5, 1, 2]} rotation={[0.8, 0, 0]} scale={0.6} />
      <SolarPanel position={[-6, 1, -4]} rotation={[0.8, 0, 0]} scale={0.5} />
      <SolarPanel position={[2, 1, 6]} rotation={[0.8, 0, 0]} scale={0.9} />
      <SolarPanel position={[-1, 1, 7]} rotation={[0.8, 0, 0]} scale={0.7} />
      <SolarPanel position={[10, 1, 3]} rotation={[0.8, 0, 0]} scale={0.6} />
      <SolarPanel position={[-7, 1, 1]} rotation={[0.8, 0, 0]} scale={0.8} />
      
      {/* Back Row Solar Panels */}
      <SolarPanel position={[0, 1, -5]} rotation={[0.8, 0, 0]} scale={0.7} />
      <SolarPanel position={[3, 1, -6]} rotation={[0.8, 0, 0]} scale={0.6} />
      <SolarPanel position={[-2, 1, -7]} rotation={[0.8, 0, 0]} scale={0.8} />
      <SolarPanel position={[6, 1, -5]} rotation={[0.8, 0, 0]} scale={0.5} />
      <SolarPanel position={[-4, 1, -6]} rotation={[0.8, 0, 0]} scale={0.7} />
      
      {/* Front Row Solar Panels */}
      <SolarPanel position={[1, 1, 8]} rotation={[0.8, 0, 0]} scale={0.9} />
      <SolarPanel position={[4, 1, 7]} rotation={[0.8, 0, 0]} scale={0.8} />
      <SolarPanel position={[-3, 1, 8]} rotation={[0.8, 0, 0]} scale={0.7} />
      <SolarPanel position={[7, 1, 6]} rotation={[0.8, 0, 0]} scale={0.6} />
      <SolarPanel position={[-5, 1, 7]} rotation={[0.8, 0, 0]} scale={0.8} />
      
      {/* Energy Particles */}
      <EnergyParticles count={80} />
      
      {/* Environment */}
      <Environment preset="night" />
      
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial 
          color="#0f172a" 
          roughness={1} 
          metalness={0}
          transparent
          opacity={0.8}
        />
      </mesh>
    </>
  );
}

// Main Background Component
export default function EnergyBackground() {
  const [scrollOpacity, setScrollOpacity] = useState(0.4);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Dim background as user scrolls (from 0.4 to 0.1)
      const opacity = Math.max(0.1, 0.4 - (scrolled / windowHeight) * 0.3);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 transition-opacity duration-300"
      style={{ opacity: scrollOpacity }}
    >
      <Canvas
        shadows
        camera={{ position: [5, 3, 8], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <EnergyScene />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}