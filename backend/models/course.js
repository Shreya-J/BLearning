const mongoose = require("mongoose");
const courseSchema=new mongoose.Schema({
  name:String,
  category:String,
  fee:Number,
  link:String
})
const Course =mongoose.model("Course", courseSchema)

module.exports=Course
