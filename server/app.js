import express from 'express';
import appointmentRoutes from './src/routes/appointment.routes.js';
import adminRoutes from './src/routes/admin.routes.js';
import serviceRoutes from './src/routes/service.routes.js';
import cors from 'cors'

const app = express();

const corsOptions = {
    origin: ['https://pdimafia.com', 'https://www.pdimafia.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(express.json());

// Handle ALL preflight OPTIONS requests globally (must be before routes)
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.use('/api/v1/appointment', appointmentRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/services', serviceRoutes);

export default app;
