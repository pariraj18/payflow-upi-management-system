import { useEffect, useState } from "react";
import { getData } from "../utils/storage";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const user = getData("payflowUser");

    if (user) {
      setTransactions(user.transactions || []);
    }
  }, []);

  return (
    <div className="page-container">

      <h1>Transaction History</h1>

      <p>View your recent transactions</p>

      <div className="transaction-box">

        {transactions.length === 0 ? (
          <div className="transaction-card">
            <p>No transactions yet.</p>
          </div>
        ) : (
          transactions
            .slice()
            .reverse()
            .map((transaction) => (
              <div
                className="transaction-card"
                key={transaction.id}
              >

                <div>
                  <h3>{transaction.recipient}</h3>

                  <p>
                    {transaction.date}
                  </p>

                  {transaction.note && (
                    <p>{transaction.note}</p>
                  )}
                </div>

                <div>
                  <h3 className="money-sent">
                    - ₹{transaction.amount}
                  </h3>

                  <p className="success-text">
                    {transaction.status}
                  </p>
                </div>

              </div>
            ))
        )}

      </div>

    </div>
  );
}

export default Transactions;