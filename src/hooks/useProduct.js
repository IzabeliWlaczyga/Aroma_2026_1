import { useEffect, useState } from "react";
import { ProductService } from "../services/ProductService";

export function useProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await ProductService();
      setProducts(data.produtos || []);
    }

    loadProducts();
  }, []);

  return products;
}
