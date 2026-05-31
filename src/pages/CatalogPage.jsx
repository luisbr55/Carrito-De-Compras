import axios from "axios";
import { API_URL } from "./constants";
import { useEffect, useState } from "react";
import "../styles/CatalogPage.css";
import ProductCard from "../components/ProductCard";

export default function CatalogPage() {
  // Hook creation
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(API_URL);
      const data = res.data;

      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <>
      <div className="header-section">
        <h1>Product Catalog</h1>
        <button>+ New product</button>
      </div>
      <div className="product-list">
        
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          ))}
      </div>
    </>
  );
}
