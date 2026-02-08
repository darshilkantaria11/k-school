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
    website: "",
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

  const isValidEmail = (email) => {
    const invalidPatterns = [
      /^0+@/i,
      /^test@/i,
      /^admin@/i,
      /^info@/i,
      /^demo@/i,
    ];

    if (invalidPatterns.some((p) => p.test(email))) return false;
    if (email.split("@")[0].length < 3) return false;

    return true;
  };

  const isValidMobile = (mobile) => {
    const cleaned = mobile.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleaned)) return false;
    if (/^(\d)\1{9}$/.test(cleaned)) return false;
    return true;
  };

  const isValidMessage = (msg) => {
    const trimmed = msg.trim().toLowerCase();
    const banned = ["hi", "hello", "ok", "okay", "test"];

    if (banned.includes(trimmed)) return false;

    return true;
  };

  const isValidParentName = (name) => {
    const trimmed = name.trim().toLowerCase();

    if (!/^[a-z\s]+$/.test(trimmed)) return false;

    const banned = [
      "test",
      "testing",
      "abc",
      "asdf",
      "qwerty",
      "admin",
      "demo",
      "user",
      "name",
    ];
    if (banned.includes(trimmed)) return false;

    if (/^(.)\1+$/.test(trimmed.replace(/\s/g, ""))) return false;

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedPrograms = Object.keys(formData.programs).filter(
      (program) => formData.programs[program],
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

    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!isValidMobile(formData.mobileNumber)) {
      alert("Please enter a valid mobile number.");
      return;
    }

    if (!isValidMessage(formData.message)) {
      alert("Please describe your query in a little more detail.");
      return;
    }

    if (!isValidParentName(formData.parentName)) {
      alert("Please enter a valid full name.");
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

      const result = await response.json();

      if (!response.ok) {
        console.log("Yeah Yeah");
        alert(result.error || "Something went wrong.");
        return;
      }

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
        website: "",
      });
    } catch (error) {
      console.error("Error sending enquiry:", error);
      alert("Unable to submit enquiry. Please try again later.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-start">
      <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">
        Enquiry Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Parent&apos;s Name *
            </label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              placeholder="e.g. Charles Delott"
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
              placeholder="e.g. 647 555 0199"
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
            placeholder="e.g. johndoe@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Which Program Interested? *
          </label>
          <div className="bg-white p-2 border rounded-lg flex flex-col mt-2">
            <div className="space-y-2 bg-white p-2 border rounded-lg flex flex-col justify-center">
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
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Message (What are your Queries?) *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Please mention your child’s age and your main query"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            rows="5"
            required
          />
        </div>
        <input
          type="text"
          name="website"
          value={formData.website || ""}
          onChange={handleInputChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

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
