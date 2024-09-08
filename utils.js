const axios = require("axios");

const header = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
  "Accept-Language": "en-US,en;q=0.9",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  Connection: "keep-alive",
};

const MAX_RETRIES = 15;
const RETRY_DELAY = 1000;

function formatSearchTerm(searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  searchTerm = searchTerm.replace(/[^a-zA-Z0-9\s]/g, "");
  searchTerm = searchTerm.replace(/\s+/g, "-");
  searchTerm = searchTerm.toLowerCase();
  return searchTerm;
}

const fetchData = async (url, headers, retries = MAX_RETRIES) => {
  try {
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return response;
    }

    if (response.status === 403 && retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return fetchData(url, headers, retries - 1);
    }

    throw new Error(`Request failed with status code ${response.status}`);
  } catch (error) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return fetchData(url, headers, retries - 1);
    }
    throw error;
  }
};

module.exports = { header, formatSearchTerm, fetchData };
