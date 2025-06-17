"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

interface ButtonOrangeOutlineProps {
  href?: string; 
  children: React.ReactNode;
  widthClass?: string;
  heightClass?: string;
}

export const ButtonOrangeOutline: React.FC<ButtonOrangeOutlineProps> = ({ href, children, widthClass, heightClass }) => {
  const [isHovered, setIsHovered] = useState(false);

  const content = (
    <div 
      className={`flex items-center justify-center gap-2 cursor-pointer transition-colors bg-transparent border border-[#da4b19] text-[#da4b19] hover:bg-[#da4b19] hover:text-white rounded-lg ${widthClass} ${heightClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <FontAwesomeIcon 
        icon={faArrowRight} 
        style={{ color: isHovered ? "white" : "#da4b19" }} 
      />
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};