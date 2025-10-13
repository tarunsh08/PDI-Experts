import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Appointment from "../models/Appointment.js";
import Service from "../models/Services.js";
import { uploadToCloudinary } from "../config/cloudinary.js";

dotenv.config();

export const createAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = await Admin.create({
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return res.status(201).json({ message: "Admin created successfully", admin, token });
    } catch (error) {
        return res.status(500).json({ message: "Failed to create admin", error: error.message });
    }
}

export const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const admin = await Admin.findOne({ email });

        if(!admin) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if(!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return res.status(200).json({ message: "Admin logged in successfully", admin, token });
    } catch (error) {
        return res.status(500).json({ message: "Failed to login admin", error: error.message });
    }
}

export const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();

        if(!appointments) {
            return res.status(404).json({ message: "No appointments found" });
        }

        return res.status(200).json({ message: "Appointments fetched successfully", appointments });
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch appointments", error: error.message });
    }
}

export const getAppointment = async (req, res) => {
    try {
        const { id } = req.params;

        const appointment = await Appointment.findById(id);

        if(!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        return res.status(200).json({ message: "Appointment fetched successfully", appointment });
    } catch (error) {
        return res.status(500).json({ message: "Failed to fetch appointment", error: error.message });
    }
}

export const createService = async (req, res) => {
    try {
        const { title, vehicleModel, description, partsUpgraded, technician, date } = req.body;

        if(!title || !vehicleModel || !description || !partsUpgraded || !technician || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const result = await uploadToCloudinary(req.file.buffer);
        
        const service = await Service.create({
            title,
            vehicleModel,
            description,
            partsUpgraded,
            technician,
            image: result.secure_url, 
            date: new Date(date)
        });

        return res.status(201).json({ 
            message: "Service created successfully", 
            service: {
                ...service._doc,
                image: result.secure_url
            }
        });
    } catch (error) {
        console.error('Error in createService:', error);
        return res.status(500).json({ 
            message: "Failed to create service", 
            error: error.message 
        });
    }
};

export const deleteService = async (req, res) => {
    try {
        const { id } = req.params;

        const service = await Service.findById(id);

        if(!service) {
            return res.status(404).json({ message: "Service not found" });
        }

        await service.deleteOne();

        return res.status(200).json({ message: "Service deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Failed to delete service", error: error.message });
    }
}
