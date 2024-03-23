const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "You must enter a username."],
    validate: [
      (name) => {
        let min = name.length >= 3;
        let upper = /[A-Z]/.test(name);
        let lower = /[a-z]/.test(name);
        return min && lower && upper;
      },
      "A minimum of three characters, including at least three letters—one capital, one lowercase must be included in the username.",
    ],
  },
  email: {
    type: String,
    require: [true, "An email address is necessary."],
    unique: [true, "There is already a user with that email address."],
    lowercase: true,
    validate: [validator.isEmail, "You must have a valid email address."],
  },
  password: {
    type: String,
    required: [true, "You must enter a password."],
    validate: [
      (pass) => {
        let min = pass.length >= 8;
        let upper = /[A-Z]/.test(pass);
        let lower = /[a-z]/.test(pass);
        let special = /[#?!@$%^&*-]/.test(pass);
        let number = /[0-9]/.test(pass);
        return min && lower && upper && special && number;
      },
      "A minimum of eight characters, including at least three letters—one capital, one lowercase, and one number—must be included in the password.",
    ],
  },
  imagePath: {
    type: String, 
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 12);
  next();
});

module.exports = mongoose.model("Users", UserSchema);
