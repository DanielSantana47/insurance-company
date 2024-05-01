"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { TeamCardType } from "@/types/teamCardType";

export function TeamCard({title,description,src}: TeamCardType) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative flex flex-col items-center group/card  hover:shadow-2xl hover:shadow-primary/50 bg-card/50 hover:border-primary/30 w-auto  h-auto rounded-3xl p-6 border  transition-all duration-500">
        <CardItem
          translateZ="40"
          className="text-3xl font-bold text-neutral-600 dark:text-white w-full text-center mx-auto"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="40"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 w-full text-center"
        >
          {description}
        </CardItem>
        <CardItem translateZ="80" className="w-full mt-4">
          <img
            src={src}
            height="1000"
            width="1000"
            className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        
          <CardItem
            translateZ={30}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Social media
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
