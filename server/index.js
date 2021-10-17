
require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = 5000;
const cors = require('cors')
//For JSON !!!!
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));
//Router
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.use('/api/posts',postRouter)
app.use('/api/auth',authRouter)

//Connect DB
const connectDB = async()=>{
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pyzeq.mongodb.net/database?retryWrites=true&w=majority`,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }) 
        console.log("ok db")
    }catch(error){
        console.log(error.message)
        process.exit(1) 
        
    }
}
connectDB ();
//Use router


app.listen(PORT,()=>{console.log(`server on port: ${PORT}`)})