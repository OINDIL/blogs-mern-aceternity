import React, { useEffect, useState } from "react";
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
  const [blogs, setBlogs] = useState({
    author: "No author found",
    allBlogs: [
      {
        title: "No title",
        content: "No content",
        createdAt: new Date(),
      },
    ],
  });

  const [refreshPage, setRefreshPage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const getUserBlogs = async () => {
    try {
      const res = await fetch("http://localhost:3000/blogs/all-user-blogs", {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (data) {
        setBlogs({
          author: data.author,
          allBlogs: data.blogs.map((blog) => {
            return {
              title: blog.title,
              content: blog.content,
              createdAt: blog.createdAt,
            };
          }),
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUserBlogs();
  }, []);

  useEffect(() => {
    getUserBlogs();
  }, [refreshPage]);

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
        <BlogsModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          refreshPage={refreshPage}
          setRefreshPage={setRefreshPage}
        />
      </section>

      <section className="max-w-6xl mx-auto px-12 mt-4 space-y-4">
        <div>
          <h2 className="text-3xl font-semibold">Featured Blogs 📝</h2>
          <p className="text-gray-600">
            Some featured blogs from all the users
          </p>
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
            {blogs.allBlogs.map((blogs, index) => (
              <div
                key={index}
                className={`border rounded p-2 ${
                  index === 0 && `col-span-1 md:col-span-2`
                }`}
              >
                <h3 className="text-xl font-medium">{blogs.title}</h3>
                <p className="text-gray-600">{blogs.content}</p>
              </div>
            ))}
          </main>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">All Blogs 📝</h2>
          <p className="text-gray-600">Read some premium quality blogs</p>
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
            {blogs.allBlogs.map((blogs, index) => (
              <div
                key={index}
                className={`border rounded p-2 ${
                  index === 0 && `col-span-1 md:col-span-2`
                }`}
              >
                <h3 className="text-xl font-medium">{blogs.title}</h3>
                <p className="text-gray-600">{blogs.content}</p>
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
}

export default Blog;
