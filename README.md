# Contender

This is a MERN stack setup and base for future web apps.

MERN Stack Overview
The MERN stack is a combination of technologies used to create a full-stack web application. It includes:

MongoDB: A NoSQL database that stores data in a flexible, JSON-like format.
Express.js: A web application framework for Node.js, providing robust features for building web and mobile applications.
React: A JavaScript library for building user interfaces, particularly for single-page applications where you need a fast and interactive user experience.
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to run JavaScript on the server side.
How the MERN Stack Works Together
Frontend: React handles the client-side, rendering the user interface, managing user interactions, and making HTTP requests to the backend.
Backend: Express.js (running on Node.js) handles the server-side logic, including routing, handling requests, and connecting to the database.
Database: MongoDB stores and retrieves the application’s data. It connects to the backend through the Mongoose library, which provides a straightforward, schema-based solution to model your application data.


## Table of Contents

- [Installation](#installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [Features](#features)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Backend
1. **Clone the repository**

   git clone https://github.com/alh-repo/Contender.git
   cd contender/backend

Install dependencies:
To run the backend of a MERN stack application, you’ll need the following npm packages:

Express: For creating the server and handling routing.
npm install express

Mongoose: For connecting to MongoDB and managing data.
npm install mongoose

Config: For managing configuration variables.
npm install config

Bcryptjs: For hashing passwords.
npm install bcryptjs

JSONWebToken: For creating and verifying JSON Web Tokens (JWT) for authentication.
npm install jsonwebtoken

Express-validator: For validating request data.
npm install express-validator

Nodemon (optional): For automatically restarting the server during development.
npm install -D nodemon

Start the backend server
npm run start
The backend server should now be running on http://localhost:5001.

### Frontend
Navigate to the frontend directory
cd ../contender
Install dependencies:
npm install

Run the frontend application
npm start
The frontend application should now be running on http://localhost:3000.

Usage
Running the Application
To start the full application, make sure both the backend and frontend servers are running as described in the Installation section.

Features
User registration
User login
Styled-components for styling
JWT authentication
API Endpoints
Authentication
Register
URL: /api/auth/register
Method: POST
Description: Register a new user.
Request Body:
json
Copy code
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "userpassword",
  "username": "username"
}
Response:
json
Copy code
{
  "token": "jwt-token"
}
Login
URL: /api/auth/login
Method: POST
Description: Log in a user.
Request Body:
json
Copy code
{
  "email": "user@example.com",
  "password": "userpassword"
}
Response:
json
Copy code
{
  "token": "jwt-token"
}
