import { Link } from "react-router-dom";
import "../styles/CreateProductPage.css";

export default function CreateProductPage() {
  return (
    <>
      <div className="new-product">
        <Link to={`/`} className="back-link">
          ← Go back{" "}
        </Link>
        <h1>Create Product</h1>

        <label>Name </label>
        <input type="text" name="Name" />
        <label>Price</label>
        <input type="text" name="Price" />
        <label>Image URL</label>
        <input type="text" name="ImageURL" />
        <label>Category</label>
        <input type="text" name="Category" />
        <label>Description</label>
        <textarea />
        <button>Create Product</button>
      </div>
    </>
  );
}
