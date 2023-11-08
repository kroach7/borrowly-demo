"use client";

import { getFilteredOffers } from "@src/services/api";
import { Card } from "@src/components/";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const ClientItems = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const [page, setPage] = useState(0);
  const [data, setData] = useState<{}[]>([]);

  useEffect(() => {
    page &&
      (async function fetchData() {
        const cards = await getFilteredOffers(params.toString(), `${page * 4}`);
        setData([...data, ...cards]);
      })();
  }, [page]);

  useEffect(() => {
    setPage(0);
    setData([]);
  }, [searchParams]);

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr] mt-6 gap-[17px] lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
      {data &&
        data.map((item: any) => <Card key={item.offer_id} item={item} />)}
      <div ref={observerTarget}></div>
    </div>
  );
};

export default ClientItems;