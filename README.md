# CosmosArchive
A complete, production-ready full-stack web application acting as a space mission encyclopedia. Browse, search, and filter real space missions from across the globe (NASA, ISRO, ESA, CNSA, JAXA, Roscosmos).

## Tech Stack
* **Frontend:** React 18, Vite, Tailwind CSS v4, Framer Motion, React Router v7.
* **Backend:** Node.js 20, Express.js.
* **Database:** MongoDB Atlas via Mongoose ODM.

## Prerequisites
* Node.js v20+
* A MongoDB Atlas Database or local MongoDB instance
* NASA API Key (can use 'DEMO_KEY' for quick testing)

## Environment Variables

### Root / Backend (`.env.example` / `.env`)
| Variable | Description | Example |
| --- | --- | --- |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `NASA_API_KEY` | NASA API Key | `DEMO_KEY` |
| `ADMIN_PASSWORD` | Password for the admin dashboard | `admin` |
| `PORT` | Backend port | `3000` |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:3000` |

### Frontend
| Variable | Description | Example |
| --- | --- | --- |
| `VITE_API_BASE_URL` | Complete Backend URL | `http://localhost:3000` |

*(Note: In the AI Studio setup, `.env` holds everything needed for both environments. They are merged into a unified app structure).*

## Step-by-Step Setup

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Configure Environment:**
   Copy `.env.example` to `.env` and fill in your MongoDB connection string and other required fields.

3. **Seed Database:**
   Run the seed script to populate exactly the requested mission data points:
   \`\`\`bash
   npm run build
   node dist/server/utils/seed.cjs
   # or with TSX
   npx tsx server/utils/seed.ts
   \`\`\`

4. **Run Application:**
   \`\`\`bash
   npm run dev
   \`\`\`
   This will start both the Express backend and the Vite frontend simultaneously.

## Deployment Instructions

### Deploying Frontend to Vercel
1. Set the root directory if separate, or rely on normal setup.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add all frontend `VITE_*` environment variables in Vercel.

### Deploying Backend to Render
1. Create a new Web Service pointing to your repository.
2. Build command: `npm install && tsc`
3. Start command: `node dist/server.cjs` (or `node server.js` if compiling differently).
4. Supply `MONGODB_URI`, `NASA_API_KEY`, `ADMIN_PASSWORD`, and `CLIENT_URL` in the Render environment settings.

## API Documentation
* `GET /api/missions` - Returns paginated missions list. Accepts `?search`, `?agency`, `?planet`, `?type`, `?status`.
* `GET /api/missions/:slug` - Returns single mission document by slug.
* `GET /api/agencies` - Returns all agencies.
* `GET /api/agencies/:slug` - Returns agency and all its missions.
* `GET /api/images/:nasaId` - Proxies to NASA Images API and returns array of image objects.
* `POST /api/admin/missions` - Creates a mission. Requires `Authorization` header with admin password.
