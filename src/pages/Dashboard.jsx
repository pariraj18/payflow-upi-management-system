import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../utils/storage";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const savedUser = getData("payflowUser");
    setUser(savedUser);

    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!user) {
    return (
      <div className="page-container">
        <div className="loading-card">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">

      {/* Welcome Section */}
      <div className="dashboard-header">

        <div>
          <h1>Welcome, {user.name} 👋</h1>

          <p className="dashboard-subtitle">
            Manage your payments with PayFlow
          </p>
        </div>

        {/* Online / Offline Status */}
        <div
          className={
            isOnline
              ? "online-status"
              : "offline-status"
          }
        >
          <span
            className={
              isOnline
                ? "online-dot"
                : "status-dot"
            }
          ></span>

          {isOnline
            ? "Online"
            : "Offline Mode Active"}
        </div>

      </div>


      {/* Balance Card */}
      <div className="balance-card">

        <p>Available Balance</p>

        <h2>
          ₹{Number(user.balance || 0).toLocaleString("en-IN")}
        </h2>

        <span className="balance-label">
          PayFlow Wallet
        </span>

      </div>


      {/* Quick Actions */}
      <h2 className="section-title">
        Quick Actions
      </h2>

      <div className="action-cards">

        {/* Send Money */}
        <div className="action-card">

          <div className="card-icon send-icon">
            💸
          </div>

          <h3>Send Money</h3>

          <p>
            Send money to another user using their UPI ID.
          </p>

          <Link to="/send-money">
            <button className="primary-button">
              Send Money
            </button>
          </Link>

        </div>


        {/* Transactions */}
        <div className="action-card">

          <div className="card-icon transaction-icon">
            📊
          </div>

          <h3>Transactions</h3>

          <p>
            View your recent payment and transaction history.
          </p>

          <Link to="/transactions">
            <button className="primary-button">
              View History
            </button>
          </Link>

        </div>


        {/* Add Account */}
        <div className="action-card">

          <div className="card-icon account-icon">
            🏦
          </div>

          <h3>Bank Account</h3>

          <p>
            Add and manage your bank account details.
          </p>

          <Link to="/add-account">
            <button className="primary-button">
              Add Account
            </button>
          </Link>

        </div>

      </div>


      {/* Offline Information */}
      <div className="offline-info">

        <div className="info-icon">
          ⚡
        </div>

        <div>
          <h3>Offline Payment Simulator</h3>

          <p>
            You can create payment transactions even when
            your internet connection is unavailable.
            Transactions are stored locally on your device.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;