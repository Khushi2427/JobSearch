const express = require("express");
const { getJobs } = require("../controllers/jobController");

const router = express.Router();

router.get("/search", getJobs);

module.exports = router;