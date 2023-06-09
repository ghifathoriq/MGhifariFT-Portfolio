import React from "react";
import "./loaderHome.css";
import { motion } from "framer-motion";

const LoaderHome = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: -10000,
        transition: {
          duration: 10,
          delay: 2.5,
        },
      }}
      exit={{ y: window.innerWidth }}
      className="loaderHome"
    >
      <div className="containerLoaderHome">
        <motion.span
          className="loaderText"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8 },
            transitionEnd: {
              display: "none",
            },
          }}
        >
          Hayy
        </motion.span>
        <motion.span
          className="loaderText"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1 },
            transitionEnd: {
              display: "none",
            },
          }}
        >
          مرحبًا
        </motion.span>
        <motion.span
          className="loaderText"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4 },
            transitionEnd: {
              display: "none",
            },
          }}
        >
          Konnichiwa
        </motion.span>
        <motion.span
          className="loaderText"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.7 },
            transitionEnd: {
              display: "none",
            },
          }}
        >
          Bonjour
        </motion.span>
        <motion.span
          className="loaderText"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2 },
          }}
        >
          Здравствуйте
        </motion.span>
      </div>
    </motion.div>
  );
};

export default LoaderHome;
