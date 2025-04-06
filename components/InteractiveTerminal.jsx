"use client";

import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const commands = {
  help: `Available commands:\n- help\n- projects\n- contact\n- about\n- clear`,
  about: "I'm Rith Banerjee — a frontend developer passionate about UI/UX.",
  projects: () => {
    return (
      <div className="flex flex-col">
        <a href="#projects" className="text-green-400">
          📁 CryptoTracker
        </a>
        <a href="#projects" className="text-green-400">
          📁 GenStrongPass
        </a>
        <a href="#projects" className="text-green-400">
          📁 Focus-on-Today
        </a>
      </div>
    );
  },
  contact: () => {
    return "Email: rithcoderr@gmail.com | GitHub: https://github.com/Rithb898";
  },
  clear: () => "",
};

const TypingAnimation = ({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}) => {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn("text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
};

const AnimatedSpan = ({ children, delay = 0, className, ...props }) => (
  <motion.div
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: delay / 1000 }}
    className={cn("grid text-sm font-normal tracking-tight", className)}
    {...props}
  >
    {children}
  </motion.div>
);

function InteractiveTerminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "> npm install rith-portfolio" },
    { type: "response", text: "✔ Successfully installed!" },
    {
      type: "system",
      text: `> Available commands:\n- help\n- projects\n- contact\n- about\n- clear`,
    },
  ]);

  const inputRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = command.trim().toLowerCase();
      const newHistory = [...history, { type: "input", text: `> ${trimmed}` }];

      if (trimmed in commands) {
        const response =
          typeof commands[trimmed] === "function"
            ? commands[trimmed]()
            : commands[trimmed];
        if (trimmed === "clear") {
          setHistory([]);
        } else {
          setHistory([...newHistory, { type: "response", text: response }]);
        }
      } else {
        setHistory([
          ...newHistory,
          { type: "error", text: `'${trimmed}' is not a valid command.` },
        ]);
      }

      setCommand("");
    }
  };

  return (
    <div
      className={cn(
        "z-0 h-full max-h-[600px] w-full max-w-md md:max-w-4xl rounded-xl border border-border bg-background",
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4">
        {history.map((item, idx) => (
          <div
            key={idx}
            className={cn("text-sm md:text-xl w-screen", {
              "text-white": item.type === "system" || item.type === "input",
              "text-green-400": item.type === "response",
              "text-red-400": item.type === "error",
            })}
          >
            {item.text}
          </div>
        ))}
        <div className="flex items-center gap-2 md:text-lg text-white">
          &gt;
          <input
            type="text"
            ref={inputRef}
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent outline-none w-full"
            autoFocus
            placeholder="Type a command..."
          />
        </div>
      </pre>
    </div>
  );
}

export default InteractiveTerminal;
