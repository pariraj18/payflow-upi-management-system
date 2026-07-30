import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <h2>PayFlow</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/send-money">Send Money</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;