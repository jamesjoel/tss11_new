let a = require("express");
let b = a();
b.listen(3000);

// localhost:3000



b.get("/", (a, b)=>{
    b.sendFile(__dirname+"/index.html");
});

// localhost:3000/about
b.get("/about", (x, y)=>{
    y.sendFile(__dirname+"/about.html");
});

// localhost:3000/contact
b.get("/contact", (m, n)=>{
    n.sendFile(__dirname+"/contact.html")
});

b.get("/hello", (x, y)=>{
    y.sendFile(__dirname+"/x.html")
})
b.get("*", (a, b)=>{
    b.sendFile(__dirname+"/notfound.html")
})