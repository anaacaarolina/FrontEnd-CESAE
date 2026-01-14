# AI Copilot Instructions - Restaurant Management App

## Project Overview
Full-stack restaurant management application: React 19 frontend (Vite) + Express.js backend with JSON-based persistence. Multi-role system (admin, manager, kitchen, customer) with protected routes and authentication via localStorage.

## Architecture & Data Flow

### Frontend Stack
- **Router**: React Router v7 with nested layouts (LayoutMaster wraps all pages)
- **Auth**: Context API (AuthContext) storing user in localStorage: `{email, firstName, role}`
- **Protected Routes**: ProtectedRoute component checks `localStorage.getItem("user")` and validates role against allowed roles array
- **Styling**: Bootstrap 5 + custom CSS (App.css, index.css)
- **Build**: Vite with @vitejs/plugin-react

### Backend Stack
- **Server**: Express.js (port 3000)
- **Middleware**: body-parser for JSON, multer for file uploads (disk storage to `./public/images/`)
- **Data**: JSON files in `/backend/data/` (users.json, dishes.json, user-dishes.json)
- **CORS**: Enabled for all origins (`*`)

### Roles & Access Control
| Role | Access |
|------|--------|
| admin | All routes |
| manager | /manager (POST /users/edit to change roles) |
| kitchen | /kitchen (view/manage orders) |
| customer | /order (place orders) |
| (none) | /login, /register, /menu, / (homepage) |

## Critical Development Workflows

### Running the Application
1. **Backend**: `node backend/app.js` (runs on http://localhost:3000)
2. **Frontend**: `npm run dev` (Vite dev server, default http://localhost:5173)
3. Both must run simultaneously; backend handles API requests

### Build & Deployment
- Frontend build: `npm run build` (outputs to `dist/`)
- Lint: `npm run eslint .` (ESLint config in eslint.config.js)
- Preview: `npm run preview` (serves built frontend)

### Image Upload Flow
- Multer stores images in `./public/images/`
- Filename slugified from dishName via `slugify()` package
- Frontend accesses via `http://localhost:3000/images/{imageName}`

## Code Patterns & Conventions

### Authentication Flow
```jsx
// Login creates localStorage user: {email, firstName, role}
// AuthContext.login() POSTs to /login, stores response
// ProtectedRoute reads localStorage directly (not via context)
const user = JSON.parse(localStorage.getItem("user"));
if (!user || !user.role || !user.email || !user.firstName) return <Navigate to="/login" />;
```

### Component Structure
- Presentational components (FoodCard) receive props, no API calls
- Page components handle data fetching and form submission
- Example: Login page uses FormData API to serialize form inputs

### API Conventions
- All endpoints expect JSON bodies with camelCase properties
- Error responses: `{message, errors: {field: "reason"}}`
- Success responses typically wrap data: `{users: [...]}` or return single object `{email, firstName, role}`

### Data Model
**Users** (users.json): `{email, password, firstName, lastName, role}`
**Dishes** (dishes.json): `{dishName, dishDescription, dishCategory, dishPrice, dishImage}`
**User Orders** (user-dishes.json): Join table tracking customer orders

## File Organization
- `src/pages/` - Route components (Login, Kitchen, Manager, Order, Menu, Homepage)
- `src/components/` - Reusable UI components (FoodCard, FoodCardOrder, LayoutMaster)
- `src/contexts/` - State management (AuthContext)
- `src/auth/` - Route protection (ProtectedRoute)
- `backend/data/` - JSON persistence files
- `backend/public/` - Static files served by Express

## Key Integration Points
1. **localStorage** ↔ **AuthContext**: login() reads from /login endpoint, writes to localStorage; ProtectedRoute reads directly
2. **Frontend API calls**: All hit `http://localhost:3000` (cross-origin due to CORS middleware)
3. **File serve**: Static `./public/` served as root by Express (images accessed via `/images/{name}`)

## Development Tips
- Always check role-based access via ProtectedRoute when adding new pages
- API responses include only necessary user fields (no password in responses)
- Image URLs hardcoded to localhost:3000 - adjust in FoodCard if backend port changes
- localStorage cleared on logout() but user context not synced - manual page reload used in Login.jsx
- New API endpoints should follow `/resource` pattern (GET=list, POST=create) and return consistent error format
