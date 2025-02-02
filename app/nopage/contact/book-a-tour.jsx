"use client";

import React, { useState } from "react";

const BookATourForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    mobileNumber: "",
    numberOfPeople: "",
    date: "",
    slot: "",
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "date") {
      fetchSlots(value);
    }
  };

  const fetchSlots = async (selectedDate) => {
    try {
      const response = await fetch(`/api/slots?date=${selectedDate}`);
      const data = await response.json();
      if (response.ok && data.slots) {
        const availableSlots = Object.entries(data.slots)
          .filter(([slot, isAvailable]) => isAvailable === true)
          .map(([slot]) => slot);
        setAvailableSlots(availableSlots);
      } else {
        setAvailableSlots([]);
      }
    } catch (error) {
      console.error("Error fetching slots:", error);
      setAvailableSlots([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.parentName ||
      !formData.email ||
      !formData.mobileNumber ||
      !formData.numberOfPeople ||
      !formData.date ||
      !formData.slot
    ) {
      alert("All fields are required!");
      return;
    }

    setIsSubmitting(true); // Disable button and show "Booking..."

    try {
      const response = await fetch("/api/bookATour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsBooked(true); // Set booking success
      } else {
        const error = await response.json();
        alert(error.message || "Failed to book tour. Please try again.");
        setIsSubmitting(false); // Re-enable button
      }
    } catch (error) {
      console.error("Failed to book tour:", error);
      setIsSubmitting(false); // Re-enable button
    }
  };

  if (isBooked) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-4">
          Your Slot is Booked!
        </h2>
        <p className="text-lg text-gray-600">
          Thank you for booking a tour with us. You will receive a confirmation
          email shortly.
        </p>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lv text-start">
      <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">
        Book a Tour
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
              placeholder="Enter your name.."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email.."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Mobile Number *
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter your mobile number.."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Number of People *
            </label>
            <select
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            >
              <option value="" disabled>
                Select number of people..
              </option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Date *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              min={today}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Slots *
            </label>
            <select
              name="slot"
              value={formData.slot}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            >
              <option value="" disabled>
                Select a slot..
              </option>
              {availableSlots.length === 0 ? (
                <option disabled>
                  No slots for selected date available yet
                </option>
              ) : (
                availableSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-g1 text-white rounded-full p-1 font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            <p className="px-5 py-2 border-2 border-dashed border-white rounded-full">
              {isSubmitting ? "Booking..." : "Book Now"}
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookATourForm;
