import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';

const router = Router();

router.get('/:nasaId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { nasaId } = req.params;
    if (!nasaId) {
      return res.json([]);
    }
    
    // As per instruction: Proxies request to NASA Image API extracting {url, caption, photographer}
    // If it fails, return empty array
    try {
      const response = await axios.get(`https://images-api.nasa.gov/search?q=${encodeURIComponent(nasaId)}&media_type=image`);
      const items = response.data.collection.items.slice(0, 30);
      
      const images = items
        .filter((item: any) => item.links && item.links.length > 0)
        .map((item: any) => {
          const data = item.data && item.data.length > 0 ? item.data[0] : {};
          const link = item.links[0];
          return {
            url: link.href,
            caption: data.title || data.description || '',
            photographer: data.photographer || 'NASA'
          };
        });
      
      res.json(images);
    } catch (apiErr) {
      console.error('NASA API Error:', apiErr);
      res.json([]);
    }
  } catch (err) {
    next(err);
  }
});

export default router;
