const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const Signup = require("./models/signupSchema");
const Login = require("./models/loginSchema"); // Import the login schema

const app = express();
dotenv.config();
app.use(express.json());

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB Connection Unsuccessful", err);
  });

app.get("/", (req, res) => {
  res.send(
    "Welcome to Backend my friend\nYour Roller coster starts from now on\nFasten your codebase so you can catchup of what is been taught"
  );
});
app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/signup", (req, res) => {
  var { firstName, lastName, username, email, password } = req.body;
  try {
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    });
    newSignup.save();
    res.status(201).send("Signup Successful");
  } catch (error) {
    res.status(400).send("Signup Unsuccessful", error);
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
      res.status(200).send("Login Successful");
    } else {
      res.status(401).send("Login Unsuccessful");
    }
  } catch (error) {
    res.status(500).send("An error occurred during login", error);
  }
});

app.get("/getsignupdet", async (req, res) => {
  var signUpdet = await Signup.find();
  res.status(200).json(signUpdet);
});

app.post("/updatedet", async (req, res) => {
  var updateRec = await Signup.findOneAndUpdate(
    { username: "abi290" },
    { $set: { username: "abi2006" } }
  );
  console.log(updateRec);
  updateRec.save();
  res.json("Record Updated");
});

app.listen(3001, () => {
  console.log("Server Started");
});