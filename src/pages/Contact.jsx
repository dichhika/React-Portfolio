import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-white px-4 py-10 text-black">
      <div className="bg-gray-100 p-6 rounded shadow">
        <h1 className="text-center text-3xl font-bold text-green-600 mb-6">CONTACT ME</h1>
        <form className="space-y-4">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="p-3 border rounded w-full"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="p-3 border rounded w-full"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact