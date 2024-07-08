import React, { useRef } from "react";
import {motion, useScroll, useTransform} from "framer-motion"
const MultiLayer = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "grid",
        placeItems: "top",
      }}
    >
      <motion.h1
        style={{
          fontWeight: 9000,
          color: "black",
          fontSize: "9rem",
          position: "relative",
          zIndex: 10,
          marginLeft: "230px",
          y: textY
        }}
      >
        BLOGS
      </motion.h1>
      <motion.div
        style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(/main.jpg)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: backgroundY
        }}
      />
      <div
        style={{
            position: "absolute",
            inset: 0,
            zIndex: 20,
            backgroundImage: `url(/Subtract.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover"
        }}
      />
    </div>
  );
};

export default MultiLayer;
