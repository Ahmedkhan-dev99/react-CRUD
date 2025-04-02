# React CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application built with React and Node.js.

## Project Structure

```
react-CRUD/
├── client/          # Frontend React application
└── server/          # Backend Node.js server
```

## Features

- User management system
- Create, Read, Update, and Delete operations
- MongoDB database integration
- RESTful API endpoints
- Modern UI with Tailwind CSS

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-CRUD
```

2. Install frontend dependencies:
```bash
cd client
npm install
```

3. Install backend dependencies:
```bash
cd ../server
npm install
```

## Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```
The server will run on http://localhost:5000

2. Start the frontend development server:
```bash
cd client
npm run dev
```
The client will run on http://localhost:5173

## API Endpoints

- `GET /` - Get all users
- `POST /get` - Get specific user(s)
- `POST /create` - Create a new user
- `PUT /update` - Update a user
- `DELETE /delete` - Delete a user

## Database Schema

The user schema includes the following fields:
- name: String
- email: String
- gender: String

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
