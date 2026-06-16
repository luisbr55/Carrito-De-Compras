import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Auth.css";

export default function Login() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        <form>
          <input type="text" value={username} onChange={handleUsername} placeholder="Username"/>
          <input type="password" value={password} onChange={handlePassword} placeholder="Password" />
        </form>
        <button>Login</button>
        <div className="auth-links">
          <Link to={`/forgot-password`} className="back-link">
            Forgot Password?{" "}
          </Link>
          <Link to={`/register`} className="back-link">
            Create account{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
