import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold text-[#226f65]">
        BharatSetu
      </Link>

      <div className="space-x-6">
        <Link to="/" className="hover:text-teal-700 font-medium text-lg">Home</Link>
        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-teal-700 font-medium text-lg">Dashboard</Link>
            <Link to="/profile" className="hover:text-teal-700 font-medium text-lg">Profile</Link>
            <button
              onClick={handleLogout}
              className="text-white text-lg font-bold bg-red-500 px-5 py-2 rounded-full hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-teal-700 font-medium text-lg">Login</Link>
            <Link
              to="/signup"
              className="text-white bg-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-700 transition text-lg"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}