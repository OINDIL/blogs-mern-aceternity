import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check authentication state from the backend
        const res = await fetch("http://localhost:3000/check", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);

        if (!res.ok) {
          navigate("/login");
        }

        setIsAuthenticated(true); // Authenticated
      } catch (error) {
        setIsAuthenticated(false); // Not authenticated
        navigate("/login"); // Redirect to login if not authenticated
      } finally {
        setLoading(false); // Stop loading once check is done
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>; // You can display a loader or spinner here
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
