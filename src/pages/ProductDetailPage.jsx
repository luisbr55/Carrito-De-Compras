import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailPage.css";
import { supabase } from "../lib/supabase";

export default function ProductDetailPage() {
  const [product, setProduct] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .single();
        setProduct(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (id) getProduct();
  }, [id]);

  // Apartado para el boton de eliminar

  const handleDelete = async () => {
    const confirmDelete = confirm("Do you want to delete the product?");

    if (!confirmDelete) {
      return;
    }
    try {
      await supabase.from("products").delete().eq("id", product.id);
      navigate(`/`);
    } catch (error) {
      alert("Error when trying to delete the product" + error.message);
    }
  };

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
        <button
          className="btn-edit"
          onClick={() => navigate(`/products/${id}/edit`)}
        >
          Edit
        </button>
        <button className="btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
}
