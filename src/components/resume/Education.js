import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="w-full items-center py-3 lgl:py-8 font-titleFont flex flex-col gap-2">
        <p className=" text-sm text-designColor tracking-[4px]">2005 - 2021</p>
        <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
      </div>
      {/* part one */}
      <div className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
        <div>
          <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="BSc degree in Computer Science"
              subTitle="Debre Tabor University (2018 - 2021)"
              result="GPA 3.30"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
            <ResumeCard
              title="Grade 9-10"
              subTitle="Mengesha Jemberie Scondary School(2014 - 2015)"
              result="3.90/4"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
          </div>
        </div>
        <div>
          <div className="mt-6 lgl:mt-14 w-full h-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Grade 11-12"
              subTitle=" Dangila Higher Education Preparatory School(2016 - 2017)"
              result="4.75/5"
              des="Beyond academics, I have been an active participant in school activities has proven to be
               a posetive and respectful member of our school community."
            />
            <ResumeCard
              title="Grade 1-8"
              subTitle="Dangila Primary School (2005 - 2013)"
              result="4.75/5"
              des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
            />
          </div>
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
