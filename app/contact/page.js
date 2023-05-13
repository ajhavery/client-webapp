function ContactUs() {
  return (
    <div className="flex justify-center mt-8">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-md p-8">
        <div className="grid grid-cols-2 gap-8">
          {/* Left column - Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-gray-300 border rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-gray-300 border rounded-md px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border-gray-300 border rounded-md px-3 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right column - Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
            <div className="mb-4">
              <p className="font-semibold">Address:</p>
              <p>
                Dhamika Internet Pvt Ltd
                <br />
                South City, Gurugram, Haryana, India
                <br />
              </p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Phone:</p>
              <p>+91 9771123980</p>
            </div>
            <div className="mb-4">
              <p className="font-semibold">Email:</p>
              <p>contact@dhamika.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
