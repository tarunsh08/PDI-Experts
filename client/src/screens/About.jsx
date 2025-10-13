import React from "react";
import { Link } from "react-router-dom";
import { FaTools, FaUserShield, FaCalendarCheck } from "react-icons/fa";

const About = () => {
  // Sample data inspired by the service updates structure
  const teamMembers = [
    {
      name: "John Davis",
      role: "Lead Mechanic",
      description: "With over 10 years of experience, John specializes in performance upgrades and exhaust systems.",
      image: "https://via.placeholder.com/150?text=John+Davis",
    },
    {
      name: "Sarah Miller",
      role: "Service Manager",
      description: "Sarah oversees all service appointments and ensures top-quality customer satisfaction.",
      image: "https://via.placeholder.com/150?text=Sarah+Miller",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1646105777308-39b1a8564151?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=875')" }}>
        <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[1px]"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 md:px-6 py-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-wide text-neutral-50">
            About <span className="text-orange-300">PDI Experts</span>
          </h1>
          <p className="max-w-xl text-neutral-200 text-base md:text-lg mb-6 font-light">
            Discover the team and expertise behind our premium Pre-Delivery Inspection services.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 px-4 md:px-8 bg-neutral-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6 text-center">
            Our Story
          </h2>
          <p className="text-neutral-700 text-base md:text-lg mb-8 text-center max-w-2xl mx-auto">
            PDI Experts is dedicated to delivering excellence in Pre-Delivery Inspection services for cars and bikes. Founded with a passion for automotive care, we combine expert mechanics, premium parts, and a commitment to customer satisfaction. Our mission is to ensure every vehicle leaves our shop in peak condition, ready for the road ahead.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-neutral-800">{member.name}</h3>
                <p className="text-neutral-600 text-sm mb-2">{member.role}</p>
                <p className="text-neutral-700 text-sm">{member.description}</p>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 md:px-8 bg-neutral-300 text-center">
        <div className="bg-neutral-200 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800">
            Ready to Experience the Difference?
          </h2>
          <p className="text-neutral-600 mb-6 text-sm md:text-base max-w-xl mx-auto">
            Book your PDI service appointment today and let our experts take care of your vehicle.
          </p>
          <Link
            to="/book-appointment"
            className="inline-block bg-neutral-800 text-white px-6 py-3 rounded-md font-medium hover:bg-neutral-700 transition-all duration-200"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;