"use client";

import Image from "next/image";
import Link from 'next/link';
import { Button } from "@src/components/";

const Card = ({ item }: { item: any }) => {
  return (
    <div className="p-3 rounded-xl bg-white flex flex-col gap-3 items-start">
      <div className="flex items-center gap-2">
      <div className="border-2 border-[#DDD] rounded-[14px] relative w-[42px] h-[42px] overflow-hidden">
        <Image 
          src={item.logo_url} 
          alt="" 
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

        <span className="text-[#171D23] text-[22px] font-bold ml-1 flex-1">
          {item.company_name}
        </span>
      </div>

      {
        item.best_offer ? (
          <span className="text-[#171D23] text-[10px] uppercase px-2 py-1 bg-[#2BB] rounded-[20px]">
            BEST OFFER
          </span>
        ) : (
          <span className="invisible text-[10px] uppercase px-2 py-1 rounded-[20px]">
            BEST OFFER
          </span>
        )
      }

      <ul
        className="flex flex-col gap-2 w-full [&>li]:flex [&>li]:justify-between [&>li]:items-center [&>li]:gap-1 [&>li>span:first-child]:text-[#9198A1]
              [&>li>span:first-child]:text-[13px] [&>li>span:first-child]:leading-[123%] [&>li>span:last-child]:text-[15px] [&>li>span:last-child]:leading-[120%]
              [&>li>span:last-child]:font-semibold"
      >

        <li>
          <span>Loan amount ($)</span>
          <span>{item.min_loan_amount} - {item.max_loan_amount}</span>
        </li>

        <li>
          <span>Percent APR (%)</span>
          <span>{item.min_percent_apr} - {item.max_percent_apr}</span>
        </li>

        <li>
          <span>Term Length (Months)</span>
          <span>{item.term_length_months}</span>
        </li>
      </ul>

      <Link className="w-full" href={item.application_url} passHref>
        <Button text="Apply now" className="w-full text-[14px]" />
      </Link>
    </div>
  );
};

export default Card;
