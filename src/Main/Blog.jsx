import React, { useState } from "react";
import { useDataFlowContext } from "../Context/DataFlow";
import { Link } from "react-router-dom";
import BlogsModal from "./blog-page-components/BlogsModal";
const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Blogs",
    link: "/blog",
  },
];

function Blog() {
  const { darkMode, setDarkMode } = useDataFlowContext();

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <section>
        <nav className="px-4 py-2 flex items-center justify-between">
          <span className="text-2xl font-bold">Blogs</span>

          <ul className="flex gap-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <button
              className="px-4 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
              onClick={() => setOpenModal(true)}
            >
              Write Blogs
            </button>

            <img
              src="https://placehold.co/50x50"
              alt="profile"
              className="rounded-full"
            />
          </div>
        </nav>
        <BlogsModal setOpenModal={setOpenModal} openModal={openModal} />
      </section>
    </>
  );
}

export default Blog;
