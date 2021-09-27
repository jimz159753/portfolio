import React from "react";
import Particles from "react-tsparticles";

const DarkParticles = () => {
  return (
    <Particles
      id="tsparticles"
      className="tsparticles"
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "top",
            enable: true,
            outMode: "out",
            random: true,
            speed: 0.5,
          },
          number: {
            value: 170,
            density: {
              enable: false,
            },
          },
          size: {
            random: true,
            value: 2,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default DarkParticles;
