function Profile() {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <p>Manage your PayFlow account</p>

      <div className="profile-card">
        <div className="profile-avatar">
          P
        </div>

        <h2>Pari Raj</h2>
        <p className="profile-email">user@example.com</p>

        <div className="profile-info">
          <div>
            <span>UPI ID</span>
            <strong>pari@payflow</strong>
          </div>

          <div>
            <span>Account Status</span>
            <strong className="active-status">Active</strong>
          </div>
        </div>

        <button className="profile-button">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;