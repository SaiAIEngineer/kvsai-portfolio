"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
};

export default function Reveal({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.div>
  );
}
