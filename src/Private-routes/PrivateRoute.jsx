import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      // Check authentication state from the backend
      const res = await fetch("http://localhost:3000/auth/check", {
        method: "GET",
        credentials: "include",
      });

      if (!res.ok) {
        return navigate("/login");
      }

      setIsAuthenticated(true);
      setLoading(false); // Authenticated
    } catch (error) {
      setIsAuthenticated(false); // Not authenticated
      navigate("/login"); // Redirect to login if not authenticated
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [navigate]);

  if (loading) {
    return <p className="text-3xl font-bold text-red-600">Loading...</p>; // You can display a loader or spinner here
  }

  return isAuthenticated ? children : navigate("/login");
};

export default ProtectedRoute;
