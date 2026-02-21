import express from "express";
const app = express();
app.listen(8080);
//express.json() function will convert json input
//received via body into JavaScript object
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/morning", (req, res) => {
  res.send("Good Morning");
});
app.get("/evening", (req, res) => {
  res.send("Good Evening");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("This is post request");
});