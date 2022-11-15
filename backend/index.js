const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config();
const userRoutes=require('./routes/users');
const authRoutes=require('./routes/auth');
const courseRoutes=require('./routes/courses')
const paymentRoutes=require('./routes/payment')

var database

try {
    mongoose.connect(process.env.DB,  {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    database=mongoose.connection;
    console.log("Connected to database successfully");
} catch (error) {
    console.log(error);
    console.log("Could not connect database!");
}

app.use(express.json())
app.use(cors());

app.use("/register",userRoutes);
app.use("/login",authRoutes);
app.use("/courses",courseRoutes);
app.use("/payment/",paymentRoutes)

app.get('/fetchcourses',(req,res)=>{
    database.db.collection('courses').find({}).toArray((err,result)=>{
        if(err) throw err
        res.send(result)
    })
})

const port=process.env.PORT||8080;
app.listen(port,()=>console.log('Listening on port 8080...'));