import "../../styles/Auth.css"


export default function UpdatePassword() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>New password</h1>
        <form>
          <input type="passwrd" placeholder="New password" />
          <input type="password" placeholder="Confirm password" />
        </form>
        <button>Update password</button>
      </div>
    </div>
  );
}
