// import React from "react";
// import Card from "./Card";

// function About() {
//   const people = [
//     {
//       name: "John Doe",
//       designation: "Software Engineer",
//       image:
//         "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
//     },
//     {
//       name: "Robert Johnson",
//       designation: "Product Manager",
//       image:
//         "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     {
//       name: "Jane Smith",
//       designation: "Data Scientist",
//       image:
//         "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//   ];

//   return (
//     <div className="flex">
//       {people.map((people, index) => (
//         <div key={index}>
//           <Card user={people} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default About;

import React from "react";

function About({ children }) {
  return <div className="text-red-700 text-4xl">{children}</div>;
}

export default About;
