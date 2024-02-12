import React from "react";
import Image from "next/image";
import logo from "@/public/common/linkt.svg";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="object-cover w-auto h-9 md:h-10"
        src={logo}
        alt="Linkt logo icon"
        priority
      />
    </Link>
  );
};

export default Logo;
