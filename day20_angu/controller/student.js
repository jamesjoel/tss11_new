var express = require('express');
var routes = express.Router();
var student = require("../models/student");
var city = require("../models/city");

routes.get("/", function(req, res){
	var pageData = { title : "Student"};
	res.render("layout", pageData);
});


routes.get("/student", function(req, res){
	res.render("student/index");
});










routes.post("/", function(req, res){
	// console.log(req.body);

	student.addNew(req.body, function(err, result){
		console.log(result);
		res.redirect("/");
	});
});


routes.get("/delete/:id", function(req, res){
	// console.log(req.query);
	// console.log(req.params);
	var id = req.params.id;
	student.deleteWhere(id, function(err, result){
		console.log(result);
		res.redirect("/");
	});
});
routes.get("/edit/:id", function(req, res){
	var id = req.params.id;
	student.selectById(id, function(err, result1){
		city.selectAll(function(err, result2){
		result1=JSON.parse(JSON.stringify(result1));
		// console.log(result1);
		result2=JSON.parse(JSON.stringify(result2));
		var pageData = { title : "Student", pagename : "student/edit", stu : result1[0], city : result2};
		res.render("layout", pageData);
		});
	});
});

routes.post("/edit/:id", function(req, res){
	console.log(req.body);
	console.log(req.params);
	var id = req.params.id;
	student.updateById(id, req.body, function(err, result){
		res.redirect("/");
	});
});




module.exports=routes;