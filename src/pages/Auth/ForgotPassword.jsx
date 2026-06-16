import { Link } from "react-router-dom";
import "../../styles/Auth.css";

export default function ForgotPassword() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Password recovery</h1>
        <form>
          <input type="text" placeholder="Type your username" />
        </form>
        <button>Recover password</button>
        <div className="auth-links">
          <Link to={`/login`} className="back-link">
            ← return{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
