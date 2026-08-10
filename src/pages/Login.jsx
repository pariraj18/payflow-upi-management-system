import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getData, saveData } from "../utils/storage";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = getData("payflowUser");

    if (!user) {
      alert("No account found. Please register first.");
      return;
    }

    if (user.email !== email || user.password !== password) {
      alert("Invalid email or password");
      return;
    }

    // Save login status locally
    saveData("payflowLoggedIn", true);

    alert("Login successful!");

    navigate("/dashboard");
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h1>Welcome Back 👋</h1>

        <p>Login to your PayFlow account</p>

        <form onSubmit={handleLogin}>

          <div>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;
