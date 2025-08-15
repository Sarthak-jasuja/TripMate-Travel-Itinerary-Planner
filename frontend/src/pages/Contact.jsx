import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert("Thanks for contacting us! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex justify-center items-center" style={{ minHeight: "calc(100vh - 100px)" }}>
      <div className="shadow-md rounded-2xl p-8 w-full max-w-lg border border-gray-200">
        
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          Contact Us 
          <span className="material-symbols-outlined text-4xl ml-2">mail</span>
        </h2>
        <p className="text-gray-500 mb-6">
          We'd love to hear from you! Fill out the form below and we'll get in touch.
        </p>

        <form onSubmit={handleSubmit}>
          <label className="block font-semibold mb-1">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 px-5 w-full mb-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
          />

          <label className="block font-semibold mb-1">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 px-5 w-full mb-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
          />

          <label className="block font-semibold mb-1">Your Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 px-5 w-full mb-6 h-28 resize-none rounded-2xl focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 cursor-pointer rounded-3xl w-full hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default ContactUs;
