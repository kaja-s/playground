"use client";

import { Navbar } from "@/app/components/navbar";
import * as motion from "motion/react-client";
import { useRef, useState } from "react";

export default function Page() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

  const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#77a4d4",
    borderRadius: 5,
  };

  const constraints = {
    width: 300,
    height: 300,
    backgroundColor: "#e4edf6",
    borderRadius: 10,
  };

  const container = {
    width: 120,
    height: 70,
    backgroundColor: "#e4edf6",
    borderRadius: 50,
    cursor: "pointer",
    display: "flex",
    padding: 10,
  };

  const handle = {
    width: 50,
    height: 50,
    backgroundColor: "#77a4d4",
    borderRadius: "50%",
  };

  const box: React.CSSProperties = {
    width: 50,
    height: 50,
    backgroundColor: "#77a4d4",
    borderRadius: 10,
    position: "absolute",
    top: 0,
    left: 0,
    offsetPath: `path("M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5")`,
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex flex-col gap-8 items-center">
          <h1>Enter Animation</h1>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
          />

          <h1>Gestures (Click me)</h1>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={ball}
          />

          <h1>Rotate</h1>
          <motion.div
            style={ball}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
          />

          <h1>Constraints (Drag me)</h1>
          <motion.div ref={constraintsRef} style={constraints}>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              style={ball}
            />
          </motion.div>

          <h1>Toggle Animation (Click me)</h1>
          <button
            className="toggle-container"
            style={{
              ...container,
              justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
          >
            <motion.div
              className="toggle-handle"
              style={handle}
              layout
              transition={{ type: "spring", visualDuration: 0.2, bounce: 0.2 }}
            />
          </button>

          <h1>Motion along a path</h1>
          <div style={{ position: "relative" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="451" height="437">
              <motion.path
                d="M 239 17 C 142 17 48.5 103 48.5 213.5 C 48.5 324 126 408 244 408 C 362 408 412 319 412 213.5 C 412 108 334 68.5 244 68.5 C 154 68.5 102.68 135.079 99 213.5 C 95.32 291.921 157 350 231 345.5 C 305 341 357.5 290 357.5 219.5 C 357.5 149 314 121 244 121 C 174 121 151.5 167 151.5 213.5 C 151.5 260 176 286.5 224.5 286.5 C 273 286.5 296.5 253 296.5 218.5 C 296.5 184 270 177 244 177 C 218 177 197 198 197 218.5 C 197 239 206 250.5 225.5 250.5 C 245 250.5 253 242 253 218.5"
                fill="transparent"
                strokeWidth="12"
                stroke="#e4edf6"
                strokeLinecap="round"
                initial={{ pathLength: 0.001 }}
                animate={{ pathLength: 1 }}
                transition={transition}
              />
            </svg>
            <motion.div
              style={box}
              initial={{ offsetDistance: "0%", scale: 2 }}
              animate={{ offsetDistance: "100%", scale: 1 }}
              transition={transition}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
