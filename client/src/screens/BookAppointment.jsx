import React, { useState } from "react";
import { FaCalendarCheck, FaCar, FaMotorcycle, FaCheckCircle, FaArrowRight, FaUser, FaTools } from "react-icons/fa";
import axios from "axios";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    vehicleType: "Car",
    vehicleBrand: "",
    vehicleModel: "",
    vehicleYear: "",
    serviceType: "Inspection",
    date: "",
    otherDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.fullName || !formData.email || !formData.phone || !formData.date) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    axios.post(`${import.meta.env.VITE_API_URL}/api/v1/appointment/appointment/v1/create`, formData)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        setFormData({
          fullName: "",
          email: "",
        phone: "",
        vehicleType: "Car",
        vehicleBrand: "",
        vehicleModel: "",
        vehicleYear: "",
        serviceType: "Inspection",
        date: "",
        otherDetails: "",
      });
      console.log("Appointment booked successfully", formData);
    })
    .catch((error) => {
      console.error("Error booking appointment:", error);
      setError("Failed to book appointment. Please try again later.");
      setLoading(false);
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 pt-24 px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-4xl text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">Appointment Booked!</h2>
            <p className="text-neutral-600 mb-6">
              Thank you for booking with PDI Pro Service. We'll confirm your appointment via email and phone shortly.
            </p>
            <div className="bg-neutral-50 rounded-lg p-4 mb-6 text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-600">Date:</span>
                <span className="font-semibold text-neutral-900">{new Date(formData.date).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Vehicle:</span>
                <span className="font-semibold text-neutral-900">{formData.vehicleType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-600">Service:</span>
                <span className="font-semibold text-neutral-900">{formData.serviceType}</span>
              </div>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 pt-24 pb-12 px-4">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Book Your Appointment</h1>
          <p className="text-neutral-600 text-lg">Schedule your PDI service in just a few minutes</p>
          <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Personal Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-400"><FaUser /></span>
              </div>
              Personal Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-neutral-50 hover:bg-white"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-neutral-50 hover:bg-white"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-neutral-50 hover:bg-white"
                  required
                />
              </div>

              {/* Appointment Date */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Appointment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-neutral-50 hover:bg-white"
                  required
                />
              </div>
            </div>
          </div>

          {/* Vehicle Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-400"><FaCar /></span>
              </div>
              Vehicle Information
            </h2>

            {/* Vehicle Details Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Brand */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Vehicle Brand</label>
                <input
                  type="text"
                  name="vehicleBrand"
                  value={formData.vehicleBrand}
                  onChange={handleChange}
                  placeholder="e.g., Toyota"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-neutral-50 hover:bg-white"
                />
              </div>

              {/* Model */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Vehicle Model</label>
                <input
                  type="text"
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleChange}
                  placeholder="e.g., Fortuner"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-neutral-50 hover:bg-white"
                />
              </div>

              {/* Year */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Vehicle Year</label>
                <input
                  type="text"
                  name="vehicleYear"
                  value={formData.vehicleYear}
                  onChange={handleChange}
                  placeholder="e.g., 2024"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-neutral-50 hover:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Service Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-400"><FaTools /></span>
              </div>
              Service Details
            </h2>

            {/* Service Type */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-neutral-700 mb-3">
                Service Type <span className="text-red-500">*</span>
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-neutral-50 hover:bg-white font-medium"
                required
              >
                <option value="Inspection">Pre-Delivery Inspection</option>
                <option value="Service">Service</option>
                <option value="Repair">Repair</option>
              </select>
            </div>

            {/* Other Details */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-2">Additional Details</label>
              <textarea
                name="otherDetails"
                value={formData.otherDetails}
                onChange={handleChange}
                placeholder="Tell us about any specific issues or requirements..."
                rows="4"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all bg-neutral-50 hover:bg-white resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <FaCalendarCheck className="text-lg" />
                  Confirm Appointment
                  <FaArrowRight className="text-lg" />
                </>
              )}
            </button>
          </div>

          <p className="text-center text-neutral-500 text-sm mt-4">
            We'll contact you shortly to confirm your appointment
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;