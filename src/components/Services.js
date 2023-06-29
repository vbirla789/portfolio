import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "Fashion-store",
    description:
      "The application is built on React, a JavaScript library for building interactive user interfaces. Create and save new products of recommended tracks based on your existing cart management.",
    link: "https://store-dt7b.vercel.app/",
  },
  {
    name: "Nike-store-redux",
    description:
      "The application is built on React, a JavaScript library for building interactive user interfaces.For state management, Redux.To enhance the visual appeal and responsiveness of our app,Tailwind CSS.",
    link: "https://nike-app-redux.vercel.app/",
  },
  {
    name: "Musify App",
    description:
      " A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks. Create and save new playlists of recommended tracks based on your existing playlists.",
    link: "https://spotify-clone-vbirla789.vercel.app/",
  },
];

const Services = () => {
  return (
    <section className="section " id="services">
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
                  <div className=" h-[146px] mb-[38px] flex " key={index}>
                    <div className="max-w-[476px] ">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-0  text-[#64ffda] ">
                        {name}
                      </h4>
                      <p className="font-semibold text-[#8892b0] mb-25">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                        target={"_blank"}
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
