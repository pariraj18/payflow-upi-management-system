function Profile() {
  return (
    <div className="dashboard">
      <h1>My Profile</h1>
      <p>Manage your PayFlow account.</p>

      <div className="balance-card">
        <h3>Pari Raj</h3>
        <p>Email: user@example.com</p>
        <p>UPI ID: pari@payflow</p>
      </div>

      <button className="profile-button">Edit Profile</button>
    </div>
  );
}

export default Profile;