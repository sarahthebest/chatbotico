import { useState } from "react";
import { writeMessage } from "../../hooks/messages";

const DashHeader = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await writeMessage(text);

      console.log("Message sent successfully!");
      setText("");
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to send message");
    }
  };

  return (
    <div className="Dashheader flex flex-row w-full py-4 ps-4 border-b border-neutral justify-between">
      <h1 className="my-auto">Dashboard</h1>
      <button
        className="btn w-fit me-4 bg-accent hover:bg-secondary hover:text-neutral-900"
        onClick={() => document.getElementById("messageModal").showModal()}
      >
        Write message
      </button>
      <dialog id="messageModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold ">Write your message</h3>
          <label className="textarea textarea-bordered flex items-center mt-4">
            <textarea
              name="text"
              type="text"
              className="grow bg-transparent"
              placeholder="Beep boop..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          {error && (
            <div className="text-black bg-red-500 p-2 rounded-md">{error}</div>
          )}
          <div className="modal-action">
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <form method="dialog">
              <button className="btn btn-warning">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DashHeader;
