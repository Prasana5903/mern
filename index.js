const exp = require('express') //like import
const mongoose=require('mongoose')
const app = exp() //same var() like in prev line
mongoose.connect("mongodb+srv://prasana5903:prasana5903@cluster0.2yem3ro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("mongodb connected")
}).catch(()=>{console.log("error")})
app.listen(3000,()=>{     //3000 is port number
    console.log("Hi from server")
})
app.get("/",(req,res)=>{
    res.send("hello from me")
})