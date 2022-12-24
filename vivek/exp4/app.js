let express = require("express");
let app = express();

let Student = require("./models/Student");

// let mongodb = require("mongodb");
/*
    Now Connection into the Mongodb
*/
// let MongoClient = mongodb.MongoClient;


app.set("view engine", "ejs");
app.use(express.json())
app.use(express.urlencoded({ extended : true }));

app.get("/", (req, res)=>{
    let name = "rohit";
    let city = "indore";
    let user = { gender : "male" };
    let obj = {name : name, city : city, user : user };
    res.render("home", obj);
})
app.get("/about", (req, res)=>{
    res.render("about");
});

app.post("/save", (req, res)=>{
    console.log(req.query);
    console.log(req.body);
    
    res.render("about");
})

app.get("/student", (req, res)=>{
    res.render("student");
})




app.post("/student", (req, res)=>{
    // console.log(req.body);
    // the .connect() function expect 2 para --- 1. connect url, 2. callback fun
    /*MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        let db = con.db("vivek"); // use vivek database
        db.collection("student").insertOne(req.body, (err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("saved");
        });
    }); // */
    Student.create(req.body, (err)=>{
        res.redirect("/list");
    });
})



app.get("/list", (req, res)=>{
    Student.find({}, (err, data)=>{
        // console.log(data);
        let obj = { prop : data };
        res.render("list", obj);
    })
})


app.get("/delete", (req, res)=>{
    // console.log("===========", req.query);
    let sid = req.query.id;
    Student.deleteOne({ _id : sid }, ()=>{
        res.redirect("/list");
    });
})


app.get("/edit", (req, res)=>{
    let sid = req.query.id;
    Student.find({ _id : sid }, (err, data)=>{
        let obj = { prop : data[0] };
        res.render("edit", obj);
    })
})


app.post("/edit", (req, res)=>{
    let sid = req.body.id;
    Student.updateOne({_id:sid}, req.body, (err)=>{
        res.redirect("/list");
    })
})

app.listen(3000, ()=>{
    console.log("server running");
})