import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
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
      <nav className="bg-bandp_red text-white p-4 bottom-0 fixed md:relative left-0 right-0 z-10 border-white border-t-2 md:border-t-0">
        <div className="flex justify-around md:justify-center text-xs lg:text-lg text-center">
          <Link className={`mx-2 font-semibold md:font-normal`} href="/">
            <div>Home</div>
          </Link>
          <a
            className={`mx-2 font-semibold md:font-normal`}
            onClick={() => setShowModal(true)}
          >
            <div>Contact Us</div>
          </a>
          <Link
            className={`mx-2 font-semibold md:font-normal`}
            href="/about-us"
          >
            <div>About Us</div>
          </Link>
          <Link
            className={`mx-2 font-semibold md:font-normal`}
            href="/services"
          >
            <div>Services</div>
          </Link>
          <Link
            className={`mx-2 font-semibold md:font-normal`}
            href="/photo-gallery"
          >
            <div>Gallery</div>
          </Link>
        </div>
      </nav>

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

export default Navbar;
