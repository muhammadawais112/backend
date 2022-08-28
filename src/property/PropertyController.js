const PropertyMode = require("./PropertyModel")
var bodyParser = require("body-parser");
var cors = require('cors')
const path = require('path')
const multer = require("multer")
const fs = require("fs")
const cloudinary = require("cloudinary").v2;






cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY
});







const searchProperty = async (req, res) => {
    var regex = new RegExp(req.params.title, "i")

    await PropertyMode.find({ title: regex }).then((resu) =>
        res.status(200).json(resu)
    )
}






const getProperty = async (req, res) => {


    await PropertyMode.find().then((result) => {
        res.json(result)
    })
        .catch(
            err => { log.warn(err) }
        )
}




const createProperty = async (req, res) => {


    const file = req.files.image;
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        console.log(result);
        const add = PropertyMode({
            title: req.body.title,
            location: req.body.location,
            type: req.body.type,
            size: req.body.size,
            price: req.body.price,
            image: result.url


        })
        if (!req.files) {

            res.send({ code: 500, msg: "err" })
        } else {
            res.send({ code: 200, msg: "upload successful" })
        }

        add.save().then((result2) => {
            res.json(result2)
        }).catch(err => console.log(err))
    })




}

const updateProperty = (req, res) => {

    PropertyMode.updateOne({ id: req.params._id }, {
        $set: {
            title: req.body.title,
            location: req.body.location,
            type: req.body.type,


        }
    }).then((result3) => {
        res.json(result3)
    }).catch(err => console.warn(err))



}



const deleteProperty = async (req, res) => {
    await PropertyMode.deleteOne({ _id: req.params.id }).then((result5) => {
        res.json(result5)
    }).catch(err => console.warn(err))


}








module.exports = {


    searchProperty,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,


};