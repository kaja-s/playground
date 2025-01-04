"use client";

import * as motion from "motion/react-client";
import { useRef } from "react";

export default function Home() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  };

  const constraints = {
    width: 300,
    height: 300,
    backgroundColor: "#FFB2DB",
    borderRadius: 10,
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-8 items-center">
        <h1>Hello World</h1>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          style={ball}
        />

        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={ball}
        />

        <motion.div
          style={ball}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />

        <motion.div ref={constraintsRef} style={constraints}>
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            style={ball}
          />
        </motion.div>
      </div>
    </div>
  );
}
