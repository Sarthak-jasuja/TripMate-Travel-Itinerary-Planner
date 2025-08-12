import React, { useState } from 'react'

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
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
      <h1 className="text-2xl font-semibold mb-2">Contact Us   
        <span className="material-symbols-outlined text-4xl">mail</span>
      </h1>
      <p className="text-gray-500 mb-6">We'd love to hear from you! Fill out the form below and we'll get in touch.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl p-3 h-28 resize-none focus:outline-none focus:border-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default ContactUs;
