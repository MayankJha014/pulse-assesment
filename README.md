# Product Review Scraper

## Overview

This Node.js application scrapes product reviews from G2.com using Express, Cheerio, and Axios. It provides endpoints to search for products and fetch reviews for a specific product.

## Project Structure

- `server.js`: Main entry point of the application.
- `routes/reviews.js`: Contains routes for fetching reviews.
- `scraper.js`: Contains functions for scraping and parsing data from G2.com.

## Dependencies

- **Express**: Web framework for Node.js.
- **Cheerio**: jQuery-like library for server-side manipulation of HTML.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

## Installation

1. **Clone the Repository**

   Open your terminal and run:

   ```bash
   git clone https://github.com/yourusername/product-review-scraper.git
   ```

2. **Install Dependencies**

   Navigate to the `server` directory and install the required Node.js packages:

   ```bash
   cd server
   npm install
   ```

## API Endpoint

1. **Search Product**
   ```bash
   http://localhost:3000/g2/search?searchTerm=saas
   ```
2. **Product Review**
   ```bash
   http://localhost:3000/g2/review?searchTerm=CentOS&startDate=2024-04-05&endDate=2024-04-19
   ```

## Screenshots

![Screenshot 2024-09-08 134054](https://github.com/user-attachments/assets/0db6f100-19f8-4500-ab0f-fab1f89fd0d1)
![Screenshot 2024-09-08 134253](https://github.com/user-attachments/assets/de02703b-d97d-4a7b-b0a2-fb5685e4b535)
