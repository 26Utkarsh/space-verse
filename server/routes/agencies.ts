import { Router, Request, Response, NextFunction } from 'express';
import { Agency } from '../models/Agency.js';
import { Mission } from '../models/Mission.js';
import mongoose from 'mongoose';
import { agenciesData, missionsData } from '../data.js';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.json(agenciesData);
    }
    const agencies = await Agency.find().sort({ founded: 1 });
    res.json(agencies);
  } catch (err) {
    next(err);
  }
});

router.get('/:slug', async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const agency = agenciesData.find(a => a.slug === req.params.slug);
      if (!agency) {
        return res.status(404).json({ error: 'Agency not found' });
      }
      const missions = missionsData.filter(m => m.agency === agency.name).sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
      return res.json({ ...agency, missions });
    }
    const agency = await Agency.findOne({ slug: req.params.slug });
    if (!agency) {
      return res.status(404).json({ error: 'Agency not found' });
    }
    const missions = await Mission.find({ agency: agency.name as "NASA" | "ISRO" | "ESA" | "CNSA" | "JAXA" | "Roscosmos" }).sort({ launchDate: -1 });
    res.json({ ...agency.toObject(), missions });
  } catch (err) {
    next(err);
  }
});

export default router;
