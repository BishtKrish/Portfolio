import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaJava,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiExpress, 
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaJava,
          FaHtml5,
          FaCss3,
          FaJs,
          FaReact,
          SiNextdotjs,
          SiExpress,
          FaWordpress,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiAdobexd, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Google Cloud Developer Achievement",
        stage: "2024",
      },
      {
        title: "smart India Hackathon - Finalist",
        stage: "2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Intern - Kolorowey Media Pvt. Ltd",
        stage: "September - Novembar (2024)",
      },
      {
        title: "UX/UI Designer - Freelancer",
        stage: "March - May (2024)",
      },
      {
        title: "Web Developer - Freelancer",
        stage: "July - January (2023)",
      },
     
    ],
  },
  {
    title: "Eduction",
    info: [
      {
        title: "B.Tech(CSE) - DevBhoomi Uttarakhand University Dehradun",
        stage: "2022-2026",
      },
      {
        title: "Intermediate - G.I.C Bhanoli Almora Uttarakhand",
        stage: "2022",
      },
      {
        title: "High School - G.H.S.S Dungra Almora Uttarakhand",
        stage: "2020",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
  <Circles />

  {/* avatar img */}
  <motion.div
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="hidden xl:flex absolute bottom-0 -left-[370px]"
  >
    <Avatar />
  </motion.div>

  <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-4">
    {/* text */}
    <div className="flex-1 flex flex-col justify-center">
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h2 text-5xl md:text-5xl"
      >
        Passionate creator delivering{" "}
        <span className="text-accent">innovative </span> digital solutions.
      </motion.h2>

      {/* Text paragraph hidden on small screens */}
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        className="hidden md:block max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
      >
        I'm Creative and detail-oriented developer with a passion for designing
        intuitive websites and solving complex problems. Skilled in Java,
        React, and building user-friendly applications. Dedicated to continuous
        learning and innovation.
      </motion.p>

      {/* counters */}
      <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        animate="show"
        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
      >
        <div className="flex flex-1 xl:gap-x-6">
          {/* experience */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={1} duration={5} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Years of experience.
            </div>
          </div>

          {/* clients */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={5} duration={1} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Satisfied clients.
            </div>
          </div>

          {/* projects */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={10} duration={1} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Finished projects.
            </div>
          </div>

          {/* awards */}
          <div className="relative flex-1">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CountUp start={0} end={4} duration={1} />
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Winning awards.
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* info */}
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
    >
      <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 mt-4">
        {aboutData.map((item, itemI) => (
          <div
            key={itemI}
            className={`${
              index === itemI &&
              "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
            } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
            onClick={() => setIndex(itemI)}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
        {aboutData[index].info.map((item, itemI) => (
          <div
            key={itemI}
            className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
          >
            {/* title */}
            <div className="font-light mb-2 md:mb-0">{item.title}</div>
            <div className="hidden md:flex">-</div>
            <div>{item.stage}</div>

            <div className="flex gap-x-4">
              {/* icons */}
              {item.icons?.map((Icon, iconI) => (
                <div key={iconI} className="text-2xl text-white">
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</div>

  );
};

export default About;
