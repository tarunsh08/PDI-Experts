import Router from "express";
import { createAppointment } from "../controllers/appointment.controller.js";

const router = Router();

router.post("/appointment/v1/create", createAppointment);

export default router;
