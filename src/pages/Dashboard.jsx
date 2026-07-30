import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to PayFlow 👋</h1>
      <p>Manage your UPI payments easily.</p>

      <div className="balance-card">
        <p>Available Balance</p>
        <h2>₹10,000</h2>
      </div>

      <div className="action-cards">
        <div className="action-card">
          <h3>Send Money</h3>
          <p>Send money to another user</p>
          <button>Send</button>
        </div>

        <div className="action-card">
          <h3>Transactions</h3>
          <p>View your transaction history</p>
          <button>View</button>
        </div>

        <div className="action-card">
          <h3>Add Bank Account</h3>
          <p>Link a bank account to PayFlow</p>
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;