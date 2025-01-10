const express = require("express");
const app = express();
const port = 2025;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {}); // Render the index.ejs file
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add"); // Render the index.ejs file
});

app.get("/user/view.html", (req, res) => {
  res.render("user/view"); // Render the index.ejs file
});

app.get("/user/edit.html", (req, res) => {
  res.render("user/edit"); // Render the index.ejs file
});

mongoose
  .connect(
    "mongodb+srv://firstProjectNode:UHG9v$H9E4ZLywP@cluster0.p7ozq.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
