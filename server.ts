import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import path from 'path';
import 'dotenv/config';

import missionsRouter from './server/routes/missions.js';
import agenciesRouter from './server/routes/agencies.js';
import imagesRouter from './server/routes/images.js';
import adminRouter from './server/routes/admin.js';

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Security and Middleware
  app.set('trust proxy', 1);
  app.use(helmet({
    contentSecurityPolicy: false, // disabled for vite dev integration
  }));
  app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
  app.use(express.json());

  // Rate Limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    validate: { xForwardedForHeader: false, trustProxy: false, default: true }
  });
  app.use('/api', limiter);

  // Database Connection
  mongoose.set('bufferCommands', false);
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 5000 });
      console.log('Connected to MongoDB');
      
      // Auto-seed logic
      try {
        const { Mission } = await import('./server/models/Mission.js');
        const { Agency } = await import('./server/models/Agency.js');
        const { missionsData, agenciesData } = await import('./server/data.js');
        
        console.log('Clearing database for update...');
        await Mission.deleteMany({});
        await Agency.deleteMany({});
        
        console.log('Seeding data...');
        await Agency.insertMany(agenciesData);
        await Mission.insertMany(missionsData);
        console.log('Database seeded successfully.');
      } catch (seedErr) {
        console.error('Error seeding database:', seedErr);
      }
      
    } catch (err) {
      console.error('MongoDB connection error:', err);
    }
  } else {
    console.warn('MONGODB_URI is not set. Database operations will fail or return empty.');
  }

  // API Routes
  app.use('/api/missions', missionsRouter);
  app.use('/api/agencies', agenciesRouter);
  app.use('/api/images', imagesRouter);
  app.use('/api/admin', adminRouter);

  // Global Error Handler
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  });

  // Vite Integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
