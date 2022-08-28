const router = require('express').Router()
const PropertyController = require("./PropertyController")

router.get('/getProperty', PropertyController.getProperty)
router.get('/search/:name', PropertyController.searchProperty)

router.post('/createProperty', PropertyController.createProperty)
router.put('/updateProperty/:id', PropertyController.updateProperty)
router.delete('/deleteProperty/:id', PropertyController.deleteProperty)



module.exports = router;