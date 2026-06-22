import { Link, useNavigate } from "react-router-dom";
import "../../styles/Auth.css";
import { supabase } from "../../lib/supabase";
import GoogleSignInButton from "../../components/GoogleSignInButton/GoogleSignInButton.module";

export default function Login() {
  const navigate = useNavigate();


  const signInWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Error signing in" + error.message);
      return;
    }
    console.log("navigating");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>

          <GoogleSignInButton onClick={signInWithGoogle}/>
        </form>

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
