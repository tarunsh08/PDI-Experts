import Service from "../models/Services.js";


export const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

import Router from 'express';

const router = Router();

router.get('/api/v1/services', getServices);

export default router;
