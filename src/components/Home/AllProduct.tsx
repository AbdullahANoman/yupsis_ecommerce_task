import { Product } from "@/types/globalType";
import ProductCard from "../ProductCard";

const AllProduct = async() =>{

 const res = await fetch("http://localhost:4000/products", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();

  console.log(data)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((product:Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
    )
}

export default AllProduct;