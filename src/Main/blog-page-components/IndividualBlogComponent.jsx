import React from "react";
import { Link } from "react-router-dom";

function IndividualBlogComponent({ title, content, slug, author, createdAt }) {
  return (
    <div className="border p-8 rounded-lg space-y-2">
      <img
        src="https://placehold.co/400x200"
        alt="blog-img"
        className="rounded-lg w-full"
      />
      <div>
        <span className="text-gray-600 text-sm flex items-center gap-1">
          <img
            src="https://placehold.co/30x30"
            className="rounded-full inline"
            alt=""
          />{" "}
          {author} | {createdAt}
        </span>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="">{content.slice(0, 100)}...</p>

        <Link
          to={`/specific-blog/${slug}`}
          className="underline underline-offset-1"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default IndividualBlogComponent;
