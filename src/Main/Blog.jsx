import React from "react";
import { useDataFlowContext } from "../Context/DataFlow";

function Blog() {
  const { darkMode, setDarkMode } = useDataFlowContext();

  return <div></div>;
}

export default Blog;
