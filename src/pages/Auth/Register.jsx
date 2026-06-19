import { Link, useNavigate } from "react-router-dom";
import "../../styles/Auth.css";
import { supabase } from "../../lib/supabase";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password.length < 6) {
      alert("The password need more than 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("The passwords are not the same!");
      return;
    }

    //Integracion con Supabase

    const { error } = await supabase.auth.signUp({
      email,
      password: password,
    });
    if (error) {
      alert("Error creating user!");
      return;
    }
    alert("User created correctly!");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <button>Register</button>
        <div className="auth-links">
          <Link to={`/login`} className="back-link">
            ← return{" "}
          </Link>
        </div>
      </form>
    </div>
  );
}
