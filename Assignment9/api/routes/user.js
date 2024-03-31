const { Router } = require("express");
const errorCont = require("../controllers/errorController");
const User = require("../models/user");
const userRouter = Router();


//handle email or usename duplicates
const handleDuplicateKeyError = (err, res) => {
  const field = Object.keys(err.keyValue);
  const code = 409;
  const error = `A user with that ${field} already exists.`;
  res.status(code).send({ messages: error, fields: field });
};
//handle field formatting, empty fields, and mismatched passwords
const handleValidationError = (err, res) => {
  let errors = Object.values(err.errors).map((el) => el.message);
  let fields = Object.values(err.errors).map((el) => el.path);
  let code = 400;
  if (errors.length > 1) {
    const formattedErrors = errors.join(" ");
    res.status(code).send({ messages: formattedErrors, fields: fields });
  } else {
    res.status(code).send({ messages: errors, fields: fields });
  }
};

//error controller function
module.exports = (err, req, res, next) => {
  try {
    if (err.name === "ValidationError")
      return (err = handleValidationError(err, res));
    if (err.code && err.code == 11000)
      return (err = handleDuplicateKeyError(err, res));
  } catch (err) {
    res.status(500).send("unknown error encountered.");
  }
};

const userView = (user) => {
  const { _id, fullName, email, password,imagePath, created } = user;
  return { _id, fullName, email, password, imagePath, created };
};

const multer = require('multer');
const path = require('path');

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images'); //  Store images in the 'images' folder
    },
    filename: (req, file, cb) => {
        // Example: Generate unique filenames with a timestamp
        const uniqueFilename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, uniqueFilename);
    }
});

// Multer File Filtering
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (!allowedTypes.includes(file.mimetype)) {
        return cb(new Error('Invalid file type. Only JPEG, PNG, and GIF images allowed.'), false); 
    }

    cb(null, true); 
};

const upload = multer({ storage, fileFilter }); // Create the Multer instance


userRouter.get("/getAll", (req, res) => {
  res.json(
    User.find({}, (err, users) => {
      if (err) next(err);
      else {
        res.status(200).json(users.map((user) => userView(user)));
      }
    })
  );
});

userRouter.post("/create", async (req, res, next) => {
  console.log(req.body);

  const { fullName, email, password } = req.body;

  const user = new User({ fullName, email, password });

  try {
    let validations = user.validateSync();
    if (validations) {
      res.status(401).json(validations.errors);
      return;
    }
    res.status(201).json(userView(await user.save()));
  } catch (err) {
    next(err);
  }
});

userRouter.put("/edit", async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    if (!email) {
      return res.status(401).json({ error: "email address is necessary." });
    }

    if (!fullName && !password) {
      return res
        .status(401)
        .json({ error: "You must enter your complete name or your password." });
    }

    let user = await User.findOne({ email }).exec();

    if (!user) {
      return res
        .status(401)
        .json({ error: "A user with an email  " + email + "cannot be found." });
    }

    if (fullName) {
      user.fullName = fullName;
    }

    if (password) {
      user.password = password;
    }

    res.status(201).json(userView(await user.save()));
  } catch (err) {
    next(err);
  }
});
userRouter.delete("/delete/:email", async (req, res, next) => {
  try {
    const { email } = req.params; // Extract email from URL parameters

    const user = await User.findOneAndDelete({ email }).exec();

    if (user) {
      res.json({ deleted: userView(user) });
    } else {
      res.status(404).json({ error: "A user with email " + email + " cannot be found." }); // Changed status code to 404 for resource not found
    }
  } catch (error) {
    next(error);
  }
});
userRouter.post('/uploadImage/:email', upload.array('images', 5), async (req, res) => {
  try {
      const userEmail = req.params.email; // Get email from route parameter
      const imagePaths = req.files.map(file => file.path); // Get the paths of the uploaded images

      // Find the user by email
      const user = await User.findOne({ email: userEmail });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Update user's image paths in the database
      user.imagePaths = imagePaths; // Assuming your User model has an imagePaths field
      await user.save();

      res.status(200).json({ message: 'Images uploaded', imagePaths });
  } catch (error) {
      console.error('Error uploading images:', error);
      res.status(500).json({ message: 'Error uploading images' });
  }
});



userRouter.use(errorCont);

module.exports = userRouter;
