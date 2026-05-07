import { Router, Request, Response, NextFunction } from 'express';
import { Mission } from '../models/Mission.js';
import mongoose from 'mongoose';
import { missionsData } from '../data.js';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { search, agency, planet, type, status, page = 1, limit = 12 } = req.query;

    if (mongoose.connection.readyState !== 1) {
      let filtered = [...missionsData];
      if (search) {
        const s = (search as string).toLowerCase();
        filtered = filtered.filter(m => m.name.toLowerCase().includes(s) || m.objective.toLowerCase().includes(s));
      }
      if (agency) filtered = filtered.filter(m => m.agency === agency);
      if (planet) filtered = filtered.filter(m => m.targetBody === planet);
      if (type) filtered = filtered.filter(m => m.type === type);
      if (status) {
        const statuses = (status as string).split(',');
        filtered = filtered.filter(m => statuses.includes(m.status));
      }

      filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());

      const pageCount = parseInt(page as string, 10);
      const limitCount = parseInt(limit as string, 10);
      const skip = (pageCount - 1) * limitCount;
      const missions = filtered.slice(skip, skip + limitCount);

      return res.json({
        missions,
        totalPages: Math.ceil(filtered.length / limitCount),
        currentPage: pageCount,
        totalCount: filtered.length
      });
    }

    let query: any = {};

    if (search) {
      query.$text = { $search: search as string };
    }
    if (agency) query.agency = agency;
    if (planet) query.targetBody = planet;
    if (type) query.type = type;
    if (status) {
      const statuses = (status as string).split(',');
      query.status = { $in: statuses };
    }

    const pageCount = parseInt(page as string, 10);
    const limitCount = parseInt(limit as string, 10);
    const skip = (pageCount - 1) * limitCount;

    const missions = await Mission.find(query)
      .sort({ launchDate: -1 })
      .skip(skip)
      .limit(limitCount);

    const totalCount = await Mission.countDocuments(query);

    res.json({
      missions,
      totalPages: Math.ceil(totalCount / limitCount),
      currentPage: pageCount,
      totalCount
    });
  } catch (err) {
    next(err);
  }
});

router.get('/:slug', async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      const mission = missionsData.find(m => m.slug === req.params.slug);
      if (!mission) {
        return res.status(404).json({ error: 'Mission not found' });
      }
      return res.json(mission);
    }

    const mission = await Mission.findOne({ slug: req.params.slug });
    if (!mission) {
      return res.status(404).json({ error: 'Mission not found' });
    }
    res.json(mission);
  } catch (err) {
    next(err);
  }
});

export default router;
