const userController = require('../controllers/usersController');
const {upload} = require('../controllers/controller')

const express = require('express');
const router = express.Router();

router.post('/create', upload.none(), userController.createUser);
router.put('/edit', upload.none(), userController.editUser);
router.delete('/delete', upload.none(), userController.deleteUser);
router.get('/getAll', userController.getAllUsers);
router.post('/login', upload.none(), userController.userLogin);
router.post('/uploadImage', upload.single('image'), userController.uploadImage);

module.exports = router;
