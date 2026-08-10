import { useEffect, useState } from "react";
import { getData, saveData } from "../utils/storage";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const user = getData("payflowUser");

    if (user) {
      setTransactions(user.transactions || []);
    }
  }, []);

  const syncPayments = () => {
    const user = getData("payflowUser");

    if (!user) {
      alert("Please login first");
      return;
    }

    let changed = false;

    user.transactions = (user.transactions || []).map((transaction) => {
      if (transaction.status === "Offline Pending") {
        changed = true;

        return {
          ...transaction,
          status: "Synced"
        };
      }

      return transaction;
    });

    if (changed) {
      saveData("payflowUser", user);
      setTransactions(user.transactions);

      alert("Offline payments synced successfully!");
    } else {
      alert("No pending payments to sync.");
    }
  };

  return (
    <div className="page-container">

      <h1>Transaction History</h1>

      <p>View your recent transactions</p>

      <button
        className="sync-button"
        onClick={syncPayments}
      >
        Sync Offline Payments
      </button>

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

                  <p>{transaction.date}</p>

                  {transaction.note && (
                    <p>{transaction.note}</p>
                  )}
                </div>

                <div>
                  <h3 className="money-sent">
                    - ₹{transaction.amount}
                  </h3>

                  <p
                    className={
                      transaction.status === "Success"
                        ? "success-text"
                        : transaction.status === "Synced"
                        ? "success-text"
                        : "pending-text"
                    }
                  >
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