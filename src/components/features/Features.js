import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { SiProgress } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card title="Business Stratagy" des="I design and execute business strategies that align technology with real business goals. I focus on building scalable digital products, improving user experience, and optimizing workflows to drive growth and efficiency." />
        <Card title="App Development" des="I develop responsive and high-performance web applications using modern technologies. I focus on clean code, scalable architecture, and intuitive user interfaces to deliver reliable digital products." icon={<AiFillAppstore />} />
        <Card title="SEO Optimisation" des="I optimize websites for search engines by improving technical SEO, site performance, and content structure to increase visibility and organic traffic." icon={<SiProgress />} />
      </div>
    </section>
  );
};

export default Features;
