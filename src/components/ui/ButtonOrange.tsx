"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface JoinWithUsButtonProps {
  href?: string; // optional for linking
  children: React.ReactNode;
  widthClass?: string;
  heightClass?: string;
}

export const ButtonOrange: React.FC<JoinWithUsButtonProps> = ({ href, children, widthClass, heightClass }) => {
  // Định nghĩa các lớp CSS chung cho nút
  const buttonClasses = `flex items-center justify-center gap-2 cursor-pointer transition-colors bg-[#da4b19] border border-[#da4b19] text-white ${widthClass} ${heightClass} rounded-lg`;

  const buttonContent = (
    <>
      {children}
      <FontAwesomeIcon icon={faArrowRight} />
    </>
  );

  return href ? (
    <Link href={href} className={buttonClasses}>
      {buttonContent}
    </Link>
  ) : (
    <div className={buttonClasses}>
      {buttonContent}
    </div>
  );
};
