import { useEffect, useState } from "react";
import "../styles/CatalogPage.css";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function CatalogPage() {
  // Hook creation
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const { data: products, error } = await supabase
        .from("products")
        .select();

      if (error) {
        alert("Error importing the products!" + error.message);
        return;
      }

      setProducts(products);
    }
    getProducts();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="header-section">
        <h1>Product Catalog</h1>
        <button onClick={() => navigate(`/products/new`)}>+ New product</button>
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
