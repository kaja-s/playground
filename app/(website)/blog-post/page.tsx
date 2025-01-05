"use client";

import { Content } from "@/app/components/content";
import { Navbar } from "@/app/components/navbar";
import { motion, useScroll, useSpring } from "motion/react";
export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <Navbar />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "var(--color-red)",
        }}
      />
      <Content />
    </div>
  );
}
