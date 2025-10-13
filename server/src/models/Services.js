import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    vehicleModel: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    partsUpgraded: {
        type: String
    },
    technician: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
})

const Service = mongoose.model("Service", serviceSchema);

export default Service;
