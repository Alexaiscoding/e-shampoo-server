const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(

   { 
    name: String,

    lastname: String,

    email: String,

    password: String,

adressNumber: Number,

address :String,

city : String,

country:String,

phone:Number,

role:{type: String, default: 'user'},


},      


)

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;