const express=require(`express`)
const router=express.Router()
const {findAllRestaurantsIntheNeighborhood,findCurrentNeighborhood}=require(`../../controller/findRestaurants`)

router.route("/findRestaurants").get(findAllRestaurantsIntheNeighborhood)
router.route("/findCurrentNeighborhood").get(findCurrentNeighborhood)

module.exports=router