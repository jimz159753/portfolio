import React from "react";
import Particles from "react-tsparticles";

const DarkParticles = () => {
  return (
    <Particles
      id="tsparticles"
      className="tsparticles"
      options={{
        fpsLimit: 60,
        fullScreen: {
          enable: true,
        },
        background: {
          color: "#000000",
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onClick: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            grab: { distance: 400, links: { opacity: 1 } },
            push: { quantity: 4 },
            remove: { quantity: 2 },
            repulse: { distance: 200, duration: 0.4 },
          },
        },
        particles: {
          move: {
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 10,
              sync: false,
            },
          },
          number: { density: { enable: true, area: 800 }, value: 100 },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.5,
              speed: 1,
              sync: false,
            },
            random: false,
            value: 1,
          },
          shape: {
            character: [
              {
                fill: true,
                font: "Verdana",
                value: ["1", "0"],
                style: "",
                weight: "400",
              },
            ],
            polygon: { nb_sides: 5 },
            stroke: { color: "random", width: 1 },
            type: "char",
          },
          size: {
            anim: { enable: true, minimumValue: 8, speed: 20, sync: false },
            random: { minimumValue: 8, enable: true },
            value: 20,
          },
        },
      }}
    />
  );
};

export default DarkParticles;
