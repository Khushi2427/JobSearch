const express = require("express");
const { saveJob, getSavedJobs } = require("../controllers/savedJobController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/save", protect, saveJob);
router.get("/saved", protect, getSavedJobs);

module.exports = router;