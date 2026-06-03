import { Link, useNavigate } from "react-router-dom";
import "../styles/CreateProductPage.css";
import { API_URL } from "./constants";
import axios from "axios";
import { useState } from "react";

export default function CreateProductPage() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    if (!product.name || !product.price || !product.category) {
      alert("Please complete all the fields");
      return;
    }

    try {
      await axios.post(API_URL, product);
      navigate("/");
    } catch (error) {
      alert("Error creating product" + error.message);
    }
  };

  return (
    <>
      <div className="new-product">
        <Link to={`/`} className="back-link">
          ← Go back{" "}
        </Link>
        <h1>Create Product</h1>

        <label>Name </label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
        <label>Category</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            handleSave();
          }}
        >
          Create Product
        </button>
      </div>
    </>
  );
}
