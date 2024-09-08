const { header, formatSearchTerm, fetchData } = require("../utils");
const axios = require("axios");
const cheerio = require("cheerio");

exports.searchG2 = async (req, res) => {
  try {
    const { searchTerm } = req.query;

    const url = `https://www.g2.com/search?utf8=%E2%9C%93&query=${encodeURIComponent(
      searchTerm
    )}`;

    const { data } = await fetchData(url, header);

    const $ = cheerio.load(data);

    const searchResults = [];

    $(".paper").each((index, element) => {
      const name = $(element)
        .find(".product-listing__product-name div")
        .text()
        .trim();
      const imgSrc = $(element).find("img").attr("src");
      const description = $(element)
        .find(".product-listing__paragraph")
        .text()
        .trim();
      const categories = [];
      $(element)
        .find(".cell.xlarge-8 a")
        .each((index, categoryElement) => {
          const category = $(categoryElement).text().trim();
          categories.push(category);
        });

      if (name != "") {
        searchResults.push({
          name,
          // imgSrc,
          description,
          categories,
        });
      }
    });

    if (searchResults.length === 0) {
      return res.status(404).json({ message: "No search results found" });
    }

    res.json({ searchResults });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.reviewOfG2 = async (req, res) => {
  try {
    const { searchTerm, startDate, endDate } = req.query;
    const formattedSearchTerm = formatSearchTerm(searchTerm);

    const url = `https://www.g2.com/products/${formattedSearchTerm}/reviews`;
    const { data } = await fetchData(url, header);

    const $ = cheerio.load(data);

    let reviewResult = [];

    $('[itemprop="review"]').each((index, element) => {
      const title = $(element).find(".m-0.l2").text().trim();

      const name =
        $(element).find('meta[itemprop="name"]').attr("content") ||
        "Unknown Author";

      const reviewBody = $(element)
        .find('[itemprop="reviewBody"]')
        .text()
        .trim();
      const date = $(element)
        .find('meta[itemprop="datePublished"]')
        .attr("content");

      if (date) {
        reviewResult.push({ name, title, reviewBody, date });
      }
      // searchResults.push({ name, title, reviewBody, date });
    });

    if (reviewResult.length === 0) {
      return res.status(404).json({ message: "No review found" });
    }
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      console.log("Start date:", start);
      console.log("End date:", end);

      reviewResult = reviewResult.filter((review) => {
        const reviewDate = new Date(review.date);
        console.log("Review date:", reviewDate);
        return reviewDate >= start && reviewDate <= end;
      });
    }
    reviewResult.sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json({ reviewResult });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
