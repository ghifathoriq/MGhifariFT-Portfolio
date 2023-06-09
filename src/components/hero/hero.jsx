/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./hero.css";
import profilePicture from "../../assets/images/picture1.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  //--------------------------------------------------kecepatan swipe title pada array 400
  const right = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const left = useTransform(scrollYProgress, [0, 1], [0, -500]);
  return (
    <div className="hero" id="hero">
      <div className="containerHero">
        {/* title text stroke 1 */}
        <div className="firstTitle">
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2.1,
              },
            }}
            style={{ x: right }}
            className="textField"
          >
            FullStack Engineer
          </motion.h1>
          <motion.h1
            initial={{ x: -1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2.1,
              },
            }}
            style={{ x: right }}
            className="textOutline"
          >
            FullStack Engineer
          </motion.h1>
        </div>
        {/* second title stroke */}
        <div className="secondTitle">
          <motion.h1
            initial={{ x: 1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2,
              },
            }}
            style={{ x: left }}
            className="textField"
          >
            Software Engineer
          </motion.h1>
          <motion.h1
            initial={{ x: 1800 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.8,
                delay: 2,
              },
            }}
            style={{ x: left }}
            className="textOutline"
          >
            Software Engineer
          </motion.h1>
        </div>
        {/* profile picture */}
        <div className="profilePicture">
          <motion.img
            className="heroPicture"
            initial={{ y: -200, opacity: 1 }}
            animate={{
              y: 0,
              transition: {
                duration: 1,
                delay: 2.1,
              },
            }}
            src={profilePicture}
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
