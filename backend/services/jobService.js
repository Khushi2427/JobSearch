const axios = require("axios");

const searchJobs = async (role, location) => {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: `${role} in ${location}`,
      page: "1",
      num_pages: "1",
      date_posted: "week"
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.RAPID_API_HOST
    }
  };

  const response = await axios.request(options);

  const jobs = response.data.data.map(job => ({
    jobId: job.job_id,
    title: job.job_title,
    company: job.employer_name,
    location: job.job_city || "Remote",
    platform: job.job_publisher,
    postedDate: job.job_posted_at_datetime_utc,
    applyLink: job.job_apply_link
  }));

  return jobs;
};

module.exports = { searchJobs };