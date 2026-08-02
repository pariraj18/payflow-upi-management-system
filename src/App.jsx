import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Transactions from "./pages/Transactions";
import AddAccount from "./pages/AddAccount";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>

        {/* Login / Register */}

        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />


        {/* Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Navbar />
              <Dashboard />
            </ProtectedRoute>
          }
        />


        {/* Send Money */}

        <Route
          path="/send-money"
          element={
            <ProtectedRoute>
              <Navbar />
              <SendMoney />
            </ProtectedRoute>
          }
        />


        {/* Transactions */}

        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Navbar />
              <Transactions />
            </ProtectedRoute>
          }
        />


        {/* Add Account */}

        <Route
          path="/add-account"
          element={
            <ProtectedRoute>
              <Navbar />
              <AddAccount />
            </ProtectedRoute>
          }
        />


        {/* Profile */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Navbar />
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;