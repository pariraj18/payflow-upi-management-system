import { Link, useNavigate } from "react-router-dom";
import { removeData } from "../utils/storage";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeData("payflowLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="navbar-logo">
        PayFlow
      </div>

      <div className="navbar-links">

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/send-money">Send Money</Link>

        <Link to="/transactions">Transactions</Link>

        <Link to="/add-account">Add Account</Link>

        <Link to="/profile">Profile</Link>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;