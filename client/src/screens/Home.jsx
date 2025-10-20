import React, { useState } from "react";
import { FaTools, FaCalendarCheck, FaCheckCircle, FaShieldAlt, FaArrowRight, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 text-neutral-800 font-sans">

      {/* Mobile Hero Image - Only visible on mobile */}
<div className="md:hidden w-full flex items-center justify-center p-6">
  <div className="relative group">
    {/* Ripple Effect Container */}
    <div className="absolute inset-0 overflow-hidden rounded-[40%_60%_70%_30%_/_50%_60%_40%_50%]">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-orange-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      
      {/* Ripple circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-orange-300/30 rounded-full group-hover:w-32 group-hover:h-32 group-hover:opacity-0 transition-all duration-1000 delay-100"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-orange-400/20 rounded-full group-hover:w-40 group-hover:h-40 group-hover:opacity-0 transition-all duration-1000 delay-300"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-orange-500/10 rounded-full group-hover:w-48 group-hover:h-48 group-hover:opacity-0 transition-all duration-1000 delay-500"></div>
    </div>

    {/* Image with faded edges */}
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 rounded-[40%_60%_70%_30%_/_50%_60%_40%_50%] z-20 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5 rounded-[40%_60%_70%_30%_/_50%_60%_40%_50%] z-20 mix-blend-overlay"></div>
      
      <img
        src="/herosm.webp"
        alt="Professional PDI Inspection"
        className="relative w-full h-auto rounded-[40%_60%_70%_30%_/_50%_60%_40%_50%] shadow-2xl transform group-hover:scale-105 transition-all duration-500 z-10"
        style={{
          maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)'
        }}
      />
    </div>

    {/* Subtle border glow on hover */}
    <div className="absolute inset-0 rounded-[40%_60%_70%_30%_/_50%_60%_40%_50%] bg-gradient-to-br from-orange-100/0 via-orange-200/0 to-orange-100/0 group-hover:from-orange-100/30 group-hover:via-orange-200/20 group-hover:to-orange-100/30 transition-all duration-700 blur-sm group-hover:blur-0 z-0"></div>
  </div>
</div>

      {/* Hero Section */}
      <section className="py-12 md:min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-neutral-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">🚗 Premium PDI Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-neutral-900">
              Your Vehicle's <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">Perfect Start</span>
            </h1>
            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed max-w-lg">
              Professional Pre-Delivery Inspection for cars. Expert certification, premium quality assurance, and complete peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-orange-400 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer" onClick={() => navigate("/book-appointment")}>
                <FaCalendarCheck className="text-lg" /> Book Appointment
                <FaArrowRight className="text-sm" />
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-orange-300 text-orange-400 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-all cursor-pointer" onClick={() => navigate("/service-updates")}>
                <FaTools className="text-lg" /> View Services
              </button>
            </div>
            <div className="flex gap-8 pt-6 border-t border-neutral-200">
              <div>
                <p className="text-2xl font-bold text-neutral-900">5000+</p>
                <p className="text-sm text-neutral-500">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">100%</p>
                <p className="text-sm text-neutral-500">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-neutral-900">20+</p>
                <p className="text-sm text-neutral-500">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full h-96 bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1646105777308-39b1a8564151?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=600"
                alt="Premium PDI Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-neutral-900 mb-4">Why Choose PDI Mafia?</h2>
            <p className="text-neutral-500 text-lg">Excellence delivered with every inspection</p>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FaTools,
                title: "Expert Engineers",
                desc: "Certified engineers with 20+ years of specialized PDI experience",
              },
              {
                icon: FaCheckCircle,
                title: "Premium Quality",
                desc: "Only authorized parts and industry-standard tools for excellence",
              },
              {
                icon: FaCalendarCheck,
                title: "Quick Scheduling",
                desc: "Flexible appointments that fit your busy schedule seamlessly",
              },
              {
                icon: FaShieldAlt,
                title: "Comprehensive PDI",
                desc: "Thorough, multi-point inspection to catch every detail before delivery",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-6 rounded-2xl transition-all duration-300 cursor-pointer ${hoveredCard === idx
                  ? "bg-gradient-to-br from-orange-50 to-orange-100 shadow-xl -translate-y-2"
                  : "bg-neutral-50 shadow-md hover:shadow-lg"
                  }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all ${hoveredCard === idx
                  ? "bg-orange-400 text-white"
                  : "bg-orange-100 text-orange-400"
                  }`}>
                  <item.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section id="services" className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-bold text-neutral-900 mb-4">Our Services</h2>
            <p className="text-neutral-500 text-lg">Comprehensive vehicle inspection solutions</p>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Pre-Delivery Inspection", items: "Comprehensive check-up before delivery" },
              { title: "Quality Assurance", items: "Detailed testing and verification" },
              { title: "Documentation", items: "Complete inspection reports" },
            ].map((service, idx) => (
              <div key={idx} className="group p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-neutral-200 hover:border-orange-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-400 transition-all">
                    <FaStar className="text-orange-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mt-1">{service.title}</h3>
                </div>
                <p className="text-neutral-600 mb-4">{service.items}</p>
                <button onClick={() => navigate("/about")} className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
                  Learn More <FaArrowRight className="text-sm" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-12 md:p-16 text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">Ready for Expert Inspection?</h2>
              <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
                Schedule your PDI service today and experience professional vehicle inspection with guaranteed satisfaction
              </p>
              <button onClick={() => navigate("/book-appointment")} className="inline-block bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book Your Service Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
                  <FaTools className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">PDI Mafia</h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Professional Pre-Delivery Inspection services for your peace of mind.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Home</a></li>
                <li><a href="#services" className="text-neutral-400 hover:text-orange-400 transition-colors">Services</a></li>
                <li><a href="#why-us" className="text-neutral-400 hover:text-orange-400 transition-colors">Why Us</a></li>
                <li><a href="#footer" className="text-neutral-400 hover:text-orange-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-4">Brands</h3>
              <ul className="space-y-3 grid grid-cols-3 gap-1 text-sm">
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Audi</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Datsun</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Isuzu</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Volkswagen</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Toyota</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Honda</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Hyundai</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Nissan</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Mitsubishi</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Maruti</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Volvo</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Ford</a></li>
              </ul>
            </div>

            <div className="flex gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                <ul className="space-y-3 text-sm mb-3">
                  <li className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-orange-400 mt-1 flex-shrink-0" />
                    <span>Plot no. 127, Near Guldhar Rapid Metro Station, Opp. Pillar No. 631</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhone className="text-orange-400 flex-shrink-0" />
                    <a href="tel:+918700732907" className="hover:text-orange-400 transition-colors">+91 8700732907, +91 7042338299</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaEnvelope className="text-orange-400 flex-shrink-0" />
                    <a href="mailto:pdimafia01@gmail.com" className="hover:text-orange-400 transition-colors">pdimafia01@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <FaFacebook className="text-orange-400 flex-shrink-0" />
                  <a href="#" className="hover:text-orange-400 transition-colors">Facebook</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaTwitter className="text-orange-400 flex-shrink-0" />
                  <a href="#" className="hover:text-orange-400 transition-colors">Twitter</a>
                </li>
                <li className="flex items-center gap-2">
                  <FaInstagram className="text-orange-400 flex-shrink-0" />
                  <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Working Hours</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <FaClock className="text-orange-400 flex-shrink-0" />
                  <span>Monday - Sunday</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaClock className="text-orange-400 flex-shrink-0" />
                  <span>10:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-500">© 2025 PDI Mafia. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;