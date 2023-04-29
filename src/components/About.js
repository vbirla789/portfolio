import React from "react";
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="min-h-[140vh] lg:min-h-[78vh] " id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-[#64ffda]  mt-10">About me.</h2>
            <h3 className="font-semibold text-[25px] text-[#8892b0]">
              I'm a highly motivated individual with a passion for engineering
              and software development. Currently pursuing degree in
              engineering. I have shown remarkable talent and dedication towards
              my field. As an expert in MERN stack development, and a natural
              flair for designing and building modern, user-friendly interfaces.
              <br />I am highly skilled in working with popular front-end
              frameworks like React, and enjoys building scalable back-end
              systems using Node.js and Express.js. In addition to my
              development skills, I am also an enthusiastic web 3.0 enthusiast,
              and got a deep interest in the future of blockchain technology and
              decentralized applications.
            </h3>

            <h3 className="font-semibold text-[25px] text-[#8892b0]">
              My ability to work well in teams, combined with my excellent
              communication skills and to work as hard as to get the job done,
              make me a valuable asset to any project. I am always looking for
              new challenges and opportunities to learn, and committed to
              staying up-to-date with the latest trends and best practices in
              the field.
            </h3>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 mt-5">
              <div>
                <div className="text-[40px] font-tertiary text-[#64ffda] mb-2">
                  {inView ? (
                    <CountUp start={520} end={525} duration={10} />
                  ) : null}
                </div>
                <div className="font-primary text-sm translate-[2px] text-[#8892b0]">
                  hours of <br />
                  coding
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-[#64ffda] mb-2">
                  {inView ? <CountUp start={0} end={5} duration={10} /> : null}+
                </div>
                <div className="font-primary text-sm translate-[2px] text-[#8892b0]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-[#64ffda] mb-2 ">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm translate-[2px] text-[#8892b0]">
                  Year
                  <br />
                  of Experience
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a
                href="https://drive.google.com/file/d/1qp3Ta6CfnYKlivl5culT9IMX8YvvqgH1/view?usp=sharing"
                className="text-[27px] font-semibold leading-[2.0] lg:text-[27px] text-[#64ffda] btn-link"
              >
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
