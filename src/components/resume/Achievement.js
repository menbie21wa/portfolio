import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
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
          <div className="mt-6 lgl:mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title=" Front-end Developer"
              subTitle="Debre Tabor University (2018 - 2021)"
              result="F-e-D"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
            {/* <ResumeCard
              title=" Back-end Developer"
              subTitle="Mengesha Jemberie Scondary School(2014 - 2015)"
              result="B-e-D"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            /> */}
          </div>
        </div>
        <div>
          <div className="mt-6 lgl:mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Grade 11-12"
              subTitle=" Dangila Higher Education Preparatory School(2016 - 2017)"
              result="4.75/5"
              des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
            />
            {/* <ResumeCard
              title="Grade 1-8"
              subTitle="Dangila Primary School (2005 - 2013)"
              result="4.75/5"
              des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
            /> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
