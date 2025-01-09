import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Landing/Home";
import About from "./Main/About";
import Contact from "./Main/Contact";
import Blog from "./Main/Blog";
import { Navbar } from "./Landing/Navbar";
import DataFlowProvider from "./Context/DataFlow";

import Dashboard from "./Main/Dashboard";

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
          <About>
            <h1>Hi this is about</h1>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              fugiat repellendus doloribus ullam atque, quasi nulla error eius
              delectus quos. Pariatur excepturi quisquam facere labore magnam
              minus nihil cum recusandae.
            </p>
          </About>
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
      path: "/dashboard",
      element: <Dashboard />,
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
