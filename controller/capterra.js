// const { header, formatSearchTerm, fetchData } = require("../utils");
// const axios = require("axios");
// const cheerio = require("cheerio");
// const tough = require("tough-cookie");
// const { wrapper } = require("axios-cookiejar-support");

// const jar = new tough.CookieJar();
// const client = wrapper(axios.create({ jar }));

// exports.searchCapterra = async (req, res) => {
//   try {
//     const { searchTerm } = req.query;

//     const url = `https://www.capterra.com/search/?query=${encodeURIComponent(
//       searchTerm
//     )}`;
//     const { data } = await fetchData(url, header);

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
