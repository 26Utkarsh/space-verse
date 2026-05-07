import { Router, Request, Response, NextFunction } from 'express';
import { Mission } from '../models/Mission.js';
import { authMiddleware } from '../middleware/auth.js';

const router = Router();

router.post('/missions', authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newMission = new Mission(req.body);
    const savedMission = await newMission.save();
    res.status(201).json(savedMission);
  } catch (err) {
    next(err);
  }
});

export default router;
