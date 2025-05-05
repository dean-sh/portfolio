'use client';

import { useEffect, useState, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { type Container, type Engine, type ISourceOptions } from '@tsparticles/engine';

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Reduce logging in production
    if (process.env.NODE_ENV === 'development') {
      console.log('Particles container loaded', container);
    }
  }, []);

  // Modern, elegant particle configuration
  const options: ISourceOptions = {
    fullScreen: {
      enable: false, // Disable fullscreen mode to contain within parent
    },
    background: {
      color: {
        value: "transparent", // Transparent background
      },
    },
    fpsLimit: 60, // Lower FPS limit to reduce CPU usage
    pauseOnBlur: true, // Pause when tab is not active
    pauseOnOutsideViewport: true, // Pause when not in viewport
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
          parallax: {
            enable: true,
            force: 80,
            smooth: 10
          }
        },
        resize: {
          enable: true,
          delay: 0
        },
      },
      modes: {
        push: {
          quantity: 6,
        },
        grab: {
          distance: 160,
          links: {
            opacity: 0.5,
            color: "#3b82f6"
          }
        }
      },
    },
    particles: {
      color: {
        value: ["#1a56db", "#4f46e5", "#7c3aed"],
      },
      links: {
        color: "#94a3b8",
        distance: 160,
        enable: true,
        opacity: 0.5,
        width: 1.5,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 1.2,
        straight: false,
        attract: {
          enable: true,
          rotate: {
            x: 600,
            y: 1200
          }
        }
      },
      number: {
        density: {
          enable: true,
        },
        value: 100,
      },
      opacity: {
        value: { min: 0.4, max: 0.8 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
      reduceDuplicates: true,
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 w-full h-full"
      />
    );
  }

  return null;
};

export default ParticleBackground; 