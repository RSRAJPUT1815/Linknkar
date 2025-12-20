# Linknkar

A minimal, practical link shortener built with Next.js and MongoDB.

Features
- Shorten URLs via a simple web UI and API endpoint
- Persistent storage with MongoDB
- Redirects short URLs to their targets
- Built with Next.js (app router) and server-side API routes

Quick Start
1. Create a file named `.env.local` in the project root and add your MongoDB connection string:

	MONGODB_URI="your-mongodb-connection-string"

2. Install dependencies:

	npm install

3. Run the development server:

	npm run dev

4. Build for production and start:

	npm run build
	npm run start

API
- `POST /api/generate` — creates a short URL (see [app/api/generate/route.js](app/api/generate/route.js)).

Project Structure (important files)
- `app/` — Next.js app routes and pages
- `components/` — UI components (Navbar, etc.)
- `lib/mongodb.js` — MongoDB connection helper
- `public/` — static assets

Requirements
- Node.js 18 or newer
- A MongoDB instance (Atlas or local)

Notes
- Set `MONGODB_URI` to point to your MongoDB database before running the app.
- Default npm scripts available: `dev`, `build`, `start`, `lint` (see `package.json`).

Contributing
- Issues and PRs are welcome.

License
- MIT
