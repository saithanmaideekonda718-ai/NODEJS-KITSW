import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});
app.get("/", (req, res) => {
  console.log(req.url);
  console.log(req.method)
  res.send("This is the response from server for get request.");
});
app.post("/", (req, res) => {
  console.log(req.url);
  console.log(req.method)
  res.send("This is the response from server for post request.");
});