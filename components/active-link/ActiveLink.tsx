"use client";
import Link from "next/link";
import React from "react";
import style from "@/components/active-link/ActiveLink.module.css";
import { usePathname } from "next/navigation";
interface ActiveLinkProps {
  path: string;
  label: string;
}
const ActiveLink = ({ path, label }: ActiveLinkProps) => {
  const pathName = usePathname();
  return (
    <Link className={`${style.link} ${pathName === path ? style["active-link"] : null}`} href={path}>
      {label}
    </Link>
  );
};

export default ActiveLink;
