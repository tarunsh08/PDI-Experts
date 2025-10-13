import Router from "express";
import { createAdmin, getAllAppointments, getAppointment, createService, deleteService, loginAdmin } from "../controllers/admin.controller.js";
import { validateAdmin } from "../middlewares/validateAdmin.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/admin/v1/create", createAdmin);
router.post("/admin/v1/login", loginAdmin);
router.get("/admin/v1/appointments", validateAdmin, getAllAppointments);
router.get("/admin/v1/appointment/:id", validateAdmin, getAppointment);
router.post("/admin/v1/service", validateAdmin, upload.single('image'), createService);
router.delete("/admin/v1/service/:id", validateAdmin, deleteService);

export default router;
