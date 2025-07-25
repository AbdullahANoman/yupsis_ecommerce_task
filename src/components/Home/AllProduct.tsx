"use client";

import { ProductResponse } from "@/types/globalType";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/shared/Loading";

const AllProduct = () => {
  const [data, setData] = useState<ProductResponse | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://yupsis-ecommerce-task-server.vercel.app/api/v1/product"
        );
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {data?.data.result.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProduct;
