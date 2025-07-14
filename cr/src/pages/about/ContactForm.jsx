import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Later: send to backend or third-party service
  };

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto shadow-xl rounded-xl p-8 bg-gray-50 border border-gray-200 space-y-6">
        <h2 className="text-2xl font-semibold text-[var(--color-primary)] font-[var(--font-heading)] mb-4 text-center">
          Send Us a Message
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              value={formData.name}
              className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              onChange={handleChange}
              value={formData.message}
              className="w-full px-4 py-3 rounded-md border border-[var(--color-border)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white py-3 px-6 rounded-md font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
