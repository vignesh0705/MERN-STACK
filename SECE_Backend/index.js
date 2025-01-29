require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/sece_backend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const signupSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const loginSchema = new mongoose.Schema({
  username: String,
  success: Boolean,
  timestamp: { type: Date, default: Date.now },
});

const payrollSchema = new mongoose.Schema({
  username: String,
  salary: Number,
  date: { type: Date, default: Date.now },
});

const Signup = mongoose.model('Signup', signupSchema);
const Login = mongoose.model('Login', loginSchema);
const Payroll = mongoose.model('Payroll', payrollSchema);

app.post("/signup", async (req, res) => {
  var { username, password } = req.body;
  try {
    const newSignup = new Signup({ username, password });
    await newSignup.save();
    res.status(201).json({ message: "Signup Successful" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during signup", error: error.message });
  }
});

app.post("/login", async (req, res) => {
  var { username, password } = req.body;
  try {
    const user = await Signup.findOne({ username: username, password: password });
    const loginAttempt = new Login({
      username: username,
      success: !!user,
    });
    await loginAttempt.save();

    if (user) {
      const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ message: "Login Successful", token: token });
    } else {
      res.status(401).json({ message: "Login Unsuccessful" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred during login", error: error.message });
  }
});

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: "Failed to authenticate token" });
    }
    req.username = decoded.username;
    next();
  });
};

app.post("/payroll", verifyToken, async (req, res) => {
  var { username, salary } = req.body;
  try {
    const newPayroll = new Payroll({ username, salary });
    await newPayroll.save();
    res.status(201).json({ message: "Payroll entry added successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while adding payroll entry", error: error.message });
  }
});

app.get("/payroll/:username", verifyToken, async (req, res) => {
  var { username } = req.params;
  try {
    const payrolls = await Payroll.find({ username: username });
    res.status(200).json(payrolls);
  } catch (error) {
    res.status(500).json({ message: "An error occurred while retrieving payroll entries", error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});