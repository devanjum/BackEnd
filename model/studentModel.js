const mongoose=require("mongoose");

const studentModel=mongoose.model("students",{
    fname:{type:String},
    mname:{type:String},
    lname:{type:String},
    dob:{type:String},
    gender:{type:String},
    class:{type:String},
    division:{type:String},
    religion:{type:String},
    mobile:{type:Number},
    email:{type:String},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    country:{type:String},
    isActive:{type:Boolean},
    photo:{type:String},
});
module.exports= studentModel;