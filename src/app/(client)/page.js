import BestSellers from "./_components/BestSellers";
import Collection from "./_components/Collection";
import Header from "./_components/Header";
import OnSale from "./_components/OnSale";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Collection />
      <BestSellers />
      <OnSale />
    </div>
  );
}
