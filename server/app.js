import express from 'express';
import appointmentRoutes from './src/routes/appointment.routes.js';
import adminRoutes from './src/routes/admin.routes.js';
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors());

app.use('/api/v1/appointment', appointmentRoutes);
app.use('/api/v1/admin', adminRoutes);

export default app;
