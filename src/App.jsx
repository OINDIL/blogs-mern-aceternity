import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Landing/Home";
import About from "./Main/About";
import Contact from "./Main/Contact";
import Blog from "./Main/Blog";
import { Navbar } from "./Landing/Navbar";
import DataFlowProvider from "./Context/DataFlow";

import Dashboard from "./Main/Dashboard";
import PrivateRoute from "./private-routes/PrivateRoute";
import Login from "./components/auth/Login";

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
      errorElement: <div>404</div>,
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
      path: "/blog",
      element: (
        <>
          <Blog />
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
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
    },
  ]);
  return (
    <div>
      <DataFlowProvider>
        <RouterProvider router={router} />
      </DataFlowProvider>
    </div>
  );
}

export default App;
