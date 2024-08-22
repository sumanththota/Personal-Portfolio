import { Photo } from "@/components/Photo";
import Resume from "@/components/Resume";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import React from "react";
import { FiDownload } from "react-icons/fi";

const page = () => {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-210">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="h1">
                Hello, I&apos;m <br />
                <span className="text-accent ">Sumanth Thota</span>
              </h1>
              <p className="xl:text-xl max-w-[500px] mb-9 text-white/80 ">
                Welcome to my page. Here, I am going to show my experiences and
                my expertise in tech{" "}
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="/Sumanth_Thota_2024_Resume.pdf" download>
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2 "
                  >
                    Resume
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-6 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border boarder-accent rounded-full flex items-center justify-center"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </section>
      <section className="h-full">
        <Resume />
      </section>
    </>
  );
};

export default page;
