const { searchJobs } = require("../services/jobService");

const getJobs = async (req, res) => {
  try {
    const { role, location } = req.query;

    const jobs = await searchJobs(role, location);

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs" });
  }
};

module.exports = { getJobs };