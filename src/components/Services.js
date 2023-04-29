import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Spotify Clone",
    description:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    link: "https://spotify-clone-vbirla789.vercel.app/",
  },
  {
    name: "Weather API",
    description:
      "A Weather API using React can be designed to allow users to access real-time weather data for any location. The is built using React components and a weather API that provides weather data, such as temperature, wind speed, humidity. ",
    link: "https://spotify-clone-vbirla789.vercel.app/",
  },
  {
    name: "To Do App",
    description:
      " A To-Do app using React can be designed to help users keep track of tasks they need to complete. The app can be built using React components, state management using hooks, and local storage to save tasks.",
    link: "https://todo-app-xi-ebon.vercel.app/",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto mt-0">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-[#64ffda] mb-6"> Some Things I’ve Built</h2>

            <button className="btn btn-sm">
              {" "}
              <a href="https://github.com/vbirla789">See my work</a>
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-3 text-[#64ffda] ">
                        {name}
                      </h4>
                      <p className="font-semibold text-[#8892b0] font">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
