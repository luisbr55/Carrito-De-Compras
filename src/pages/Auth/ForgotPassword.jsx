import { Link } from "react-router-dom";
import "../../styles/Auth.css";
import { supabase } from "../../lib/supabase";

export default function ForgotPassword() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5175/update-password",
    });
    if (error) {
      alert("Error sending link" + error.message);
      return;
    }
    alert("Recovery email has been sent");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Password recovery</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" placeholder="Type your email" />
          <button typeof="submit">Recover password</button>
        </form>
        
        <div className="auth-links">
          <Link to={`/login`} className="back-link">
            ← return{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
