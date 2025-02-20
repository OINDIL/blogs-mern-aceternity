import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogsModal from "./blog-page-components/BlogsModal";
import IndividualBlogComponent from "./blog-page-components/IndividualBlogComponent";
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
  const [userBlogs, setUserBlogs] = useState({
    author: "No author found",
    allBlogs: [
      {
        title: "No title",
        content: "No content",
        createdAt: new Date(),
        slug: "",
        _id: undefined,
      },
    ],
  });
  const [allblogs, setAllBlogs] = useState([
    {
      author: "No author found",
      title: "No title",
      content: "No content",
      createdAt: new Date(),
      slug: "",
      _id: undefined,
    },
  ]);

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
        setUserBlogs({
          author: data.author,
          allBlogs: data.blogs.map((blog) => {
            return {
              title: blog.title,
              content: blog.content,
              createdAt: blog.createdAt,
              slug: blog.slug,
              _id: blog._id,
            };
          }),
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const getAllBlogs = async () => {
    try {
      const res = await fetch("http://localhost:3000/blogs/all-blogs", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();

      if (data) {
        setAllBlogs(
          data.map((blog) => {
            return {
              author: blog.author,
              title: blog.title,
              content: blog.content,
              createdAt: blog.createdAt,
              slug: blog.slug,
              _id: blog._id,
            };
          })
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUserBlogs();
    getAllBlogs();
  }, []);

  useEffect(() => {
    getUserBlogs();
    getAllBlogs();
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
          <h2 className="text-3xl font-semibold">All Blogs 📝</h2>
          <p className="text-gray-600">See all the blogs of other users</p>
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
            {allblogs.map((blog, index) => (
              <div
                key={index}
                className={`${index === 0 && `col-span-1 md:col-span-2`}`}
              >
                <IndividualBlogComponent
                  title={blog.title}
                  content={blog.content}
                  slug={blog.slug}
                  author={blog.author}
                  createdAt={new Date(blog.createdAt).toDateString()}
                />
              </div>
            ))}
          </main>
        </div>

        <div>
          <h2 className="text-3xl font-semibold">Your Blogs 📝</h2>
          <p className="text-gray-600">Read some premium quality blogs</p>
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
            {userBlogs.allBlogs.map((blog, index) => (
              <div
                key={index}
                className={`${index === 0 && `col-span-1 md:col-span-2`}`}
              >
                <IndividualBlogComponent
                  title={blog.title}
                  content={blog.content}
                  slug={blog.slug}
                  author={userBlogs.author}
                  createdAt={new Date(blog.createdAt).toDateString()}
                />
              </div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
}

export default Blog;
