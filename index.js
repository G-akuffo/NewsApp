const express = require("express");
const app = express();
const newsRouter = require("./routers/news");

// added later to find out incoming and outgoing requests.
//const morgan = require("morgan");
//app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.static("data/uploads"));
app.use("/api", newsRouter); // => localhost:7000/api/create

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`);
});
