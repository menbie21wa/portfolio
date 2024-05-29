import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="w-full items-center py-3 lgl:py-8 font-titleFont flex flex-col gap-2">
        <p className=" text-sm text-designColor tracking-[4px]">2021 - 2023</p>
        <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
      </div>
      {/* part one */}
      <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div>
          <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Back-end Developer"
              subTitle="bdr - Jun 10, 2022 - Dec 20, 2023"
              result="B-e-D"
              des="I had the pleasure of working with E+up software company as our back-end developer, and
                I`m a true professional to consistently delivers high-quality work."
            />
            <ResumeCard
              title="Front-end Developer"
              subTitle="bdr - Oct 14, 2022 - Jun 08, 2022"
              result="F-e-D"
              des="I had the pleasure of working with E+up software company as our front-end developer, and I couldn't be more impressed with their skills and dedication."
            />
          </div>
        </div>
        <div>
          <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Front-end Developer"
              subTitle="bdr - Oct 14, 2022 - Jun 08, 2022"
              result="F-e-D"
              des="With a solid background in full-stack development, a keen eye for design, and a commitment to delivering high-quality websites, I am confident in my ability to contribute effectively to your team."
            />
            <ResumeCard
              title="Front-end Developer"
              subTitle="bdr - Oct 14, 2022 - Jun 08, 2022"
              result="F-e-D"
              des="In my previous role as a front-end developer at E+up, I successfully led the development of several e-commerce projects from conception to implementation."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
