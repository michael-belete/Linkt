"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

function vertexShader() {
  return `
  uniform float u_pointsize;
  void main() {

    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

    gl_PointSize = u_pointsize;

    gl_Position = projectionMatrix * mvPosition;

  }
  `;
}

function fragmentShader() {
  return `
  uniform vec2 u_resolution;
  uniform vec3 color;

  void main() {

    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    // Interpolate between bright orange and red-orange based on the x-coordinate
    vec3 brightOrange = vec3(1.0, 0.8, 0.0); // RGB for bright orange
    vec3 redOrange = vec3(1.0, 0.1, 0.0);    // RGB for red-orange

    vec3 interpolatedColor = mix(brightOrange, redOrange, st.x);

    gl_FragColor = vec4(interpolatedColor, 1.0);

  }
  `;
}

const Wave: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000
      );

      camera.position.y = 650;
      camera.position.z = -1000;

      const SEPARATION = 100,
        AMOUNTX = 100,
        AMOUNTY = 100;
      const numParticles = AMOUNTX * AMOUNTY;

      const positions = new Float32Array(numParticles * 3);

      let i = 0,
        j = 0;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
          positions[i + 1] = 0; // y
          positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z

          i += 3;
          j++;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const uniforms = {
        u_pointsize: { value: 2.0 },
        u_resolution: {
          value: {
            x: window.innerWidth * window.devicePixelRatio,
            y: window.innerHeight * window.devicePixelRatio,
          },
        },
      };
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: vertexShader(),
        fragmentShader: fragmentShader(),
      });

      let particles = new THREE.Points(geometry, material);
      let count = 0;
      scene.add(particles);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);

      const renderScene = () => {
        requestAnimationFrame(renderScene);

        camera.lookAt(scene.position);
        const positions = particles.geometry.attributes.position.array;

        let i = 0,
          j = 0;

        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            positions[i + 1] =
              Math.sin((ix - count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.3) * 50 -
              positions[i] * 0.1;

            i += 3;
            j++;
          }
        }

        particles.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);

        count += 0.1;
      };

      renderScene();

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);

        // update uniforms.u_resolution
        if (uniforms.u_resolution !== undefined) {
          uniforms.u_resolution.value.x =
            window.innerWidth * window.devicePixelRatio;
          uniforms.u_resolution.value.y =
            window.innerHeight * window.devicePixelRatio;
        }
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return <div ref={containerRef} />;
};
export default Wave;
