const { MongoClient }=require(`mongodb`)

const connectDB= (url)=>{
    const client= new MongoClient(url)
    console.log("connecting...")
    return client
}

module.exports=connectDB