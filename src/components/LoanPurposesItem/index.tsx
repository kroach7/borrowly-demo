"use client";

import React, { useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const LoanPurposesItem = ({ item, isSelected, onPurposeClick }: { item: any, isSelected: any, onPurposeClick: any }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleItemClick = () => {
    const newPurposeName = isSelected ? "" : item.purpose_name;
    onPurposeClick(newPurposeName);
    params.set("purpose_name", newPurposeName);
    router.push(`/?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div
      key={item.purpose_id}
      className={classNames(
        "rounded-xl bg-white p-3 cursor-pointer hover:bg-[#2BB8B8] hover:text-white duration-200",
        isSelected && "!bg-[#2BB8B8] text-white"
      )}
      onClick={handleItemClick}
    >
      <div className="h-[72px] w-full my-[5px] rounded-xl bg-[#F3F3F3] flex justify-start overflow-hidden">
        <img src={item.purpose_url} className="h-full object-cover object-center" style={{ padding: '12px 16px' }} />
      </div>
      <span className="text-[12px] font-semibold leading-[166%]">
        {item.purpose_name}
      </span>
    </div>
  );
};

export default LoanPurposesItem;
