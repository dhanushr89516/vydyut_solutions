# Deployment and Local Run Guide

## Local development

1. Install dependencies for both frontend and backend:
   - `npm install`
   - `cd server && npm install`

2. Start both frontend and backend together:
   - `npm run start:full`

3. Frontend app URL:
   - `http://localhost:4201`

4. Backend API URL:
   - `http://localhost:3001`

## Environment configuration

- Backend environment is loaded from `server/.env`.
- Copy `server/.env.example` to `server/.env` and set these values:
  - `PORT=3001`
  - `FRONTEND_URL=http://localhost:4201`
  - `EMAIL_USER=your-email@gmail.com`
  - `EMAIL_APP_PASSWORD=your-gmail-app-password`
  - `SALES_EMAIL=sales@yourdomain.com`

- Frontend environment uses `src/environments/environment.ts`.

## Production build

- Build the Angular app for production:
  - `npm run build:prod`

- Serve backend separately or deploy as needed.

## Notes

- The contact form sends POST requests to `http://localhost:3001/api/contact`.
- Make sure `server/.env` contains valid Gmail SMTP credentials before submitting the form.
