"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { image: "/logos/gateway.png" },
  { image: "/logos/macro-world.png" },
  { image: "/logos/wave-movers.png" },
  { image: "/logos/ai-invento.png" },
  { image: "/logos/excel.png" },
  { image: "/logos/first-cry.png" },
  { image: "/logos/techbiz.png" },
  { image: "/logos/iit.png" },
];

const Slider = () => {
  const duplicatedSlides = [...images, ...images];

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        paddingTop: "12px",
        paddingBottom: "12px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "25%",
            height: "100%",
            // background: "linear-gradient(to right, black, transparent)",
            filter: "blur(3px)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "25%",
            height: "100%",
            // background: "linear-gradient(to left, black, transparent)",
            filter: "blur(3px)",
          }}
        ></div>
      </div>

      <motion.div
        style={{
          display: "flex",
        }}
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              width: `${100 / images.length}%`,
              marginRight: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div
                style={{
                  backgroundColor: "white", 
                  padding: "0px 10px 0px 10px", 
                  borderRadius: "6px",
                  display: "flex", 
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%", 
                  height: "80%",
                }}
              >
                <Image
                  src={slide.image}
                  alt={`slide-${index}`}
                  width={165}
                  height={25}
                  style={{
                    maxWidth: "100%", // Ensure the image scales with the container width
                    maxHeight: "80%", // Ensure the image scales with the container height
                    objectFit: "contain", // Scale the image proportionally
                  }} // Adjust image size as needed
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
