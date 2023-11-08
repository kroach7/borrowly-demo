"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import classNames from "classnames";

const Sort = () => {
  const [showSort, setShowSort] = useState(false);

  const router = useRouter();

  const searchParams = useSearchParams();
  const sort_by = searchParams.get("sort_by") || "";
  const sort_order = searchParams.get("sort_order") || "";

  const params = new URLSearchParams(searchParams);

  const btnRef = useRef(null);

  const sortItems = [
    {
      text: "Lowed APR (%) first",
      sort_by: "min_percent_apr",
      sort_order: "asc",
    },
    {
      text: "Highest APR (%) first",
      sort_by: "min_percent_apr",
      sort_order: "desc",
    },
    {
      text: "Lowest Amount ($) first",
      sort_by: "min_loan_amount",
      sort_order: "asc",
    },
    {
      text: "Highest Amount ($) first",
      sort_by: "min_loan_amount",
      sort_order: "desc",
    },
  ];

  const [activeSort, setActiveSort] = useState(
    sortItems.findIndex((item, index) => {
      return item.sort_by === sort_by && item.sort_order === sort_order;
    })
  );

  useEffect(() => {
    const clickHandler = (e: any) => {
      if (e.target !== btnRef.current) setShowSort(false);
    };

    window.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setShowSort((prev) => !prev);
        }}
        className="text-[14px] font-semibold leading-[142%] flex items-center gap-1"
        ref={btnRef}
      >
        <svg className="h-5 w-5" aria-hidden="true">
          <use xlinkHref="/sprites/sprite.svg#sort"></use>
        </svg>
        Sort
      </button>

      <ul
        className={classNames(
          "p-3 bg-white w-[240px] rounded-xl shadow-lg shadow-black-500/50 absolute top-6 duration-200",
          showSort ? "visible opacity-100" : "invisible opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {sortItems.map((item, index) => (
          <li
            key={index}
            className={classNames(
              index === activeSort && "bg-[#F3F3F3]",
              "px-[15px] py-[6px] cursor-pointer hover:bg-[#F3F3F3] rounded-xl duration-200"
            )}
            onClick={() => {
              setActiveSort(index);
              setShowSort(false);

              params.set("sort_by", `${sortItems[index].sort_by}`);
              params.set("sort_order", `${sortItems[index].sort_order}`);

              router.push(`/?${params.toString()}`, {
                scroll: false,
              });
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
