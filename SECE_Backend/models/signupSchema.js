const mdb = require("mongoose");
const signupSchema = mdb.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

const Signup_schema = mdb.model("signup", signupSchema);
module.exports = Signup_schema;