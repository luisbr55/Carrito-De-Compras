import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/EditProductPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "./constants";

export default function EditProductPage() {
  const navigate = useNavigate();



  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  //Creacion de handle change para todos

  const handleChange = (e) => {
    setProduct({
        ...product,
        [e.target.name]: e.target.value,
    });
  };
 
  //****************************************** */
  useEffect(() => {
    async function getProduct() {
      const res = await axios.get(`${API_URL}/${id}`);
      setProduct(res.data);
    }
    getProduct();
  }, [id]);

  // Funcion para guardar cambios

  async function updateProduct(){
    try{
        await axios.put(`${API_URL}/${id}`, product);

        alert("Product updated");
        navigate(`/products/${id}`);
    }
    catch (error){
        console.log(error.message);
    }
  }


  return (
    <>
      <div className="edit-product">
        <Link to={`/products/${id}`} className="back-link">
          ← Go back
        </Link>

        <h1>Edit Product</h1>
        <label>Name </label>
        <input type="text" name="name" value={product.name} onChange={handleChange}/>
        <label>Price</label>
        <input type="text" name="price" value={product.price} onChange={handleChange}/>
        <label>Image URL</label>
        <input type="text" name="image" value={product.image} onChange={handleChange}/>
        <label>Category</label>
        <input type="text" name="category" value={product.category} onChange={handleChange}/>
        <label>Description</label>
        <textarea name="description" value={product.description} onChange={handleChange}/>
        <button onClick={updateProduct}>Save changes</button>
      </div>
    </>
  );
}
