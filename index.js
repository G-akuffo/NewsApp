const express = require("express");
const app = express();
const newsRouter = require("./routers/news");
// const News = require("./news/news");

app.use(express.static("public"));
app.use(express.static("data/uploads"));
app.use("/api", newsRouter); // => localhost:7000/api/create

/*const news = new News();

const test = async () => {
  const data = news.getAll();
};


test();*/
const PORT = process.env.PORT || 7000;

app.listen(7000, () => {
  console.log("Port is listening");
});
