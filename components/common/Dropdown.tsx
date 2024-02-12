"use client";
import React, { useState } from "react";
import Link from "next/link";

import { MenuItem } from "@/types/index";
import AnimateHeight from "react-animate-height";
import { MdArrowDropDown } from "react-icons/md";

interface Props {
  item: MenuItem;
}

export default function Dropdown(props: Props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];

  const active = isOpen && "text-white";
  const arrowRotate = isOpen && "rotate-180";

  return (
    <div
      className="relative z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex gap-1 items-center justify-center duration-300 ease-linear hover:text-white text-base ${active}`}
      >
        <p className="font-bold md:font-normal">{item.title}</p>
        <MdArrowDropDown className={`w-4 h-4 duration-300 ${arrowRotate}`} />
      </button>
      <AnimateHeight
        duration={300}
        height={isOpen ? "auto" : 0}
        className="md:absolute top-10 left-0 z-50 w-full md:bg-secondary md:shadow-lg md:shadow-black/40 rounded-lg md:w-96"
      >
        <ul className=" flex flex-col text-left gap-6 md:gap-2 p-4">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item?.route || ""}
                className={`flex gap-4 items-center p-2 text-white duration-300 ease-linear rounded-lg hover:bg-secondary md:hover:bg-black md:p-3`}
              >
                {item.icon && <div>{item.icon}</div>}
                <div className="flex flex-col gap-1">
                  <p className="text-sm md:text-base">{item.title}</p>
                  {item.subTitle && (
                    <p className="text-sm text-zinc-400">{item.subTitle}</p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </AnimateHeight>
    </div>
  );
}
