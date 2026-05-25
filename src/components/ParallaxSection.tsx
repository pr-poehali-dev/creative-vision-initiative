import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  id?: string;
  image: string;
  alt: string;
  label: string;
  placeholder: string;
  textPosition?: "bottom-left" | "bottom-right";
}

export default function ParallaxSection({
  id,
  image,
  alt,
  label,
  placeholder,
  textPosition = "bottom-right",
}: ParallaxSectionProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  const isRight = textPosition === "bottom-right";

  return (
    <div
      id={id}
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img src={image} alt={alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <h3 className={`absolute top-12 ${isRight ? "right-6" : "left-6"} text-white uppercase z-10 text-sm md:text-base tracking-widest`}>
        {label}
      </h3>

      <p className={`absolute bottom-12 ${isRight ? "right-6 text-right" : "left-6 text-left"} text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl z-10 leading-tight italic`}>
        {placeholder}
      </p>
    </div>
  );
}
