import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../utils/storage";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = getData("payflowUser");
    setUser(savedUser);
  }, []);

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="dashboard">

      <h1>Welcome, {user.name} 👋</h1>

      <p>Manage your offline payments with PayFlow</p>

      {/* Balance */}

      <div className="balance-card">
        <p>Available Balance</p>

        <h2>₹{user.balance}</h2>
      </div>

      {/* Actions */}

      <div className="action-cards">

        <div className="action-card">
          <h3>Send Money</h3>
          <p>Send money to another PayFlow user.</p>

          <Link to="/send-money">
            <button>Send Money</button>
          </Link>
        </div>

        <div className="action-card">
          <h3>Transactions</h3>
          <p>View your payment history.</p>

          <Link to="/transactions">
            <button>View History</button>
          </Link>
        </div>

        <div className="action-card">
          <h3>Bank Account</h3>
          <p>Add or manage your bank account.</p>

          <Link to="/add-account">
            <button>Add Account</button>
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;