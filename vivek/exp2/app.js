let express = require("express");
let app = express();
// create our routes
app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html")
});
app.get("/about", (req, res)=>{
    let a = "vivek";
    let b = "indore";
    console.log(a);
    res.sendFile(__dirname+"/about.html")
});
app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html")
});



// now create our virtual server with port 3000
app.listen(3000, ()=>{
    console.log("server running with port 3000");
});