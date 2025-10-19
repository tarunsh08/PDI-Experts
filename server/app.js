import express from 'express';
import appointmentRoutes from './src/routes/appointment.routes.js';
import adminRoutes from './src/routes/admin.routes.js';
import serviceRoutes from './src/routes/service.routes.js';
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors({
    origin: ["https://pdi-experts-l99p.vercel.app" || "https://www.pdi-experts.in"],
    credentials: true
}));

app.use('/api/v1/appointment', appointmentRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/services', serviceRoutes);

export default app;
