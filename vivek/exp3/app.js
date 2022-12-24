let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    let user = [
        {
            name : "rohit",
            age : 25,
            city : "indore"
        },
        {
            name : "vivek",
            age : 22,
            city : "mumbai"
        },
        {
            name : "gaurav",
            age : 27,
            city : "pune"
        },
        {
            name : "amar",
            age : 20,
            city : "indore"
        },
        {
            name : "nilesh",
            age : 21,
            city : "pune"
        }
    ];


    let obj = { user : user };

    res.render("index", obj);
});
app.get("/about", (req, res)=>{
    let a = "vivek";
    let b = "indore";

    let obj = { x : a, y : b, z : "The Stepping Stone"};

    res.render("about", obj)
})

app.get("/contact", (req, res)=>{
    let arr = ["red", "green", "blue", "yellow", "pink", "black", "white", "gray"];
    let obj = { arr : arr };
    res.render("contact", obj)
});

app.listen(3000, ()=>{
    console.log("server running");
})