require(`dotenv`).config()
const express=require('express')
require(`express-async-errors`)
const connectDB=require(`./db`)
const app=express()
const router=require(`./routers`)

app.use(express.json());
app.use("/api/v1",router)

const PORT=process.env.PORT || 3000

const start=async ()=>{
    try{
        app.listen(PORT,console.log(`listening on ${PORT}`))
    }catch(err){
        console.log(err)
    }

}
start()