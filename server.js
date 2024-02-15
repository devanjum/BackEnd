const express=require("express");
const mongoose=require("mongoose");
const studentModel = require("./model/studentModel");
// const cors=require("cors")


const app=express();
app.use(express.json());
// app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/sms").then(()=>{
    console.log("DB is Conected Successfully!!!!!!!");
})

app.get("/",(req,res)=>{
res.send("Welcome to School Management .....")
});

app.get("/student",async(req,res)=>{
 const result=await studentModel.find({});
 res.json(result);
});
app.post("/addstudent",(req,res)=>{
    const newStundent=new studentModel(req.body);
    newStundent.save();
    res.json(newStundent);
})

app.listen(6080,()=>{
    console.log("Server Is Running on PORT:6080...!!! ");
});