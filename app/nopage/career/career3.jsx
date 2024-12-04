"use client";

import React, { useState, useRef, useEffect } from 'react';

const ApplicationForm = ({ initialRole }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    role: initialRole || '', // Set initial role from the prop
    availability: '',
    resume: null,
    message: ''
  });

  // Use a ref to access the file input
  const [resumeName, setResumeName] = useState('');
  const fileInputRef = useRef(null);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const fileData = evt.target.result.split(',')[1];
        setFormData({...formData, resume:{
          name: file.name,
          type: file.type,
          data: fileData,
        }
        });
      }
      reader.readAsDataURL(file); 
      setResumeName(file.name);
    }
  };
  
  const handleAttachClick = () => {
    fileInputRef.current.click(); // Triggers the file input click
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send form data to the API endpoint
    try {
      const response = await fetch('/api/sendApplication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Success message
        // Optionally reset form or show a success message
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          role: initialRole || '',
          availability: '',
          resume: null,
          message: ''
        });
        setResumeName('')
      } else {
        const error = await response.json();
        console.error('Error:', error.message); // Handle error
      }
    } catch (error) {
      console.error('Failed to send application:', error);
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 lv">
      <h2 className="text-4xl font-bold text-green-900 mb-8 text-center">Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="enter your first name.."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="enter your last name.."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Mobile Number *</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              placeholder="enter your mobile number.."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="enter your email.."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Which Role You Want To Apply For?</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="" disabled>
              please select role..
            </option>
            <option value={initialRole}>{initialRole}</option> {/* Set the initial role here */}
          </select>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Availability</label>
          <select
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="" disabled>
              please select availability...
            </option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
        </div>

        <div className="flex items-center">
          <div className="flex-1 relative flex flex-col">
            <label className="block text-lg font-medium text-gray-700 mb-2">Resume Upload</label>
            <input
              type="file"
              name="resume"
              onChange={handleFileUpload}
              ref={fileInputRef} // Reference the file input
              className="hidden" // Hide the default file input
              accept=".pdf,.doc,.docx"
            />
            {/* Custom placeholder */}
            <div className="flex flex-col md:flex-row">
              <div className={`w-full px-4 py-2 border border-gray-300 rounded-lg flex items-center justify-between ${resumeName ? 'bg-white' : 'bg-gray-100'}`}>
                <span className={`text-gray-500 ${resumeName ? 'hidden' : ''}`}>please upload your resume</span>
                <span className={`text-gray-700 font-medium ${resumeName ? '' : 'hidden'}`}>{resumeName}</span>
              </div>
              <button
                type="button"
                className="bg-yellow-500 text-white p-1 rounded-full w-32 md:w-44 md:ml-2 mt-2"
                onClick={handleAttachClick} // Handle button click
              >
                <p className="px-5 py-2 border-2 border-dashed border-white rounded-full">Attach file</p>
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">File should be in PDF, DOC format</p>
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="enter your message.."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            rows="5"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-g1 text-white rounded-full p-1 font-semibold hover:bg-green-700"
          >
            <p className='px-5 py-2 border-2 border-dashed border-white rounded-full '>Apply Now</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
