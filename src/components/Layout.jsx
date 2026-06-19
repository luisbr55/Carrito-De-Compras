import { Link, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "../styles/Layout.css"

export default function Layout({user}) {

    const navigate = useNavigate();
    


  const handleLogout = async () => {
    const {error} = await supabase.auth.signOut();

    if(error){
        alert("Error signing out" + error.message);
        return;
    }
    navigate("/login");
  };

  return (
    <>
      <nav className="nav">
        <div>
          <Link to="/">Catalog</Link>
        </div>

        <div>
          <h5>{user?.email}</h5>
          <button onClick={handleLogout}>
            End session
          </button>
        </div>
      </nav>

      <Outlet />
    </>
  );
}