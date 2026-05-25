import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/8f8ab115-1b87-4327-a5aa-696376443c91/files/4ccf3206-4ec6-4f1b-a1bb-fd68ae7278c3.jpg"
          alt="Исторический Иркутск"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 opacity-70">Лонгрид · Культурное наследие</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          ДЕРЕВЯННЫЙ<br />ИРКУТСК
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Город, в котором каждый дом — живая летопись. История сибирского зодчества в резных наличниках и вековых брёвнах.
        </p>
        <div className="mt-10 text-sm opacity-60 uppercase tracking-widest animate-bounce">↓ Листайте</div>
      </div>
    </div>
  );
}