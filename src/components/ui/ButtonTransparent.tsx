"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface CallUsButtonProps {
  href?: string;
  children: React.ReactNode;
  widthClass?: string;
  borderColorClass?: string;
}

export const ButtonTransparent: React.FC<CallUsButtonProps> = ({ href, children, widthClass = "w-[8rem]", borderColorClass }) => {
  const content = (
    <div className={`call-us flex items-center gap-2 cursor-pointer hover:text-primary transition-colors ${borderColorClass ? `border ${borderColorClass}` : ''} ${widthClass}`}>
      {children}
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};
