const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT || process.env.PORT2;

app.use(bodyParser.json());

const userRouter = require("./routes/user");

app.use("/user", userRouter);

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { family: 4 },
  () => {
    console.log("connected to db, starting application");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
    console.log("application started");
  
  }
);
