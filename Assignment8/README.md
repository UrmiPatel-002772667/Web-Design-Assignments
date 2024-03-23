# ASSIGNMENT 8

- Name: Urmi Patel
- NUID: 002772667

## Topic: Assignment 8 use of Node.js, Express, and MongoDB to create a RESTful API that manages user information
- This involves creating endpoints for creating, updating, deleting, and retrieving users.
- An endpoint for uploading images are implemented. Ensured data validation, strong password rules, and secure password storage using bcrypt. 
- Testing of these APIs conducted via Postman. 

### Project aspects:
1. **.env** file contains environment variables such as database connection string and port number.
2. **app.js** file is used to connect to MongoDB and execute database connection on port.
3. **models/user.js** checks the validation and security aspects of user schema.
4. **routes/user.js** has the functionality for user creation, editing, deletion and file uploading in the appropriate route handlers.
5. **controllers/errorController** handles error regarding email or usename duplicates, field formatting, empty fields.
6. **images** folder contains images uploaded to the database

#### Setup:

1. Launch VS Code, open the app.js file, and type "node app.js" in the terminal.
2. Launch Postman and begin working with the URLs listed below.
eg.
  - User Creation 
    - POST ->  http://localhost:3000/user/create
  - Update User Details
    - PUT -> http://localhost:3000/user/edit/?urmi1@gmail.com
  - Retrieve All Users
    - GET -> http://localhost:3000/user/getAll
  - Delete User
    - DELETE -> http://localhost:3000/user/delete/urmi1@gmail.com
  - Upload Image
    - POST -> http://localhost:3000/user/uploadImage/urmi@gmail.com
 