const express = require("express");
const PORT = 80;

app = express();

app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { title: req.query.title || "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is listen on port ${PORT}`);
});
