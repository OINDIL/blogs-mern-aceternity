import { Button, Modal } from "flowbite-react";

export default function BlogsModal({ openModal, setOpenModal }) {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Creating blogs 😄🤩</Modal.Header>
        <Modal.Body>
          <div>
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
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Submit</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
