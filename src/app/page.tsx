import type { Metadata } from "next";

import {
  Intro,
  Items,
  LoanPurposes,
  Sort,
  Search,
  Button,
} from "@src/components/";

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Home(props: Props) {
  const searchParams = props.searchParams;

  return (
    <main className="bg-[#f2f2f2]">
      <Intro />

      <div className="pb-6">
        <div className="container">
          <Search />

          <LoanPurposes />
          <div className="pt-6">
            <Sort />

            <Items searchParams={searchParams} />
          </div>
        </div>
      </div>
    </main>
  );
}
