import axios from 'axios';

// In preview environment, if VITE_API_BASE_URL is localhost, use empty string for relative paths
const configuredUrl = (import.meta as any).env.VITE_API_BASE_URL || '';
const finalBaseUrl = configuredUrl.includes('localhost') ? '' : configuredUrl;

const api = axios.create({
  baseURL: finalBaseUrl,
});

export const getMissions = async (params: any) => {
  const response = await api.get('/api/missions', { params });
  return response.data;
};

export const getMissionBySlug = async (slug: string) => {
  const response = await api.get(`/api/missions/${slug}`);
  return response.data;
};

export const getAgencies = async () => {
  const response = await api.get('/api/agencies');
  return response.data;
};

export const getAgencyBySlug = async (slug: string) => {
  const response = await api.get(`/api/agencies/${slug}`);
  return response.data;
};

export const getMissionImages = async (nasaId: string) => {
  const response = await api.get(`/api/images/${encodeURIComponent(nasaId)}`);
  return response.data;
};

export const createMission = async (data: any, password: string) => {
  const response = await api.post('/api/admin/missions', data, {
    headers: {
      Authorization: password,
    },
  });
  return response.data;
};
