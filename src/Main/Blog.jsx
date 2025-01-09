import React from "react";
import { useDataFlowContext } from "../Context/DataFlow";

function Blog() {
  const { darkMode, setDarkMode } = useDataFlowContext();

  console.log(darkMode);

  return <div>Blog</div>;
}

export default Blog;
