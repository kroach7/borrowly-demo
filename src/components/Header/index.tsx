"use client";

import { Button, Logo } from "@src/components/";

const Header = () => {
  return (
    <header className="py-5 bg-[#f2f2f2]">
      <div className="container flex justify-between">
        <Logo />
        <Button text="Personalize" className="w-[154px] text-[14px]" />
      </div>
    </header>
  );
};

export default Header;
