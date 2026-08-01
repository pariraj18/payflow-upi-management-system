import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-container">
      <h1>Create Account</h1>
      <p>Create your PayFlow account</p>

      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
          />
        </div>

        <button type="submit">Create Account</button>
      </form>

      <p>
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;