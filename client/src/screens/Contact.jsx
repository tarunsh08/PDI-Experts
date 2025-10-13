import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTools } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1646105777308-39b1a8564151?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=875')" }}>
        <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[1px]"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 md:px-6 py-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide text-neutral-50">
            Contact <span className="text-orange-300">PDI Experts</span>
          </h1>
          <p className="max-w-xl text-neutral-200 text-base md:text-lg mb-6 font-light">
            Get in touch with us for all your PDI service needs.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-4 md:px-8 bg-neutral-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-700">
                <FaMapMarkerAlt className="text-orange-300" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-sm text-neutral-600">Pillar no. 127, Near Guldhar Rapid Station</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <FaPhoneAlt className="text-orange-300" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-neutral-600">+91 8700732907</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-neutral-700">
                <FaEnvelope className="text-orange-300" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:pdiexpert01@gmail.com" className="text-sm text-neutral-600 hover:text-orange-300">
                    pdiexpert01@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">Working Hours</h3>
              <p className="text-sm text-neutral-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-sm text-neutral-600">Saturday: 9:00 AM - 2:00 PM</p>
              <p className="text-sm text-neutral-600">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-neutral-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              <div>
                <label className="block text-neutral-700 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              <div>
                <label className="block text-neutral-700 font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>
              <div>
                <label className="block text-neutral-700 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300 h-24"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-2 rounded-lg bg-orange-300 text-neutral-800 font-medium hover:bg-orange-400 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 md:px-8 bg-neutral-300">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Find Us</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              title="PDI Experts Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.123456!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xabcdef1234567890!2sPDI%20Experts!5e0!3m2!1sen!2sus!4v1697280000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;