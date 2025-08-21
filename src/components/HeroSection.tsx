import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Instances, Instance } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Data for our instanced objects
const clouds = [
  { position: [-3, 1, -2] },
  { position: [3, -1, -3] },
  { position: [-2, -2, -1] },
];

const stars = [
  { position: [-4, 2, -1] },
  { position: [4, 1, -2] },
  { position: [2, -3, 0] },
  { position: [-1, 3, -3] },
];

// Instanced clouds and stars for performance
function FloatingObjects() {
  const ref = useRef<THREE.Group>(null);
  
  // Animate the whole group for a subtle parallax effect based on mouse position
  useFrame((state, delta) => {
    if (ref.current) {
       ref.current.rotation.y = THREE.MathUtils.damp(ref.current.rotation.y, state.mouse.x * 0.1, 4, delta);
       ref.current.rotation.x = THREE.MathUtils.damp(ref.current.rotation.x, -state.mouse.y * 0.1, 4, delta);
    }
  });

  return (
    <group ref={ref}>
      <Instances limit={clouds.length} geometry={new THREE.SphereGeometry(0.5, 8, 6)} material={new THREE.MeshStandardMaterial({ color: '#DABFFF', opacity: 0.7, transparent: true })}>
        {clouds.map((cloud, i) => (
          <Float key={i} speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
            <Instance position={cloud.position as [number, number, number]} />
          </Float>
        ))}
      </Instances>
      <Instances limit={stars.length} geometry={new THREE.ConeGeometry(0.1, 0.3, 4)} material={new THREE.MeshStandardMaterial({ color: '#FFD6A5', transparent: true, opacity: 0.8 })}>
        {stars.map((star, i) => (
           <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={0.2}>
            <Instance position={star.position as [number, number, number]} rotation-z={Math.random() * Math.PI} />
           </Float>
        ))}
      </Instances>
    </group>
  );
}

// Low-poly fox model
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

// The main 3D Scene
function Scene() {
  const lightRef = useRef<THREE.PointLight>(null);
  
  // Update light position based on mouse without causing re-renders
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = state.mouse.x * 5;
      lightRef.current.position.y = state.mouse.y * 5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight ref={lightRef} position={[0, 0, 5]} intensity={0.8} color="#DABFFF" />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />

      <DreamyFox />
      <FloatingObjects />
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
      <div className="absolute inset-0 z-0">
        {/* The Canvas component is now directly here */}
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
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-tight">
              Hi, I'm{' '}
              <span className="text-primary">Shree Krishna</span>
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/80 font-medium max-w-2xl mx-auto leading-relaxed">
              A Creative Developer Building Delightful Experiences
            </p>
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