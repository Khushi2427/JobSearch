const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  jobId: String,
  title: String,
  company: String,
  location: String,
  platform: String,
  applyLink: String,
  postedDate: String,
  savedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("SavedJob", savedJobSchema);