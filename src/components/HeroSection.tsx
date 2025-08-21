import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Cloud, Stars } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

// Floating 3D Objects
function FloatingCloud({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 8, 6]} />
        <meshStandardMaterial color="#DABFFF" opacity={0.7} transparent />
      </mesh>
    </Float>
  );
}

function FloatingStar({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && meshRef.current.material instanceof THREE.MeshStandardMaterial) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.5;
      meshRef.current.material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <coneGeometry args={[0.1, 0.3, 4]} />
      <meshStandardMaterial color="#FFD6A5" transparent />
    </mesh>
  );
}

function DreamyFox() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={meshRef}>
        {/* Fox Body */}
        <mesh position={[0, 0, 0]}>
          <capsuleGeometry args={[0.3, 0.6, 4, 8]} />
          <meshStandardMaterial color="#DABFFF" />
        </mesh>
        {/* Fox Head */}
        <mesh position={[0, 0.6, 0.2]}>
          <sphereGeometry args={[0.25, 8, 6]} />
          <meshStandardMaterial color="#DABFFF" />
        </mesh>
        {/* Fox Ears */}
        <mesh position={[-0.15, 0.8, 0.1]}>
          <coneGeometry args={[0.08, 0.2, 4]} />
          <meshStandardMaterial color="#FFD6A5" />
        </mesh>
        <mesh position={[0.15, 0.8, 0.1]}>
          <coneGeometry args={[0.08, 0.2, 4]} />
          <meshStandardMaterial color="#FFD6A5" />
        </mesh>
        {/* Fox Tail */}
        <mesh position={[0, -0.2, -0.4]} rotation={[0.3, 0, 0]}>
          <coneGeometry args={[0.15, 0.4, 6]} />
          <meshStandardMaterial color="#FFD6A5" />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight 
        position={[mouse.x * 5, mouse.y * 5, 5]} 
        intensity={0.8} 
        color="#DABFFF"
      />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />

      {/* 3D Objects */}
      <DreamyFox />
      
      {/* Floating Clouds */}
      <FloatingCloud position={[-3, 1, -2]} />
      <FloatingCloud position={[3, -1, -3]} />
      <FloatingCloud position={[-2, -2, -1]} />
      
      {/* Floating Stars */}
      <FloatingStar position={[-4, 2, -1]} />
      <FloatingStar position={[4, 1, -2]} />
      <FloatingStar position={[2, -3, 0]} />
      <FloatingStar position={[-1, 3, -3]} />

      {/* Background Stars */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
    </>
  );
}

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'linear-gradient(135deg, #FFFBEB, rgba(255, 214, 165, 0.3))' }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="space-y-6 animate-fade-in-up">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight">
              Hi, I'm{' '}
              <span className="text-primary">Shree Krishna</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-charcoal/80 font-medium max-w-2xl mx-auto leading-relaxed">
              A Creative Developer Building Delightful Experiences
            </p>
            
            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={scrollToProjects}
                className="hero-button text-charcoal font-semibold"
              >
                See My Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-charcoal/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;