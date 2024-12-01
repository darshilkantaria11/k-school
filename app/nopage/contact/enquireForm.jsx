"use client";

import React, { useState } from "react";

const EnquireForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    mobileNumber: "",
    programs: {
      toddler: false,
      preschool: false,
      kindergarten: false,
    },
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // To show success message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      programs: { ...formData.programs, [name]: checked },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for submission
    const selectedPrograms = Object.keys(formData.programs).filter(
      (program) => formData.programs[program]
    );

    if (
      !formData.parentName ||
      !formData.email ||
      !formData.mobileNumber ||
      selectedPrograms.length === 0 ||
      !formData.message
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, selectedPrograms }),
      });

      if (response.ok) {
        setSuccessMessage("Our Team will reach out to you soon!");
        setFormData({
          parentName: "",
          email: "",
          mobileNumber: "",
          programs: {
            toddler: false,
            preschool: false,
            kindergarten: false,
          },
          message: "",
        });
      } else {
        const error = await response.json();
        alert("Error: " + error.message);
      }
    } catch (error) {
      console.error("Error sending enquiry:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-start">
      <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">
        Enquire Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Parent's Name *
            </label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              placeholder="Enter parent's name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Mobile Number *
          </label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            placeholder="Enter mobile number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>
        </div>
          <div>
            <label className="block text-lg font-medium text-start text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>

       

        <div className="bg-white p-2 border rounded-lg flex flex-col justify-center items-center">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Which Program Interested? *
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="toddler"
                checked={formData.programs.toddler}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Toddler
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="preschool"
                checked={formData.programs.preschool}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Preschool
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="kindergarten"
                checked={formData.programs.kindergarten}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Kindergarten
            </label>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Message (What are your Queries?) *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            rows="5"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-g1 text-white rounded-full p-1 font-semibold hover:bg-green-700"
          >
            <p className="px-5 py-2 border-2 border-dashed border-white rounded-full">
              Send Enquiry
            </p>
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="mt-8 text-center text-green-700 font-bold">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default EnquireForm;
