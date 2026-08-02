import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, saveData } from "../utils/storage";

function SendMoney() {
  const navigate = useNavigate();

  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  const handleSendMoney = (e) => {
    e.preventDefault();

    if (!upiId || !amount) {
      alert("Please enter UPI ID and amount");
      return;
    }

    const sendAmount = Number(amount);

    if (sendAmount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    const user = getData("payflowUser");

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    if (sendAmount > user.balance) {
      alert("Insufficient balance");
      return;
    }

    // Deduct amount
    user.balance -= sendAmount;

    // Create transaction
    const transaction = {
      id: Date.now(),
      type: "sent",
      recipient: upiId,
      amount: sendAmount,
      note: note,
      date: new Date().toLocaleString(),
      status: "Success"
    };

    // Add transaction to history
    user.transactions.push(transaction);

    // Save updated user
    saveData("payflowUser", user);

    alert(`₹${sendAmount} sent successfully!`);

    navigate("/transactions");
  };

  return (
    <div className="page-container">

      <h1>Send Money</h1>

      <p>Send money securely with PayFlow</p>

      <form
        className="page-form"
        onSubmit={handleSendMoney}
      >

        <div>
          <label>Recipient UPI ID</label>

          <input
            type="text"
            placeholder="example@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>

        <div>
          <label>Amount</label>

          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label>Note</label>

          <input
            type="text"
            placeholder="What's this for?"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button type="submit">
          Send Money
        </button>

      </form>

    </div>
  );
}

export default SendMoney;