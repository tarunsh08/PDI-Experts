import express from 'express';
import appointmentRoutes from './src/routes/appointment.routes.js';
import adminRoutes from './src/routes/admin.routes.js';
import serviceRoutes from './src/routes/service.routes.js';

const app = express();

const ALLOWED_ORIGINS = ['https://pdimafia.com', 'https://www.pdimafia.com'];

// Manual CORS middleware — more reliable on Vercel serverless than the cors package
app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (ALLOWED_ORIGINS.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    // Respond immediately to preflight with 200 OK
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});

app.use(express.json());

app.use('/api/v1/appointment', appointmentRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/services', serviceRoutes);

export default app;
