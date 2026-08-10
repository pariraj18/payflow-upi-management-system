import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, saveData } from "../utils/storage";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = getData("payflowUser");

    if (!savedUser) {
      navigate("/login");
      return;
    }

    setUser(savedUser);
  }, [navigate]);

  if (!user) {
    return (
      <div className="page-container">
        <div className="loading-card">
          <h2>Loading Profile...</h2>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    saveData("payflowLoggedIn", false);

    alert("Logged out successfully!");

    navigate("/login");
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        {/* Profile Header */}

        <div className="profile-avatar">
          {user.name
            ? user.name.charAt(0).toUpperCase()
            : "U"}
        </div>

        <h1>{user.name}</h1>

        <p className="profile-subtitle">
          PayFlow User
        </p>


        {/* User Information */}

        <div className="profile-info">

          <div className="profile-info-item">
            <span className="profile-label">
              Full Name
            </span>

            <span className="profile-value">
              {user.name}
            </span>
          </div>


          <div className="profile-info-item">
            <span className="profile-label">
              Email
            </span>

            <span className="profile-value">
              {user.email}
            </span>
          </div>


          <div className="profile-info-item">
            <span className="profile-label">
              Balance
            </span>

            <span className="profile-value balance-value">
              ₹{Number(user.balance || 0).toLocaleString("en-IN")}
            </span>
          </div>


          <div className="profile-info-item">
            <span className="profile-label">
              Account Status
            </span>

            <span className="profile-active">
              ● Active
            </span>
          </div>

        </div>


        {/* Logout */}

        <button
          className="profile-logout"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;