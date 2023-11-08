import { getFilteredOffers } from "@src/services/api";
import { Card, ClientItems } from "@src/components/";

export default async function Items({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getFilteredOffers(
    Object.keys(searchParams)
      .map((item) => {
        return item + "=" + searchParams[item];
      })
      .join("&"),
    "0"
  );

  return (
    <div>
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] mt-6 gap-[17px] lg:grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
        {data &&
          data.map((item: any) => <Card key={item.offer_id} item={item} />)}
      </div>

      <ClientItems />
    </div>
  );
}
