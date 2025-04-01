import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white px-6 md:px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase">Get In Touch</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Have questions or want to join FitZone Gym? Fill out the form, and we'll get back to you!
        </p>

        {/* Contact Form */}
        <form className="mt-8 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg text-gray-900">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
