# Restaurant Management Application

## Overview

A complete restaurant management system built as a full-stack web application. This project demonstrates a real-world restaurant workflow where different team members (customers, kitchen staff, managers, and administrators) use the platform to manage orders, view menus, and oversee operations.

**Think of it as:** An order management system similar to platforms used by restaurants like DoorDash integration endpoints or Uber Eats, but designed for in-house restaurant operations where both customers and staff interact with the system.

---

## What This Application Does

### For Customers
- Browse the restaurant menu with dish descriptions, prices, and photos
- Create an account and place food orders
- Track their order status in real-time (pending → cooking → delivered)

### For Kitchen Staff
- View all incoming orders with full details
- Update order status as they prepare dishes
- See which orders are ready to be delivered

### For Restaurant Managers
- View all users and their account information
- Manage staff roles and permissions (assign who is kitchen staff, who is admin, etc.)
- Oversee the restaurant's digital operations

### For Administrators
- Full access to all system features
- Add new dishes to the menu with photos
- Manage all users, orders, and operations

---

## Key Features

✅ **User Authentication & Role-Based Access**
- Secure login system with different user types (customer, kitchen staff, manager, admin)
- Each role sees only the information and tools relevant to their job

✅ **Menu Management**
- Dynamic menu display with dish photos, descriptions, categories, and prices
- Ability to upload images for each dish
- Easy to add or remove items

✅ **Order Management System**
- Complete order lifecycle: place order → kitchen receives → preparation → delivery
- Orders automatically assigned unique IDs and tracked with timestamps
- Kitchen can update order status as they work

✅ **User Management**
- Employee role assignment (e.g., promote a customer to kitchen staff)
- User registration system for new customers
- Role-based access control (authorization)

✅ **File-Based Data Storage**
- All data stored locally in JSON format (no complex database setup required)
- Simulates a real database system with persistent data storage

---

## Technology Stack Explained

### Frontend (Customer-Facing Interface)
- **React 19** - The engine that makes the website interactive and responsive
- **Vite** - Tool that makes development faster and builds the app for deployment
- **React Router** - Handles navigation between different pages/sections
- **Bootstrap 5** - Pre-built styling components for a professional look

### Backend (Server & Business Logic)
- **Node.js & Express** - The server that handles all requests from the app
- **File-Based Storage** - Uses JSON files instead of a complex database

### Supporting Tools
- **ESLint** - Code quality checker to maintain clean, consistent code
- **Multer** - Handles image uploads from customers

---

## User Roles & Permissions

| Role | What They Can Do |
|------|------------------|
| **Customer** | Browse menu, place orders, track order status |
| **Kitchen Staff** | View orders, update cooking status, mark as delivered |
| **Manager** | View all users, assign roles to employees |
| **Admin** | Everything - full system access and control |

---

## How to Run the Application

### Prerequisites
You need to have Node.js installed on your computer.

### Quick Start

1. **Download and setup:**
   ```bash
   cd ProjectoReact
   npm install
   ```

2. **Start the backend server (in one terminal):**
   ```bash
   node backend/app.js
   ```
   The server runs on `http://localhost:3000`

3. **Start the frontend application (in another terminal):**
   ```bash
   npm run dev
   ```
   The app opens on `http://localhost:5173`

4. **Test with demo accounts:**
   - **Admin**: teste@teste.com / teste@teste.com
   - **Kitchen**: kitchen@kitchen.com / kitchen@kitchen.com
   - **Manager**: manager@manager.com / manager@manager.com
   - **Customer**: customer@customer.com / customer@customer.com

---

## Project Structure & Organization

### Frontend (`src/` folder)
- **pages/** - Different screens users see (Login, Menu, Order, etc.)
- **components/** - Reusable UI pieces (menu cards, buttons, layouts)
- **contexts/** - Handles user login information across the app
- **auth/** - Ensures only authorized users see certain pages

### Backend (`backend/` folder)
- **app.js** - The main server file that handles all requests
- **data/** - Where all information is stored (users, dishes, orders)
- **public/images/** - Where uploaded dish photos are saved

### Configuration Files
- **package.json** - List of all tools/libraries used
- **eslint.config.js** - Code quality rules

---

## How the App Works: Flow Example

**Customer placing an order:**
1. Customer opens website → sees login page
2. Customer logs in with email/password
3. Customer browses menu (displays all dishes from database)
4. Customer selects items and submits order
5. Order saved to system with unique ID
6. Kitchen immediately sees the new order
7. Kitchen updates order status as they prepare
8. Customer checks app and sees "Cooking" status
9. Kitchen marks as done → Customer sees "Ready"

**Behind the scenes:**
- Frontend (website) sends the order to Backend (server)
- Backend saves it to the file storage
- Both kitchen staff and customer can view the same real-time data

---

## Skills Demonstrated in This Project

### Frontend Development
- Modern React with Hooks and Context API for state management
- Component-based architecture and reusable UI components
- Routing and navigation with React Router
- Form handling and user input validation
- Integration with external APIs

### Backend Development
- Server creation and management with Express.js
- RESTful API design (standard web service architecture)
- Data persistence and file system operations
- Authentication and authorization logic
- Middleware implementation for security (CORS)

### Full-Stack Development
- End-to-end application development (frontend + backend)
- Database simulation and design
- Deployment-ready code structure
- Client-server communication

### Software Engineering Best Practices
- Clean code and code organization
- Security principles (password handling, access control)
- Scalable architecture design
- Version control ready
- Code quality tools (ESLint)

---

## Additional Commands

```bash
npm run build      # Create production-ready version of the app
npm run lint       # Check code quality
npm run preview    # Preview the built app locally
```

---

## Project Status
✅ Fully functional restaurant management system
✅ Ready for learning, demonstration, and portfolio display
✅ Includes sample data for testing all features

---

## Questions for Recruitment

**What demonstrates growth potential:**
- Full-stack implementation (not just frontend OR backend)
- Proper authentication and authorization (security-minded)
- File-based data architecture (foundation for database learning)
- Component-based structure (modern development practices)
- Role-based access patterns (real enterprise patterns)
- Clean project organization (professional structure)

This project shows the ability to build complete, working systems from the ground up, handle multiple user roles, and structure code professionally—all valuable for enterprise software development roles.

---

## Technical Reference

### API Endpoints

#### User Management
- **GET /users** - Retrieve all users
- **POST /signup** - Register a new customer
- **POST /login** - Authenticate user and return profile
- **POST /users/edit** - Update user role (manager/admin only)

#### Menu Management
- **GET /dishes** - Get all menu items
- **POST /dishes** - Add new dish to menu
- **POST /dishes-images** - Upload dish image
- **PUT /dishes/delete** - Remove dish from menu

#### Order Management
- **GET /orders** - View all orders with details
- **POST /orders** - Create new order
- **PUT /orders/advance** - Update order status

### Data Structure

**User Data** (users.json)
```js
{
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  role: "customer" | "kitchen" | "manager" | "admin"
}
```

**Dish Data** (dishes.json)
```js
{
  dishName: string,
  dishDescription: string,
  dishCategory: string,
  dishPrice: string,
  dishImage: string (filename)
}
```

**Order Data** (user-dishes.json)
```js
{
  id: number,
  email: string,
  dishes: array,
  status: "pending" | "cooking" | "delivered"
}
```

## Setup

### Prerequisites

```json
"dependencies": {
    "body-parser": "^2.2.1",
    "bootstrap": "^5.3.8",
    "express": "^5.2.1",
    "multer": "^2.0.2",
    "nodemon": "^3.1.11",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.9.6",
    "slugify": "^1.6.6"
}
```

### Run the project (from root)

1. Run the server `node app.js`
2. Run the React App `npm run dev`

## API

### /users

**GET**: Reads information in the file `users.json` and transforms the data into a JavaScript array.

### /users/edit

**POST**: Updates a user's role based on their email in `users.json`.

### /signup

**POST**: Adds a new user, with the role "customer" to the `users.json`.

### /login

**POST**: Checks credentials and compares them to the `users.json` and returns the user info if it's valid.

### /dishes

**GET**: Reads information in the file `dishes.json` and transforms the data into a JavaScript array.

**POST**: Gets the information from the client, and pushes the dish into the list of dishes.

### /dishes-images

**POST**: Saves an uploaded image to the `./public/images/` folder, renames it using the dish name, and returns the file's name and path.

### /dishes/delete

**PUT**: Removes a dish from `dishes.json` by filtering out the dish that matches the name sent by the client, then saves the updated list.

### /orders

**GET**: Reads all orders and users, matched each order to the correct user, and returns an object where each order includes the customer's full name, the ordered dishes and its current status.

**POST**: Creates a new order by adding the user's email, selected dishes, and an initial status to the `user-dishes.json`, assigning it the next available ID.

### /orders/advance

**PUT**: Updates an order's status by moving it from pending -> cooking -> delievered. From delivered, the order is removed from the file.

## Project Structure

```plaintext
project-root/
├── README.md
├── backend/
│   ├── app.js
│   ├── data/
│   │   ├── dishes.json
│   │   ├── user-dishes.json
│   │   └── users.json
│   └── public/
│       └── images/
├── eslint.config.js
├── index.html
├── node_modules/
├── package-lock.json
├── package.json
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   │   ├── icon_login.svg
│   │   ├── icon_navbar.svg
│   │   ├── icon_register.svg
│   │   ├── icon_tab.svg
│   │   └── restaurant-hero.jpg
│   ├── auth/
│   │   └── ProtectedRoute.jsx
│   ├── components/
│   │   ├── FoodCard.jsx
│   │   ├── FoodCardOrder.jsx
│   │   └── layouts/
│   │       └── LayoutMaster.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── index.css
│   ├── main.jsx
│   └── pages/
│       ├── ErrorPage.jsx
│       ├── Homepage.jsx
│       ├── Kitchen.jsx
│       ├── Login.jsx
│       ├── Manager.jsx
│       ├── Menu.jsx
│       ├── Order.jsx
│       └── Register.jsx
└── vite.config.js
```

## Data

### dishes.json

```js
{
  dishName: string ,
  dishDescription: string,
  dishCategory: string,
  dishPrice: string,
  dishImage: Optional[string]
}
```

### user-dishes.json

```js
{
 id: {
  email:string,
  dishes:[array],
  status: string("pending","cooking", "delivered")
 }
}
```

### users.json

```js
{
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  role: string
}
```
