import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AdminAppointment = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAppointment = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/v1/admin/admin/v1/appointment/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('adminToken')}`
                        }
                    }
                );
                setAppointment(response.data.appointment);
                console.log(response.data);
            } catch (err) {
                console.error('Error fetching appointment:', err);
                setError('Failed to load appointment details. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchAppointment();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-4" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
            </div>
        );
    }

    if (!appointment) {
        return (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 m-4" role="alert">
                <p>No appointment details found.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center mb-6">
                <button 
                    onClick={() => navigate(-1)}
                    className="mr-4 p-2 rounded-full hover:bg-gray-100"
                    aria-label="Go back"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <h1 className="text-2xl font-bold">Appointment Details</h1>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gray-50">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {appointment.fullName}'s Appointment
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Appointment ID: {appointment._id}
                    </p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Status</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                                    appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                    'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {appointment.status || 'Pending'}
                                </span>
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Email</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {appointment.email}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Phone</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {appointment.phone}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Vehicle Brand</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {appointment.vehicleBrand}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Appointment Date</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {new Date(appointment.date).toLocaleDateString()}
                            </dd>
                        </div>
                        {appointment.otherDetails && (
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Additional Notes</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {appointment.otherDetails}
                                </dd>
                            </div>
                        )}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default AdminAppointment;