function AddAccount() {
  return (
    <div className="auth-container">
      <h1>Add Bank Account</h1>
      <p>Link a bank account to your PayFlow account.</p>

      <form>
        <div>
          <label>Account Holder Name</label>
          <input
            type="text"
            placeholder="Enter account holder name"
          />
        </div>

        <div>
          <label>Bank Name</label>
          <input
            type="text"
            placeholder="Enter bank name"
          />
        </div>

        <div>
          <label>Account Number</label>
          <input
            type="password"
            placeholder="Enter account number"
          />
        </div>

        <div>
          <label>IFSC Code</label>
          <input
            type="text"
            placeholder="Enter IFSC code"
          />
        </div>

        <button type="submit">Add Account</button>
      </form>
    </div>
  );
}

export default AddAccount;