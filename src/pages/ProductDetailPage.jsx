import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./constants";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailPage.css";

export default function ProductDetailPage() {
  const [product, setProduct] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

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


// Apartado para el boton de eliminar

const handleDelete = async () => {
  const confirmDelete = confirm("Do you want to delete the product?");

  if(!confirmDelete){
    return;
  }
  try{
    await axios.delete(`${API_URL}/${id}`);
    navigate(`/`);
  }catch (error){
    alert("Error when trying to delete the product" + error.message);
  }
}

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="product-details">
        <Link to={`/`} className="back-link">
          ← Go back{" "}
        </Link>
        <h1>Product details</h1>

        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Category: {product.category}</p>
        <p className="price">${product.price}</p>
        <p>{product.description}</p>
      </div>
      <div className="button-section">
        <button className="btn-edit" onClick = {() => navigate(`/products/${id}/edit`)}>Edit</button>
        <button className="btn-delete" onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}
