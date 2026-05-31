import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./constants";
import { Link, useParams } from "react-router-dom";
import "../styles/ProductDetailPage.css";

export default function ProductDetailPage() {
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await axios.get(`${API_URL}/${id}`);

        console.log(id);
        setProduct(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProduct();
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="product-details">
        <Link to={`/`} className="back-link">~Go back </Link>
        <h1>Product details</h1>

        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Category: {product.category}</p>
        <p className="price">{product.price}</p>
        <p>{product.description}</p>
      </div>
      <div className="button-section">
        <button className="btn-edit">Edit</button>
        <button className="btn-delete">Delete</button>
      </div>
    </>
  );
}
