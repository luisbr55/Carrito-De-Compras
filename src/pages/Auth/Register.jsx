import { Link } from "react-router-dom";
import "../../styles/Auth.css";

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Register</h1>
        <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        </form>
        <button>Register</button>
        <div className="auth-links">
          <Link to={`/login`} className="back-link">
          ← return{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
