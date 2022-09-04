const express=require(`express`)
const router=express.Router()
router.use("/findRestaurants",require(`./findRestaurants`))

module.exports=router