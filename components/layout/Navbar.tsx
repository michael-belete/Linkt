"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import AnimateHeight from "react-animate-height";
import { usePathname } from "next/navigation";
import { MenuItem } from "@/types";
import Dropdown from "../common/Dropdown";
import { TbCpu, TbMessageChatbot, TbEye } from "react-icons/tb";
import { RiAiGenerate } from "react-icons/ri";

const Navbar = () => {
  const path = usePathname();
  const baseUrl = "solutions";
  const menuItems: MenuItem[] = [
    {
      title: "Solutions",
      children: [
        {
          title: "Chatbots",
          icon: <TbMessageChatbot className="w-6 h-6 md:w-8 md:h-8" />,
          subTitle: "Integrate LLM's into industry-specific tasks",
          route: `/${baseUrl}/chatbots`,
        },
        {
          title: "Computer Vision",
          icon: <TbEye className="w-6 h-6 md:w-8 md:h-8" />,
          subTitle: "Enhance insights with image and video analysis",
          route: `/${baseUrl}/computer-vision`,
        },
        {
          title: "Recommendation",
          icon: <TbCpu className="w-6 h-6 md:w-8 md:h-8" />,
          subTitle: "Tailor customer experiences with personalized suggestions",
          route: `/${baseUrl}/recommendation`,
        },
        {
          title: "Content Generation",
          icon: <RiAiGenerate className="w-6 h-6 md:w-8 md:h-8" />,
          subTitle: "Streamlining Digital Creativity with AI",
          route: `/${baseUrl}/content-generation`,
        },
      ],
    },
    {
      title: "Blog",
      route: "/blog",
    },
    {
      title: "Pricing",
      route: "/pricing",
    },
    {
      title: "Contact",
      route: "/contact",
    },
  ];

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [path]);

  return (
    <nav className="relative p-4">
      <div className="flex justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-24">
          <Logo />
        </div>

        {/* desktop navbar */}
        <ul className="hidden items-center gap-6 md:gap-12 md:flex">
          {menuItems.map((item) => (
            <li key={item.title}>
              {item.hasOwnProperty("children") ? (
                <Dropdown item={item} />
              ) : (
                <Link
                  href={item?.route || ""}
                  className={`text-silver-gray/60 duration-300 ease-linear hover:text-white text-sm md:text-base ${
                    path === item.route && "text-white"
                  }`}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}

          <a
            className="btn-primary px-4 py-2 sm:px-6 sm:py-3"
            target="_blank"
            href="https://cal.com/reidmccrabb/meet-with-reid"
          >
            Book a meeting
          </a>
        </ul>

        {/* mobile navbar */}
        <AnimateHeight
          className="absolute top-full left-0 z-50 w-full rounded-b-xl md:hidden "
          duration={300}
          height={show ? "auto" : 0}
        >
          <ul className=" flex flex-col gap-6 p-6 backdrop-blur-md">
            {menuItems.map((item) => (
              <li key={item.title}>
                {item.hasOwnProperty("children") ? (
                  <Dropdown item={item} />
                ) : (
                  <Link
                    href={item?.route || ""}
                    className={`text-silver-gray/60 font-bold duration-300 ease-linear hover:text-white ${
                      path === item.route && "text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}

            <li>
              <a
                className="btn-primary px-4 py-2 sm:px-6 sm:py-3"
                target="_blank"
                href="https://cal.com/reidmccrabb/meet-with-reid"
              >
                Book a meeting
              </a>
            </li>
          </ul>
        </AnimateHeight>

        {/* hamburger menu */}
        <button onClick={() => setShow(!show)} className="md:hidden">
          {show ? (
            <MdClose className="w-8 h-8" />
          ) : (
            <MdMenu className="w-8 h-8" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
