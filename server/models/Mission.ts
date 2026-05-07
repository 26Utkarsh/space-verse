import mongoose from 'mongoose';

const missionSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  agency: { 
    type: String, 
    required: true,
    enum: ["NASA", "ISRO", "ESA", "CNSA", "JAXA", "Roscosmos"]
  },
  type: {
    type: String,
    required: true,
    enum: ["rover", "orbiter", "lander", "flyby", "crewed", "telescope"]
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "completed", "failed", "planned", "enroute"]
  },
  targetBody: { type: String, required: true },
  launchDate: { type: Date, required: true },
  endDate: { type: Date, default: null },
  objective: { type: String, required: true },
  description: { type: String },
  achievements: [{
    date: { type: Date, required: true },
    description: { type: String, required: true }
  }],
  instruments: [{
    name: { type: String, required: true },
    purpose: { type: String, required: true }
  }],
  nasaId: { type: String, default: null },
  coverImage: { type: String, required: true },
  timeline: [{
    date: { type: Date, required: true },
    event: { type: String, required: true }
  }],
  budget: { type: String },
  createdAt: { type: Date, default: Date.now }
});

missionSchema.index({ name: 'text', agency: 'text', targetBody: 'text' });

export const Mission = mongoose.model('Mission', missionSchema);
