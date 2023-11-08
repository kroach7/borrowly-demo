"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <Image src="/images/logo.svg" alt="" width={22} height={47} />
      <span className="text-[20px] leading-[150%] font-extrabold">
        Borrowly.ca
      </span>
    </div>
  );
};

export default Logo;
