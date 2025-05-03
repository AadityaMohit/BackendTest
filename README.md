Task Management System Backend
This repository contains the backend for the Task Management System application. It handles user authentication, task creation, management, and updates. The backend is built with Node.js, Express.js, and connected to a MongoDB database.

Table of Contents
Features

Installation

Usage

API Endpoints

Technologies Used

License

Features
User Authentication: JWT-based authentication for secure login and registration.

Task Management: Ability to create, read, update, and delete tasks.

Task Priority & Status: Tasks can have different priorities (Low, Medium, High) and statuses (Pending, Completed).

User Roles: Admin and User roles for different levels of access and control.

Installation
Follow these steps to set up the backend locally:

1. Clone the repository
 
git clone [https://github.com/your-username/task-management-backend.git](https://github.com/AadityaMohit/BackendTest)
2. Navigate into the project directory
 
 
cd task-management-backend
3. Install dependencies
bash
 
npm install
4. Set up environment variables
Create a .env file in the root of the project and add the following variables:

 
MONGODB_URI=your_mongo_database_url
JWT_SECRET=your_jwt_secret_key
PORT=5000
Replace your_mongo_database_url with your MongoDB URI.

Replace your_jwt_secret_key with a secret key for JWT authentication.

5. Start the server
 
npm start
The server will run on http://localhost:5000.

Usage
Once the server is running, you can interact with the API using tools like Postman or cURL.

Example requests:
POST /api/auth/register: Register a new user.

POST /api/auth/login: Login and receive a JWT token.

GET /api/tasks: Get all tasks for the logged-in user (Requires authentication).

POST /api/tasks: Create a new task (Requires authentication).

PUT /api/tasks/:id: Update a task (Requires authentication).

DELETE /api/tasks/:id: Delete a task (Requires authentication).

API Endpoints
Authentication
POST /api/auth/register: Register a new user.

POST /api/auth/login: Login and receive JWT token for authentication.

Tasks
GET /api/tasks: Get all tasks for the logged-in user.

POST /api/tasks: Create a new task.

Request body:

 
{
  "title": "Task Title",
  "description": "Task Description",
  "dueDate": "2025-05-15T00:00:00.000Z",
  "priority": "High"
}
PUT /api/tasks/:id: Update a task.

DELETE /api/tasks/:id: Delete a task.

Protected Routes
All task-related endpoints require the user to be authenticated. Include the JWT token in the Authorization header as a Bearer token.

Technologies Used
Node.js: JavaScript runtime for the backend.

Express.js: Web framework for Node.js.

MongoDB: NoSQL database for storing tasks and user information.

JWT (JSON Web Token): For user authentication.

dotenv: For managing environment variables.

License
This project is licensed under the MIT License - see the LICENSE file for details.

This README covers basic setup, API endpoints, and the necessary steps to run the backend locally. You can expand it based on the specific features and structure of your backend
