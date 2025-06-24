# Task Management API

## APIs Created:
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/tasks         | Get all tasks |
| GET    | /api/tasks/:id     | Get a task by ID |
| POST   | /api/tasks         | Create a new task |
| PUT    | /api/tasks/:id     | Update a task |
| DELETE | /api/tasks/:id     | Delete a task |

---

## Database Used:
- MongoDB (Localhost)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Testing:** Jest, Supertest

---

## 📂 Project Structure

```plaintext
keploy-assignment/
├── controllers/
│   └── taskController.js
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
├── tests/
│   ├── api/
│   │   └── taskApi.test.js
│   ├── integration/
│   │   └── taskIntegration.test.js
│   └── unit/
│       └── taskController.test.js
├── app.js
├── package.json
└── README.md

---

## How to Run the Server:
```bash
npm install
node server.js

---

## Config Environment Variable:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000

---

## 🧪 Testing Tools Used:
- **Jest:** Unit, Integration, and API testing.
- **Supertest:** For HTTP API testing.

---

## 📊 Test Coverage Screenshot:
<p align="center"> 
<img src="./images/Screenshot 2025-06-24 110138.png" width="700"/> 
</p>
