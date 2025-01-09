import React from "react";
import { useDataFlowContext } from "../Context/DataFlow";

function Contact() {
  // console.log(useDataFlowContext());

  const { firstName } = useDataFlowContext();

  console.log(firstName);

  return <div className="text-blue-600 text-8xl">Contact</div>;
}

export default Contact;
