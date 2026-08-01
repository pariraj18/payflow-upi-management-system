function Transactions() {
  return (
    <div className="dashboard">
      <h1>Transaction History</h1>
      <p>View your recent payments.</p>

      <div className="transaction-list">
        <div className="transaction-card">
          <div>
            <h3>Rahul</h3>
            <p>Today, 10:30 AM</p>
          </div>

          <div>
            <h3>- ₹500</h3>
            <p>Success</p>
          </div>
        </div>

        <div className="transaction-card">
          <div>
            <h3>Priya</h3>
            <p>Yesterday, 5:20 PM</p>
          </div>

          <div>
            <h3>+ ₹1,000</h3>
            <p>Received</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;