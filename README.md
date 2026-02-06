# User Management API

A lightweight RESTful API for user management built with Node.js and Express, featuring input validation with Zod and a clean, modular architecture.

## 📋 Features

- **CRUD Operations**: Complete Create, Read, Update, and Delete functionality for users
- **Input Validation**: Robust validation using Zod schemas
- **Clean Architecture**: Organized with controllers, services, routes, and DTOs
- **Middleware Support**: Custom validation middleware for request handling
- **RESTful Design**: Follows REST API best practices

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.2.1
- **Validation**: Zod v4.3.6
- **Module System**: ES Modules

## 📁 Project Structure

```
User Management/
├── src/
│   ├── app.js                    # Express app configuration
│   ├── controllers/              # Request handlers
│   │   └── user.controller.js
│   ├── services/                 # Business logic
│   │   └── user.services.js
│   ├── routes/                   # API routes
│   │   └── user.routes.js
│   ├── middlewares/              # Custom middlewares
│   │   └── validate.middleware.js
│   ├── dto/                      # Data Transfer Objects
│   │   └── user.dto.js
│   └── utils/                    # Utility functions
├── server.js                     # Entry point
├── package.json
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "User Management"
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will start on `http://localhost:3000`

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api/users
```

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/` | Get all users | - |
| POST | `/` | Create a new user | `{ name, email }` |
| PATCH | `/:id` | Update a user | `{ name, email }` |
| DELETE | `/:id` | Delete a user | - |

### Request Examples

#### Get All Users
```bash
GET /api/users
```

**Response:**
```json
[
  {
    "id": 1234567890,
    "name": "John Doe",
    "email": "john@example.com"
  }
]
```

#### Create User
```bash
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "id": 1234567890,
  "name": "John Doe",
  "email": "john@example.com"
}
```

#### Update User
```bash
PATCH /api/users/1234567890
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

**Response:**
```json
{
  "id": 1234567890,
  "name": "Jane Doe",
  "email": "jane@example.com"
}
```

#### Delete User
```bash
DELETE /api/users/1234567890
```

**Response:**
```
204 No Content
```

## ✅ Validation Rules

### User Creation & Update

- **name**: 
  - Required
  - Minimum 3 characters
  
- **email**: 
  - Required
  - Must be a valid email format

## 🏗️ Architecture

### Layered Architecture

1. **Routes Layer** (`routes/`): Defines API endpoints and connects them to controllers
2. **Controller Layer** (`controllers/`): Handles HTTP requests and responses
3. **Service Layer** (`services/`): Contains business logic and data manipulation
4. **DTO Layer** (`dto/`): Defines data validation schemas
5. **Middleware Layer** (`middlewares/`): Request validation and processing

### Data Flow

```
Request → Routes → Middleware (Validation) → Controller → Service → Response
```

## 🔒 Data Storage

Currently, the application uses **in-memory storage** (array-based). Data will be lost when the server restarts.

> **Note**: For production use, consider integrating a database like MongoDB, PostgreSQL, or MySQL.

## 🧪 Testing

To test the API, you can use:
- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/) (VS Code extension)
- [cURL](https://curl.se/)
- [HTTPie](https://httpie.io/)

## 📝 Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication & authorization
- [ ] Password hashing
- [ ] Input sanitization
- [ ] Error handling middleware
- [ ] Logging system
- [ ] Unit and integration tests
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Rate limiting
- [ ] CORS configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

ISC

## 👤 Author

Your Name

---

**Happy Coding! 🚀**
