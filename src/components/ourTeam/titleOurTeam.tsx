"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TitleOurTeam() {
  const words = [
    {
      text: "Our",
    },
    {
      text: "Team.",
      className: "text-primary dark:text-primary",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      </div>
    </div>
  );
}
