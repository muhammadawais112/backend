var mongoose = require("mongoose");

const setupDB = () => {
  console.log("process.env.DB",);
  mongoose.connect(
  "mongodb+srv://developer:NaF8BFUhgDHpEXse@cluster0.mdlmo.mongodb.net/?retryWrites=true&w=majority",
    function (err) {
      if (err) throw err;
      console.log("successfully connected with database");
    }
  );
};

module.exports = setupDB;