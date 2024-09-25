"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface AnimatedImageGridProps {
  column1: string[];
  column2: string[];
  column3: string[];
  column4: string[];
  column5: string[];
}

const backgroundColors = ["#EFF8FF", "#FFF1F1", "#FFFBE3"];

export default function AnimatedImageGrid({
  column1,
  column2,
  column3,
  column4,
  column5,
}: AnimatedImageGridProps) {
  const columns = [column1, column2, column3, column4, column5];

  // Set up animation controls and scroll event detection
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="relative h-[28rem] w-[90%] mx-auto overflow-hidden">
      {/* Fade overlay at top and bottom */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white via-transparent to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { duration: 0.5 } },
          hidden: { opacity: 0 },
        }}
        className="flex gap-9 overflow-hidden h-full justify-center items-baseline "
      >
        {columns.map((column, columnIndex) => (
          <motion.div
            key={columnIndex}
            className="flex flex-col gap-12"
            animate={{
              // Odd columns (1st, 3rd, 5th) scroll downward, even columns (2nd, 4th) scroll upward
              y: columnIndex % 2 === 0 ? [0, 100] : [0, -100],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
            style={{
              // Stagger the start position based on the column index
              transform: columnIndex % 2 === 0 ? "translateY(0)" : "translateY(0)",
            }}
          >
            {column.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="w-[12rem] h-[6rem] bg-white rounded-lg overflow-hidden flex items-center justify-center p-3 mx-auto"
                style={{
                  backgroundColor: backgroundColors[imageIndex % backgroundColors.length],
                  height: '6rem', // Fixed height
                }}
              >
                <Image
                  src={image}
                  alt={`Image ${columnIndex}-${imageIndex}`}
                  layout="intrinsic"
                  width={150}
                  height={100}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}

            {/* Duplicate images for seamless loop */}
            {column.map((image, imageIndex) => (
              <div
                key={`duplicate-${imageIndex}`}
                className="w-[12rem] h-[78rem] bg-white overflow-hidden flex items-center justify-center"
                style={{
                  backgroundColor: backgroundColors[imageIndex % backgroundColors.length],
                  height: '78rem !important', // Fixed height
                }}
              >
                <Image
                  src={image}
                  alt={`Duplicate Image ${columnIndex}-${imageIndex}`}
                  layout="intrinsic"
                  width={150}
                  height={100}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
