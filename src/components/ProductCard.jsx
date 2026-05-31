import "../styles/ProductCard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  description,
}) {
  const navigate = useNavigate();

  return (
    <>
      <div className="card" onClick={() => navigate(`/products/${id}`)}>
        <img src={image} alt={name} />
        <div className="card-content">
          <h2>{name}</h2>
          <p>{category}</p>
          <p className="price">${price}</p>
        </div>
      </div>
    </>
  );
}
