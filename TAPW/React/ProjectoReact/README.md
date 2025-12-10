# React Final Project - Restaurant App

A restaurant management app.

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
