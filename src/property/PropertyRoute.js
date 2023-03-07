const router = require('express').Router()
const PropertyController = require("./PropertyController")

router.get('/getGroceries', PropertyController.getProperty)
router.get('/search/:title', PropertyController.searchProperty)

router.post('/createGroceries', PropertyController.createProperty)
router.put('/updateGroceries/:id', PropertyController.updateProperty)
router.delete('/deleteGroceries/:id', PropertyController.deleteProperty)



module.exports = router;