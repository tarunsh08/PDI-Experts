import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";

const ServiceUpdates = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/services/api/v1/services`);
        setServices(response.data.services || response.data || []); 
        console.log(response.data)
      } catch (err) {
        setError("Failed to fetch services. Please try again later.");
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-12 px-4 md:px-8 bg-neutral-200 min-h-screen">
        <div className="text-center text-neutral-700">Loading services...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 px-4 md:px-8 bg-neutral-200 min-h-screen">
        <div className="text-center text-neutral-700">{error}</div>
      </section>
    );
  }

  if (services.length === 0) {
    return (
      <section className="py-12 px-4 md:px-8 bg-neutral-200 min-h-screen">
        <div className="text-center text-neutral-700">No services found.</div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 md:px-8 bg-neutral-200 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
          Service Updates
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            // Format the date
            const formattedDate = new Date(service.date).toLocaleDateString("en-US", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            });

            return (
              <div key={service._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                {/* Image Section */}
                <div className="w-full h-48 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x200?text=No+Image";
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-neutral-800 flex-grow pr-2 line-clamp-2">
                      {service.title}
                    </h2>
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Completed
                    </span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-2 font-medium">{service.vehicleModel}</p>
                  <p className="text-neutral-700 text-sm mb-4 line-clamp-3 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.partsUpgraded
                      .split(",")
                      .map((part) => (
                        <span
                          key={part.trim()}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800"
                        >
                          {part.trim()}
                        </span>
                      ))}
                  </div>
                  <div className="text-neutral-600 text-xs flex items-center gap-2 mt-auto">
                    <FaUser className="text-sm" />
                    <span>@{service.technician}</span>
                    <span className="hidden sm:inline">·</span>
                    <span>{formattedDate}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceUpdates;