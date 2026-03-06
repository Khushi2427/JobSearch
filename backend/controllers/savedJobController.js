const SavedJob = require("../models/SavedJob");

const saveJob = async (req, res) => {
  try {
    const job = new SavedJob({
      userId: req.user.id,
      ...req.body
    });

    await job.save();

    res.json({ message: "Job saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving job" });
  }
};

const getSavedJobs = async (req, res) => {
  const jobs = await SavedJob.find({ userId: req.user.id });
  res.json(jobs);
};

module.exports = { saveJob, getSavedJobs };