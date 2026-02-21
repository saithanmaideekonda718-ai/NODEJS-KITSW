import express from "express"
const app=express()
app.listen(8080)
app.use(express.json())
let users=[]
app.get("/",(req,res)=>{
    res.send("hello world");
});
app.post("/signup",(req,res)=>{
    const user=req.body
    users.push(user);
    res.json(users);
});
app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    const found=users.find(user=>user.email===email && user.password===password)
    if(found){
        res.send("Hello "+found.name)
    }
    else{
        res.send("User not found")
    }
});
app.get("/users",(req,res)=>{
    res.json(users);
});