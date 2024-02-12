import React from "react";
import Logo from "./Logo";

import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="relative z-50 bg-body">
      <div className="pt-12 pb-8 px-4 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col justify-between gap-12 sm:flex-row">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-base">Contact us</p>
            <a
              className=" text-silver-gray duration-300 ease-linear hover:text-white"
              href="mailto:info@linkt.ai"
            >
              info@linkt.ai
            </a>
          </div>

          <div className="space-y-4">
            <p className="font-bold text-base">Learn more</p>
            <a
              className="btn-primary px-6 py-3"
              target="_blank"
              href="https://cal.com/reidmccrabb/meet-with-reid"
            >
              Book a meeting
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-t-silver-gray flex justify-between">
          <Logo />

          <div className="flex gap-4 items-center">
            <a
              href="https://twitter.com/_linktai"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <FaXTwitter className="w-6 h-6 text-silver-gray duration-300 ease-linear group-hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/linktai"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-silver-gray duration-300 ease-linear group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
