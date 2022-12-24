let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/vivek");

let Student  = mongoose.Schema({
    name : String,
    fee : Number,
    city : String
});
module.exports = mongoose.model("student", Student);

// mongoose.model("city", )

// citys
// cities