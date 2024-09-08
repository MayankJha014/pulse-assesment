const header = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
  "Accept-Language": "en-US,en;q=0.9",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  Connection: "keep-alive",
};

function formatSearchTerm(searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  searchTerm = searchTerm.replace(/[^a-zA-Z0-9\s]/g, "");
  searchTerm = searchTerm.replace(/\s+/g, "-");
  searchTerm = searchTerm.toLowerCase();
  return searchTerm;
}

module.exports = { header, formatSearchTerm };
