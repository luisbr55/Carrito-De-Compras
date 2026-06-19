import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import "../../styles/Auth.css";

export default function UpdatePassword() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordConfirm.value;

    if (password.length < 6) {
      alert("The password needs 6 or more characters!");
    }
    if (password !== passwordConfirm) {
      alert("The passwords are not the same!");
    }

    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) {
      alert("Error updating password" + error.message);
    }
    console.log("Password updated");
    navigate("/login");
    return;
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>New password</h1>
        <form onSubmit={handleSubmit}>
          <input type="password" name="password" placeholder="New password" />
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm password"
          />
          <button type="submit">Update password</button>
        </form>
      </div>
    </div>
  );
}
