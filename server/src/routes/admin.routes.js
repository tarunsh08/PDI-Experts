import Router from "express";
import { createAdmin, getAllAppointments, getAppointment, loginAdmin } from "../controllers/admin.controller.js";
import { validateAdmin } from "../middlewares/validateAdmin.js";

const router = Router();

router.post("/admin/v1/create", createAdmin);
router.post("/admin/v1/login", loginAdmin);
router.get("/admin/v1/appointments", validateAdmin, getAllAppointments);
router.get("/admin/v1/appointment/:id", validateAdmin, getAppointment);

export default router;
