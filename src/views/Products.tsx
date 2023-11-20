import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";
import { ProductWithId } from "../interfaces/interfaces";
import { getProducts } from "../services/ProductServices";

export const Products = () => {
  const [product, setProduct] = useState<ProductWithId[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const request = async () => {
      try {
        setIsLoading(true);
        const response = await getProducts();
        const products = response.docs.map((doc) => {
          const productData = doc.data() as ProductWithId;
          return {
            ...productData,
            id: doc.id,
          };
        });
        setProduct(products);
        console.log(products);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    request();
  }, []);

  return (
    <div className="container max-w-[1024px] px-4">
      <h2 className="text-xl pt-4 font-bold font-normal">
        Take a look at our posters.
      </h2>
      <p className="pb-4">You'll like them!</p>
      <div className="flex flex-wrap gap-4">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : product.map((prod) => <ProductCard key={prod.id} product={prod} />)}
      </div>
    </div>
  );
};
