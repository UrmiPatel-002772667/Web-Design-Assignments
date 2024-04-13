const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();
const cors = require('cors');
const fs = require('fs');
const userRouter = require('./routes/user');
const companyRouter = require('./routes/company');
const jobsRouter = require('./routes/jobs');

const imagesDir = './images';
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/user', userRouter);
app.use('/company', companyRouter);
app.use('/admin', jobsRouter );
app.use('/images', express.static('images'));

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

mongoose.connect("mongodb://127.0.0.1:27017/Assignment10", {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
}) .then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Could not connect to MongoDB', err));
app.get("/", (req, res) => {
    res.send("Welcome to Assignment 8 - INFO6150.");
  });

app.listen(3000, () => {
    console.log("Server started at port 3000");
  });
