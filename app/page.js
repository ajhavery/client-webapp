import KeySuppliers from "@/components/key-suppliers/KeySuppliers";
import TradeServices from "@/components/sourcing-services/TradeServices";
import TopBanner from "@/components/top-banner/TopBanner";
import TrendingProducts from "@/components/trending-products/TrendingProducts";

// fetch data on server side

// async function getData() {
//   const res = await fetch("http://localhost:8000/api/test");

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   // to get serialized response, .json() is called
//   return res.json();
// }

export default async function Page() {
  // const data = await getData();
  // console.log(data.message);
  return (
    <main>
      <TopBanner />
      <TrendingProducts />
      <KeySuppliers />
      <TradeServices />
    </main>
  );
}
