"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  FaDocker,
  FaGoogle,
} from "react-icons/fa";
import Image from "next/image";
const about = {
  title: "About me",
  description: "",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Sumanth Thota",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (716) 617 9181",
    },
    {
      fieldName: "Experience",
      fieldValue: "3 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "sumanththota7@gmail.com",
    },
  ],
};
const Awards = {
  title: "Awards",
  items: [
    {
      award: "Recieved Best Employee Award and Team Player Award at Accenture",
    },
    {
      award: "Awarded as Ultimate Engineer by onshore team.",
    },
    {
      award: "Solved over 200 problems on leetcode",
    },
  ],
};

const experience = {
  title: "My Experience",
  items: [
    {
      image: "/Ub_logo.png",
      title: "Software Developer",
      company: "University at Buffalo",
      duration: "2024 - Present",
      skills: ["Go", "React", "AWS", "Lambda"],
      description:
        "Led full-stack development for a research platform leveraging Go, React, and AWS enabling seamless collaboration among 4 universities by providing access to geographically dispersed edge nodes.",
    },
    {
      image: "/Accenture_logo.png",
      title: "Software Developer",
      company: "Accenture",
      duration: "2020 - 2022",
      skills: [
        "Java",
        "Angular",
        "JavaScript",
        "Selenium",
        "MongoDB",
        "Docker",
      ],
      description:
        "Led the initiative to implement a CQRS and Event Sourcing solution that aggregated employee data for the HR Platform. This decoupled reads and writes to scale modules independently based on traffic. Primarily focused on Java, MongoDB and Docker.",
    },
    {
      image: "/Krify_logo.jpeg",
      title: "Software Intern",
      company: "Krify Software Solutions",
      duration: "2019 - 2020",
      skills: ["Java", "Spring Boot", "PostgreSQL", "HIbernate", "JQuery"],
      description:
        "Aided in the development of a loyalty program application using Spring MVC, Hibernate, jQuery, and Lombok, which incentivized user engagement through a referral bonus structure.",
    },
  ],
};

const education = {
  title: "My Education",
  items: [
    {
      image: "/Ub_logo.png",
      institution: "University at Buffalo",
      degree: "Masters in Computer Science",
      duration: "2022 - 2023",
    },
    {
      image: "/Gitam_logo.png",
      institution: "Gitam University",
      degree: "Bachelors in Computer science",
      duration: "2016 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },

    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },

    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <FaGoogle />,
      name: "GCP",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
  ],
};

const Resume = () => {
  return (
    // <div>hi</div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        tansition: { delay: 0.4, duartion: 0.4, ease: "easeIN" },
      }}
      className="min-h-[110vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[50px]"
        >
          <TabsList className="flex, flex-col w-full max-w-[300px] mx-auto xl:ml-0 gap-10">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[50vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1  gap-[30px]">
                    {experience.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329]  pt-5 px-5 pb-8 rounded-xl flex flex-col items-center lg:items-start gap-1"
                        >
                          <div className="flex flex-row  w-full">
                            <Image
                              src={item.image}
                              width={65}
                              height={35}
                              alt=""
                            ></Image>
                            <div className="flex flex-row justify-between w-full  ml-5 ">
                              <span>
                                <p className="text-xl ">{item.company}</p>
                                <h3 className="my-auto">{item.title}</h3>
                              </span>

                              <span className="text-accent">
                                {item.duration}
                              </span>
                            </div>
                          </div>

                          <div className="mt-10 text-md font-custom">
                            <span className="text-accent mr-5">•</span>
                            {item.description}
                          </div>
                          <div>
                            <div className="flex flex-row gap-3 items-center justify-between">
                              {item.skills.map((skill, idx) => {
                                return (
                                  <span
                                    key={idx}
                                    className=" rounded-full  items-center border border-accent px-3 py-1"
                                  >
                                    <div className="flex font-custom">
                                      {skill}
                                    </div>
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1  gap-[30px]">
                    {education.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] pt-5 px-5 pb-5 rounded-xl flex flex-col items-center lg:items-start gap-1"
                        >
                          <div className="flex flex-row w-full">
                            <Image
                              src={item.image}
                              width={50}
                              height={50}
                              alt=""
                            ></Image>
                            <div className="flex flex-row justify-between w-full ml-5 ">
                              <span>
                                <p className="text-xl">{item.institution}</p>
                                <h3>{item.degree}</h3>
                              </span>

                              <span className="text-accent">
                                {item.duration}
                              </span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className=" text-4xl font-bold ">{skills.title}</h3>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cils-4 xl:gap-[30px]">
                    {skills.skillsList.map((item, idx) => {
                      return (
                        <li key={idx}>
                          <span className="text-accent">{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="achievements" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Awards.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1  gap-[30px]">
                    {Awards.items.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="bg-[#232329] pt-5 px-5 pb-5 rounded-xl flex flex-col items-center lg:items-start gap-1"
                        >
                          <p className="text-lg ">
                            <span className="text-accent">• </span>
                            {item.award}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] ">
                <h3 className=" text-4xl font-bold ">{about.title}</h3>
                <ul className="grid grid-cols-1 xl: grid-col-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, idx) => {
                    return (
                      <li
                        key={idx}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
