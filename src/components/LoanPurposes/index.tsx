import { getLoanPurposes } from "@src/services/api";
import { LoanPurposesItem } from "@src/components/";

export default async function LoanPurposes() {
  const data = await getLoanPurposes();

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-[17px] lg:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr]">
      {data &&
        data.map((item: any, index: number) => (
          <LoanPurposesItem key={index} item={item} />
        ))}
    </div>
  );
}
