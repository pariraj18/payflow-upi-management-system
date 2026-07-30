function Login() {
  return (
    <div className="auth-container">
      <h1>Welcome Back 👋</h1>
      <p>Login to your PayFlow account</p>

      <form>
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
            placeholder="Enter your password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;