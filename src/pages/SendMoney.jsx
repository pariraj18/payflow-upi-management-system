function SendMoney() {
  return (
    <div className="auth-container">
      <h1>Send Money</h1>
      <p>Send money securely with PayFlow</p>

      <form>
        <div>
          <label>Recipient UPI ID</label>
          <input
            type="text"
            placeholder="example@upi"
          />
        </div>

        <div>
          <label>Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label>Note</label>
          <input
            type="text"
            placeholder="What's this for?"
          />
        </div>

        <button type="submit">Send Money</button>
      </form>
    </div>
  );
}

export default SendMoney;