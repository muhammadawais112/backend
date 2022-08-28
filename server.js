const express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors')
const path = require('path')
const multer = require("multer")
const fs = require("fs")
require('dotenv').config();


const port = process.env.PORT || 5000
const app = express();



const propertyRoute = require('./src/property/PropertyRoute');
const authrouter = require("./src/auth/AuthRoute")
const setupDB = require("./src/config/db");
const { fileURLToPath } = require("url");

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

setupDB();

const fileUpload = require("express-fileupload");


app.use(fileUpload({
  useTempFiles: true
}));




app.get('/', (req, res) => {




  res.send("server is working")
})




app.use("/auth", authrouter)





app.use('/property', propertyRoute)







app.listen(port, () => {
  console.log(`server running on port ${port}`);
});




