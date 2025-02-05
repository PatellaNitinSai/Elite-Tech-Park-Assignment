# Backend Project for Full Stack Developer Role

## Table of Contents
- [Introduction]
- [Features]
- [Tech Stack]()
- [Installation and Setup]()
- [API Endpoints]()
- [Postman Collection]()

---

## Introduction
This project is the backend implementation for the task provided by Elite Tech Park. The backend is responsible for managing all the APIs and database interactions required for the application.

---

## Features
- RESTful APIs for CRUD operations.
- Middleware for authentication and error handling.
- Database integration with MongoDB Compass/MongoDB Atlas.
- Specific routes for vendor, admin and users.
- API Endpoints for managing products, orders, and users.
- API Endpoints for managing vendor and admin.
- Login and Signup requirements with JWT Secret Key.

---

## Tech Stack
- **Express.js**
- **Database:** [MongoDB]
- **Postman for API testing**

---

## Installation and Setup
1. Clone the repository:

   git clone https://github.com/PatellaNitinSai/Elite-Tech-Park-Assignment.git


2. Navigate to the Project Directory
    cd backend


3. Install the required packages:
    
    npm install


4. Set up the environment variables by creating a .env file in the root directory. The required variables are:
    - CLOUDINARY_CLOUD_NAME
    - CLOUDINARY_API_KEY
    - PORT 
    - CLOUDINARY_API_SECRET 
    - JWT_SECRET
    - MONGO_URI

5. Run the Server

    npx nodemon server.js
    or
    node server.js
    
 ***API Endpoints***

**User Routes**
- GET /api/users/products - Get All Products

**Admin Routes**
- GET /api/admin/details - Get All Details Regarding Users.
- POST /api/admin/product - Create Product

**Auth Routes**
- POST /api/auth/register - Sign Up for a New User.
- POST /api/auth/login - Login for a existing User.

**Product Routes**
- GET /api/product/products - Get All Details Regarding Products.
- POST /api/product/product - Create Product to the Database.

**Staff Routes**
- POST /api/staff/products - Add Products For the Vendor.

**Product Routes**
- GET /api/vendor/products - Get All Details Regarding Products.
- POST /api/vendor/product - Create Product to the Database in terms of Vendor.


This is the Drive link for the postman Collection :
https://drive.google.com/file/d/1TKJURDaXVi18bV75IG7IWmdRHrm_N_85/view?usp=drivesdk 

