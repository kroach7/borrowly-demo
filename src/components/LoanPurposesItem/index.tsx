"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const LoanPurposesItem = ({ item }: { item: any }) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const purpose_name = searchParams.get("purpose_name") || "";
  const params = new URLSearchParams(searchParams);

  return (
    <div
      key={item.purpose_id}
      className={classNames(
        "rounded-xl bg-white p-3 cursor-pointer hover:bg-[#2BB8B8] hover:text-white duration-200",
        item.purpose_name === purpose_name && "!bg-[#2BB8B8] text-white"
      )}
      onClick={() => {
        params.set("purpose_name", `${item.purpose_name}`);
        router.push(`/?${params.toString()}`, {
          scroll: false,
        });
      }}
    >
      <div className="h-[72px] w-full bg-[#F3F3F3] mg-[5px] rounded-xl"></div>
      <span className="text-[12px] font-semibold leading-[166%]">
        {item.purpose_name}
      </span>
    </div>
  );
};

export default LoanPurposesItem;
