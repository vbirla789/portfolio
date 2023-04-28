import React from "react";

import Image from "../assets/Untitled design-1.jpg";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[70vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[30px] font-semibold leading-[2.0] lg:text-[30px] text-[#64ffda] "
            >
              <span>Hi, my name is</span>
            </motion.h1>
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1.3] lg:text-[55px] text-[#c1cef6]"
            >
              VISHAL <span>BIRLA</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[36px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-[#c1cef6] mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Web 3.0 Enthu. ",
                  2000,
                ]}
                speed={30}
                className="text-[#64ffda]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              class="text-[55px] font-bold leading-[2.0] lg:text-[55px] opacity-10 text-[#a8b2d1]"
            >
              I build things for the web.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 font-semibold text-[25px] text-[#8892b0]"
            >
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences.
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a
                href="https://drive.google.com/file/d/1qp3Ta6CfnYKlivl5culT9IMX8YvvqgH1/view?usp=sharing"
                className="text-[27px] font-semibold leading-[2.0] lg:text-[27px] text-[#64ffda] btn-link"
              >
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[30px] gap-x-6 mx-auto  max-w-max lg:mx-0 mb-20 mt-0"
            >
              <a href="https://www.linkedin.com/in/vishal-birla-587235187/">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/vbirla789">
                <FaGithub />
              </a>
              <a href="https://twitter.com/VishalB10042696">
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px] h-[400px] border-2 border-white/50 rounded-xl overflow-hidden mb-[100px]
"
          >
            <img src={Image} className="block " alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
