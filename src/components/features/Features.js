import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {/* <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
         
        /> */}
        <Card
          title="Web Applications"
          des="Designed and implemented both frontend and backend components of Web applications."
          icon={<AiFillAppstore />}
        />
        {/* <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        /> */}
        <Card
          title="Mobile App Development"
          des="i can making software for smartphones and tablets, using react-native"
          icon={<FaMobile />}
        />
        {/* <Card
          title="UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiAntdesign />}
        /> */}
        <Card
          title="Hosting Websites"
          des="housing the files, data, and content that make up a website on a server that is connected to the Internet."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
