// app/contact/page.tsx
import React from 'react';

export default function ContactPage() {
    return (
      <div className=" bg-gray-900 text-gray-100 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-100">Contact Us</h1>
          <p className="text-center text-gray-400 mb-10">
            Have questions, feedback, or feature requests? We'd love to hear from you.
          </p>
          <form className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-md">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-300">Message</label>
              <textarea
                placeholder="Type your message here..."
                rows={5}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  