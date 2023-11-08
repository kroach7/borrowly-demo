"use client";

import React, { useState, useEffect } from "react";
import { getLoanPurposes } from "@src/services/api";
import LoanPurposesItem from "@src/components/LoanPurposesItem"; // Correct import path
import { useSearchParams } from "next/navigation";

export default function LoanPurposes() {

  const searchParams = useSearchParams();
  const purpose_name = searchParams.get("purpose_name") || "";
  const [selectedPurpose, setSelectedPurpose] = useState(purpose_name);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const loanPurposes = await getLoanPurposes();
      setData(loanPurposes);
    }
    fetchData();
  }, []);

  const handlePurposeChange = (purposeName: any) => {
    setSelectedPurpose(purposeName);
  };

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-[17px] lg:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr]">
      {data &&
        data.map((item: any, index: number) => (
          <LoanPurposesItem
            key={index}
            item={item}
            isSelected={selectedPurpose === item.purpose_name}
            onPurposeClick={handlePurposeChange}
          />
        ))}
    </div>
  );
}
