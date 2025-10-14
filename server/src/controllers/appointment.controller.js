import Appointment from "../models/Appointment.js";

export const createAppointment = async (req, res) => {
    try {
        const { fullName, email, phone, serviceType, date, vehicleBrand, vehicleModel, vehicleYear, otherDetails } = req.body;

        if(!fullName || !email || !phone || !serviceType || !date || !vehicleBrand || !vehicleModel || !vehicleYear) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const appointment = await Appointment.create({
            fullName,
            email,
            phone,
            serviceType,
            date,
            vehicleBrand,
            vehicleModel,
            vehicleYear,
            otherDetails
        });

        return res.status(201).json({ message: "Appointment created successfully", appointment });

    } catch (error) {
        return res.status(500).json({ message: "Failed to create appointment", error: error.message });
    }
}