import express from "express"
const app=express();
app.use(express.json())
app.listen(8080)
let products=[
    {id:1,name:"laptop",price:60000},
    {id:2,name:"desktop",price:30000},
    {id:3,name:"keyboard",price:50000},

];
app.get("/",(req,res)=>{
    res.json(products);
});
app.get("/:id",(req,res)=>{
    const id=Number(req.params.id);
    const result=products.find((product)=>product.id===id);
    res.json(result)
});
app.post("/",(req,res)=>{
    const product=req.body;
    products.push(product);
    res.json(products);
});
app.delete("/:id",(req,res)=>{
    const id=Number(req.params.id);
    products=products.filter((product)=>product.id!==id);
    res.json(products);
});