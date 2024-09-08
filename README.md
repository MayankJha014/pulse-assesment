# Product Review Scraper

## Overview

This Node.js application scrapes product reviews from G2.com using Express, Cheerio, and Axios. It provides endpoints to search for products and fetch reviews for a specific product.

## Project Structure

- `index.js`: Main entry point of the application.
- `controller/g2.js`: Contains functions for fetching product and reviews from G2.com.

## Dependencies

- **Express**: Web framework for Node.js.
- **Cheerio**: jQuery-like library for server-side manipulation of HTML.
- **Axios**: Promise-based HTTP client for the browser and Node.js.

## Installation

1. **Clone the Repository**

   Open your terminal and run:

   ```bash
   git clone https://github.com/MayankJha014/pulse-assesment.git
   ```

2. **Install Dependencies**

   Navigate to the directory and install the required Node.js packages:

   ```bash
   npm install
   ```

3. **Start Server**

   ```bash
    npm start
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

## Issues

When calling the API at `https://www.g2.com/search`, `capterra.com`, the server sometimes responds with a `403 Forbidden` error due to web security measures. This response indicates that access to the resource is restricted. Capterra totally block to access data.

### Temporary Workaround

To address this issue, I have implemented a temporary solution using recursive retry logic with exponential backoff. This approach attempts to re-fetch the data multiple times with 1000ms delays between retries. However, this is a temporary measure and might not be effective in the long term due to potential rate limiting or additional security measures.

**Key Details of the Workaround:**

- **Exponential Backoff**: The delay between retries starts at 1 second.
- **Retries**: The function will retry up to 20 times before giving up.
