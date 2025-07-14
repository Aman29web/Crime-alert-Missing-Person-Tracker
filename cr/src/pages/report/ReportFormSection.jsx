import React, { useState } from "react";

const ReportFormSection = ({ selectedType }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    image: null,
    isAnonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with actual backend POST logic
    console.log("Submitted Report: ", {
      type: selectedType,
      ...formData,
    });
    alert("Report submitted successfully!");
  };

  if (!selectedType) return null;

  return (
    <section className="px-6 md:px-16 py-12 bg-white border-t border-[var(--color-border)]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] font-[var(--font-heading)] mb-6">
          Report Details: {selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-[var(--color-text-primary)] mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-[var(--color-border)] rounded px-4 py-2"
              placeholder="e.g. Purse snatched near ATM"
            />
          </div>

          <div>
            <label className="block font-medium text-[var(--color-text-primary)] mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full border border-[var(--color-border)] rounded px-4 py-2"
              placeholder="Describe what happened..."
            />
          </div>

          <div>
            <label className="block font-medium text-[var(--color-text-primary)] mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border border-[var(--color-border)] rounded px-4 py-2"
              placeholder="e.g. Mumbai, Bandra Station"
            />
          </div>

          <div>
            <label className="block font-medium text-[var(--color-text-primary)] mb-1">
              Upload Image (Optional)
            </label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
              className="block w-full text-sm"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="isAnonymous"
              checked={formData.isAnonymous}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label className="text-sm text-[var(--color-text-secondary)]">
              Submit anonymously (your name won't be shown)
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold px-6 py-3 rounded-full shadow"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReportFormSection;
