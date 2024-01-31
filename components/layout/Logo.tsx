import React from "react";
import Image from "next/image";
import logo from "@/public/common/Linkt-logo.svg";
import Linkt from "@/public/common/Linkt.svg";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <div className="flex gap-2 items-center">
        <Image
          className="object-cover w-9 h-9"
          src={logo}
          alt="Linkt logo icon"
        />
        <Image
          className="object-cover w-12 h-6"
          src={Linkt}
          alt="Linkt logo text"
        />
      </div>
    </Link>
  );
};

export default Logo;
