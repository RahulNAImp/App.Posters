const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
require("dotenv").config({ path: './config.env' });

const DB_USER = process.env.connection_user;
const DB_PASS = encodeURIComponent(process.env.connection_password);
const DB_NAME = process.env.connection_name;

// Construct MongoDB URI
const MONGO_URI = process.env.DATABASE || 
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.wb6rygr.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connection successful");
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("❌ Connection error:", err);
  });

// Routes
const userRoute = require("./routers/userRoutes");
app.use('/api/v1/users', userRoute);
