# Banking Transaction Backend

A secure **Node.js backend API for banking transactions** built using **Express.js and MongoDB**.
This project implements account management, transaction handling, authentication, and email notifications.

## 🚀 Features

* User authentication using **JWT**
* Password hashing using **bcrypt**
* MongoDB database integration using **Mongoose**
* Banking transaction management
* Email notifications using **Nodemailer**
* RESTful API architecture
* Environment variable configuration using **dotenv**

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT Authentication**
* **bcrypt**
* **Nodemailer**

---

## 📂 Project Structure

```
banking_transaction_backend
│
├── src
│   ├── config        # Database configuration
│   ├── controllers   # Business logic
│   ├── models        # MongoDB schemas
│   ├── routes        # API routes
│   ├── services      # Email and other services
│   └── app.js        # Express app setup
│
├── server.js         # Application entry point
├── package.json
└── .gitignore
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/PRAKASH-135/banking_transaction_backend.git
```

Go to project directory:

```bash
cd banking_transaction_backend
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Server

Start the development server:

```bash
npm run dev
```

The server will run on:

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Create a `.env` file in the root folder:

```
PORT=3000
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

## 📌 API Capabilities

* User registration and login
* Account creation
* Money transfer between accounts
* Transaction history
* Email notifications for transactions

---

## 📧 Example Use Case

1. User creates an account.
2. User logs in and receives a **JWT token**.
3. User performs a **transaction**.
4. Transaction is saved in MongoDB.
5. Email notification is sent to the user.

---

## 🧑‍💻 Author

**Prakash Tengunti**

GitHub:
https://github.com/PRAKASH-135

---

## 📜 License

This project is licensed under the **ISC License**.
