"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@src/components/";
import { useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "";
  const params = new URLSearchParams(searchParams);

  const [searchValue, setSeacrh] = useState(amount);

  const router = useRouter();

  return (
    <div className="p-4 bg-white grid grid-cols-[1fr_auto] gap-3 rounded-xl -translate-y-1/2 md:grid-cols-[1fr]">
      <input
        type="number"
        placeholder="Enter an amount"
        className="py-5 px-4 rounded-xl bg-[#F2F2F2] text-[16px] placeholder:text-[#9198A1] text-[#000]"
        value={searchValue ? String(searchValue) : ""}
        onChange={(e) => setSeacrh(e.target.value)}
      />

      <Button
        text="Search"
        className="w-[310px] text-[16px] md:w-full"
        clickHandler={() => {
          searchValue
            ? params.set("amount", `${searchValue}`)
            : params.delete("amount");
          router.push(`/?${params.toString()}`, {
            scroll: false,
          });
        }}
      />
    </div>
  );
};

export default Search;
