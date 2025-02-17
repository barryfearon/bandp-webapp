import { useState } from "react";

const FreeQuotation = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return alert("Please enter a valid email.");

    const res = await fetch("https://formspree.io/f/xeqrlnzr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });

    if (res.ok) {
      alert("Submitted successfully!");
      setShowModal(false);
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-bandp_red text-white p-2 rounded font-semibold text-lg"
      >
        Contact Us Now
      </button>

      {showModal && (
        <div className="z-10 fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-xl mb-4">Request a Free Quotation</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 mb-4 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Your Message"
                className="border p-2 mb-4 w-full h-24"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-bandp_red text-white p-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FreeQuotation;
