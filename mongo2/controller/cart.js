var express = require('express');
var routes = express.Router();
var product = require("../models/product");

routes.get("/add/:id", function(req, res){
	// console.log(req.params);
	var id = req.params.id;
	var time = 60*60*1000;
	if(req.cookies.cart_cookie)
	{
		var oldid=req.cookies.cart_cookie;
		oldid += "#"+id;
		res.cookie("cart_cookie", oldid, { expire : time, httpOnly : true});
	}
	else
	{
		res.cookie("cart_cookie", id, { expire : time, httpOnly : true});
	}
	res.redirect("/product");
});
routes.get("/mycart", function(req, res){
	var cartsrt = req.cookies.cart_cookie;
	var arr = cartsrt.split("#");
	var str="";
	var l = arr.length-1;
	arr.forEach(function(id, n){
		if(l==n)
			str+="id = "+id;
		else
			str+="id = "+id+" OR ";
	});
	product.selectWhere(str, function(err, result){
		console.log(result);
		var pageData = { title : "My Cart", pagename : "cart/index", pro : result};
		res.render("layout", pageData);
	});
});

routes.get("/clear", function(req, res){
	res.clearCookie("cart_cookie");
	res.redirect("/product");
});		


module.exports=routes;
