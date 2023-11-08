"use client";

import classNames from "classnames";

const Button = ({
  text,
  className,
  clickHandler,
}: {
  text: string;
  className?: string;
  clickHandler?: () => void;
}) => {
  return (
    <button
      className={classNames(
        className,
        "p-4 bg-[#000] rounded-lg text-white leading-[142%] font-semibold"
      )}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
