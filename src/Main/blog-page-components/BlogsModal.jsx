import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function BlogsModal({
  openModal,
  setOpenModal,
  refreshPage,
  setRefreshPage,
}) {
  const [toast, setToast] = useState({
    success: false,
    error: false,
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleBlogSubmit = async () => {
    try {
      if (!title || !content) {
        return alert("Please enter title and content");
      }

      const body = {
        title,
        content,
      };

      const res = await fetch("http://localhost:3000/blogs/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setToast({
          error: true,
        });
      }

      setToast({
        success: true,
      });

      setRefreshPage(!refreshPage);

      console.log(data);
    } catch (error) {
      setToast({
        error: true,
      });
    }
  };
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Creating blogs 😄🤩</Modal.Header>
        <Modal.Body>
          <div>
            {toast.success && (
              <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200">
                <span className="flex gap-1">
                  Blog created successfully.
                  <Link to="/blogs" className="font-medium underline">
                    View blog
                  </Link>
                </span>
              </div>
            )}

            {toast.error && (
              <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200">
                <span className="flex gap-1">
                  Blog creation failed. Please try again.
                </span>
              </div>
            )}

            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Write your blogs
            </h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Write a blog about your experience or your favorite movie 🍿
            </p>

            <form action="" className="mt-3">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                  rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Mein toh raste se ja rha tha"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <label className="font-semibold text-gray-900 dark:text-white">
                  Content
                </label>
                <textarea
                  type="text"
                  name="content"
                  id="content"
                  className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                  rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Mein toh bhelpuri kha rha tha"
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleBlogSubmit}>Post</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
