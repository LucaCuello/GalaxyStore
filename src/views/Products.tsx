import { ProductCard } from "../components/ProductCard";

export const Products = () => {
  return (
    <div className="container max-w-[1024px] px-4">
      <h2 className="text-xl pt-4 font-bold font-normal">
        Take a look at out merch.
      </h2>
      <p className="pb-4">You'll like them!</p>
      <div className="flex flex-wrap gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
