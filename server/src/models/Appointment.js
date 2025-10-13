import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    vehicleType: {
        type: String,
        enum: ['Car', 'Bike'],
        required: true,
    },
    vehicleBrand: {
        type: String
    },
    vehicleModel: {
        type: String
    },
    vehicleYear: {
        type: String
    },
    serviceType: {
        type: String,
        enum: ['Service', 'Repair', 'Inspection'],
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    otherDetails: {
        type: String
    }
}) 

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
