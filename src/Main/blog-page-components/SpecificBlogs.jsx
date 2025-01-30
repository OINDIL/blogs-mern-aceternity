import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SpecificBlogs() {
  const { slug } = useParams();


  const [blog, setBlog] = useState({
    author: "No author found",
    title: "No title found",
    content: "No content found",
  });

  const getBlogBySlug = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/blogs/specific-blog/${slug}`
      );
      const data = await response.json();

      setBlog({
        author: data.auhor,
        title: data.blog.title,
        content: data.blog.content,
      });


    } catch (error) {
      console.error(error.message);
    }
  };


  useEffect(() => {
    getBlogBySlug();
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 px-6">
      <div className="max-w-5xl w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
        <Link to={'/blogs'} className="underline">Go back</Link>
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p className="text-xl mt-4">{blog.content}</p>
      </div>
    </div>
  );
}

export default SpecificBlogs;
