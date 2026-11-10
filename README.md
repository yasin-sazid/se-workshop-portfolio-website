# Full-Stack Portfolio Website

A React and Express portfolio application presenting professional background, academic projects, experience, education, publications, awards, and skills. The project demonstrates a component-based interface backed by a dedicated JSON API and a contact-form workflow.

## Architecture

```text
React sections → API service functions → Express routes → Structured portfolio data
Contact form ─────────────────────────→ POST /contact → Validation and acknowledgement
```

The frontend separates the hero, navigation, about, projects, skills, and contact sections into reusable components. `client/src/services/api.js` centralizes HTTP requests. The backend keeps portfolio content in structured JavaScript objects and arrays and exposes it through Express routes.

## API surface

| Method | Route | Response |
| --- | --- | --- |
| GET | `/` | API status and version |
| GET | `/profile` | Profile details |
| GET | `/projects`, `/projects/:id` | Project collection or selected project |
| GET | `/experience`, `/experience/:type` | Experience records, optionally filtered |
| GET | `/education`, `/publications`, `/awards`, `/skills` | Portfolio collections |
| POST | `/contact` | Validates name, email, and message, logs the submission, and returns an acknowledgement |

## Run locally

Use a Node.js version supported by Vite 8. Start the API in one terminal:

```bash
cd server
npm ci
npm start
```

The API defaults to **port 5000** and accepts a `PORT` override. In another terminal, start the frontend with its API base URL:

```bash
cd client
npm ci
VITE_API_URL=http://localhost:5000 npm run dev
```

Open the URL printed by Vite. The client also provides `npm run build`, `npm run preview`, and `npm run lint`; the server provides `npm run dev` through nodemon.

## Technologies and engineering focus

React 19, Vite 8, Express 5, CORS middleware, and ESLint provide the foundation. The implementation demonstrates frontend/backend separation, centralized API access, section-based component organization, parameterized resource lookup, and validation of a JSON form submission.
