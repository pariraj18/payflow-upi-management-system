import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, saveData } from "../utils/storage";

function AddAccount() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");

  const handleAddAccount = (e) => {
    e.preventDefault();

    if (!name || !bankName || !accountNumber || !ifsc) {
      alert("Please fill all fields");
      return;
    }

    const user = getData("payflowUser");

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const bankAccount = {
      holderName: name,
      bankName: bankName,
      accountNumber: accountNumber,
      ifsc: ifsc
    };

    user.bankAccount = bankAccount;

    saveData("payflowUser", user);

    alert("Bank account added successfully!");

    navigate("/dashboard");
  };

  return (
    <div className="page-container">

      <h1>Add Bank Account</h1>

      <p>Link your bank account with PayFlow</p>

      <form
        className="page-form"
        onSubmit={handleAddAccount}
      >

        <div>
          <label>Account Holder Name</label>

          <input
            type="text"
            placeholder="Enter account holder name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Bank Name</label>

          <input
            type="text"
            placeholder="Enter bank name"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
        </div>

        <div>
          <label>Account Number</label>

          <input
            type="text"
            placeholder="Enter account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>

        <div>
          <label>IFSC Code</label>

          <input
            type="text"
            placeholder="Enter IFSC code"
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
          />
        </div>

        <button type="submit">
          Add Account
        </button>

      </form>

    </div>
  );
}

export default AddAccount;