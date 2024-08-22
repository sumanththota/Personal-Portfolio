"use client";

import { motion } from "framer-motion";
import Image from "next/image";

Image;
export const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="w-[198px] h-[198px] xl:w-[298px] xl:h-[298px] mix-blend-plus-darker">
          <Image
            src="/ProfileCircularDark.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};
