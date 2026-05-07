import mongoose from 'mongoose';

const agencySchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  country: { type: String, required: true },
  founded: { type: Number, required: true },
  logo: { type: String, required: true },
  description: { type: String, required: true },
  missionCount: { type: Number, default: 0 }
});

export const Agency = mongoose.model('Agency', agencySchema);
