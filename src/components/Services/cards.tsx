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
    <div className="w-full mx-auto ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    icon: <FaUnlockAlt/>,
    title: "Privacy",
    description:
      "At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis.",
    link: "https://stripe.com",
  },
  {
    icon: <FaCar/>,
    title: "Veicle",
    description:
      "At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis.",
    link: "https://netflix.com",
  },
  {
    icon: <FaHeartbeat/>,
    title: "Life",
    description:
      "At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis.",
    link: "https://google.com",
  },
  {
    icon: <FaHospital/>,
    title: "Healt",
    description:
      "At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis.",
    link: "https://meta.com",
  },
  {
    icon: <MdOutlineVpnLock/>,
    title: "Navigation",
    description:
      "At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis.",
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
