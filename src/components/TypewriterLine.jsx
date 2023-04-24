import Typewriter from "typewriter-effect";

let words = [
  "C1 English User",
  "Systems Analyst Student",
  "Selftaught Developer",
];

export const TypewriterLine = () => {
  return (
    <Typewriter
      options={{
        strings: words,
        autoStart: true,
        loop: true,
      }}
    />
  );
};
