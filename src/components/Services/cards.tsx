"use client"

import { HoverEffect } from "../ui/card-hover-effect";
import { CiBitcoin } from "react-icons/ci";
import { FaUnlockAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { MdOutlineVpnLock } from "react-icons/md";
import { FaIdCard } from "react-icons/fa";

export function Cards() {
  return (
    <div className="w-full mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: <FaUnlockAlt/>,
    title: "Privacy",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    icon: <FaCar/>,
    title: "Veicle",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    icon: <FaHeartbeat/>,
    title: "Life",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    icon: <FaHospital/>,
    title: "Healt",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    icon: <MdOutlineVpnLock/>,
    title: "Navigation",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    icon: <FaIdCard/>,
    title: "Documents",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
