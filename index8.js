import express from "express"
const app=express();
app.use(express.json())
app.listen(8080)
let users=[
    {id:1,name:"thanmai",email:"thanmai@mail.com"},
    {id:2,name:"john",email:"john@mail.com"},
    {id:3,name:"mike",email:"mike@mail.com"},

];
app.get("/",(req,res)=>{
    res.json(users);
});
app.get("/:id",(req,res)=>{
    const id=Number(req.params.id);
    const result=users.find((user)=>user.id===id);
    res.json(result)
});
app.post("/",(req,res)=>{
    const user=req.body;
    users.push(user);
    res.json(users);
});
app.delete("/:id",(req,res)=>{
    const id=Number(req.params.id);
    users=users.filter((user)=>user.id!==id);
    res.json(users);
});