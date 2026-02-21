import express from "express"
import bcrypt from "bcrypt"
const app=express()
app.listen(8080)
app.use(express.json())
let users=[]
app.get("/",(req,res)=>{
    res.send("hello world");
});
app.post("/signup",async(req,res)=>{
    const user=req.body;
    const hashedPwd= await bcrypt.hash(req.body.password,10);
    user.password=hashedPwd
    users.push(user);
    res.json(users);
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const found = users.find((user) => user.email === email);
  if (found) {
    const validate = await bcrypt.compare(password, found.password);
    if (validate) {
      res.send("Hello " + found.name);
    } else {
      res.send("Invalid Password");
    }
  } else {
    res.send("User not found");
  }
});
app.get("/users", (req, res) => {
  res.json(users);
});