const connectDB=require(`../../db`)(process.env.URI_MONGODB)
const db=connectDB.db("test")

const findAllRestaurantsIntheNeighborhood=async (req,res)=>{
    const restaurants=db.collection("restaurants")
    const queryNei={
        geometry:{
            $geoIntersects:{
                $geometry:{
                    type:"Point",
                    coordinates:[ -73.93414657, 40.82302903 ]
                }
            }
        }
    }
    const neighborhood=await db.collection("neighborhoods").findOne(queryNei)
    const queryRes={
        location:{
            $geoWithin:{
                $geometry:neighborhood.geometry
            }
        }
    }
    const rs=await restaurants.find(queryRes).count()
    res.status(200).json({rs})
}

const findCurrentNeighborhood=async (req,res)=>{
    const objectQuery={
        geometry:{
            $geoIntersects:{
                $geometry:{
                    type:"Point",
                    coordinates:[ -73.93414657, 40.82302903 ],
                }
            }
        }
    }
    const rs= await db.collection("neighborhoods").findOne(objectQuery)
    res.status(200).json(rs)
    
}
module.exports={
    findAllRestaurantsIntheNeighborhood,
    findCurrentNeighborhood,
}