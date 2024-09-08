// const { header, formatSearchTerm } = require("../utils");
// const axios = require("axios");
// const cheerio = require("cheerio");
// const tough = require("tough-cookie");
// const { wrapper } = require("axios-cookiejar-support");

// const jar = new tough.CookieJar();
// const client = wrapper(axios.create({ jar }));

// exports.searchCapterra = async (req, res) => {
//   try {
//     const { searchTerm } = req.query;
//     const userAgentList = [
//       "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
//       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15",
//       "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15A372 Safari/604.1",
//       "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36",
//       // Add more User-Agent strings as needed
//     ];

//     function getRandomUserAgent() {
//       return userAgentList[Math.floor(Math.random() * userAgentList.length)];
//     }
//     const url = `https://www.capterra.com/search/?query=${encodeURIComponent(
//       searchTerm
//     )}`;
//     const { data } = await axios.get(url, {
//       headers: { ...header, "User-Agent": getRandomUserAgent() },
//     });

//     const $ = cheerio.load(data);

//     const searchResults = [];

//     $('[data-testid="search-product-card"]').each((index, element) => {
//       const name = $(element)
//         .find('[data-testid="product-name"]')
//         .text()
//         .trim();
//       //   const imgSrc = $(element).find("img").attr("src");
//       const description = $(element)
//         .find('[data-testid="description"]')
//         .text()
//         .trim();

//       if (name != "") {
//         searchResults.push({
//           name,
//           // imgSrc,
//           description,
//         });
//       }
//     });

//     if (searchResults.length === 0) {
//       return res.status(404).json({ message: "No search results found" });
//     }

//     res.json({ searchResults });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
