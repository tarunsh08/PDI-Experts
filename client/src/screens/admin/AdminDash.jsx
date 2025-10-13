import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDash = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/v1/admin/admin/v1/appointments`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('adminToken')}`
                        }
                    }
                );
                setAppointments(response.data.appointments);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching appointments:', err);
                setError('Failed to load appointments. Please try again later.');
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="py-12 px-4 md:px-8 bg-neutral-200">
                <div className="text-2xl font-bold my-6 text-neutral-800 text-center">
                    Add Post to Service Updates
                </div>
                <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-neutral-700 font-medium mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="e.g., Performance Exhaust System Upgrade"
                            className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-neutral-700 font-medium mb-2" htmlFor="vehicle">
                            Vehicle Model
                        </label>
                        <input
                            type="text"
                            id="vehicle"
                            placeholder="e.g., Honda Civic 2023"
                            className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-neutral-700 font-medium mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            placeholder="e.g., Installed high-performance stainless steel exhaust system with sport silencer for enhanced engine sound and improved airflow."
                            className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300 h-24"
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-neutral-700 font-medium mb-2" htmlFor="technician">
                        Parts Upgraded or added
                        </label>
                        <input
                            type="text"
                            id="parts-upgraded"
                            placeholder="e.g., Silencer"
                            className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-neutral-700 font-medium mb-2" htmlFor="technician">
                            Technician Name
                        </label>
                        <input
                            type="text"
                            id="technician"
                            placeholder="e.g., John Davis"
                            className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="image" className="block text-neutral-700 font-medium mb-2">Image</label>
                        <input type="file" id="image" className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-neutral-700 font-medium mb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="w-full p-2 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 rounded-lg bg-orange-300 text-neutral-800 font-medium hover:bg-orange-400 transition-all duration-200"
                    >
                        Add Post
                    </button>
                </form>
            </section>

            <h1 className="text-2xl font-bold my-6">Appointments</h1>

            {appointments.length === 0 ? (
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
                    <p>No appointments found.</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {appointments.map((appointment) => (
                                <tr
                                    key={appointment._id}
                                    className="hover:bg-gray-50 cursor-pointer"
                                    onClick={() => navigate(`/admin/appointment/${appointment._id}`)}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{appointment.fullName}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{appointment.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{appointment.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">{appointment.vehicleType}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            {appointment.status || 'Pending'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminDash;