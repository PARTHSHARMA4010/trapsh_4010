// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb+srv://parthsharma4010:parth123@cluster0.fnhxi59.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // User Schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   mobileNumber: String,
//   otpVerified: Boolean,
// });

// const User = mongoose.model('User', userSchema);

// // Routes
// app.post('/register', async (req, res) => {
//   const { username, password, mobileNumber, otpVerified } = req.body;

//   const newUser = new User({
//     username,
//     password,
//     mobileNumber,
//     otpVerified,
//   });

//   try {
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
