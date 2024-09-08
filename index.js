const express = require("express");
const app = express();
const { searchG2, reviewOfG2 } = require("./controller/g2");
// const { searchCapterra } = require("./controller/capterra");

app.use(express.json());
app.get("/g2/search", searchG2);
app.get("/g2/review", reviewOfG2);
// app.get("/capterra/search", searchCapterra);

app.listen(3000, () => {
  console.log("3000 port sucess");
});
