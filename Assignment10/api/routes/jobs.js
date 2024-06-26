const jobController = require('../controllers/jobController');
const {upload} = require('../controllers/controller')
const express = require('express');
const router = express.Router();

router.post('/create/job', upload.none(), jobController.createJob);
router.get('/get/jobs', jobController.getAllJobs);

module.exports = router;