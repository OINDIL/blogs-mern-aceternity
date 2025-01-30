import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Landing/Home";
import About from "./Main/About";
import Contact from "./Main/Contact";
import Blog from "./Main/Blog";
import { Navbar } from "./Landing/Navbar";
import Dashboard from "./Main/Dashboard";
import Login from "./components/auth/Login";
import PrivateRoute from "./Private-routes/PrivateRoute";
import Register from "./components/auth/Register";
import SpecificBlogs from "./Main/blog-page-components/SpecificBlogs";
import Error from "./Main/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: (
        <>
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Contact />
        </>
      ),
    },
    {
      path: "/blogs",
      element: (
        <>
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        </>
      ),
    },
    {
      path: "/specific-blog/:slug",
      element: (
        <>
          <PrivateRoute>
            <SpecificBlogs />
          </PrivateRoute>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <Register />
        </>
      ),
    },
    {
      path: "/forgot-password",
      element: <>Reset your password</>,
    },
    {
      path: "/admin-dashboard",
      element: (
        <>
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
