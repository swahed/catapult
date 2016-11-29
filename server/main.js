const express = require("express");
const app = new express();
const parser = require("body-parser");
const React = require('react/addons');
const TransferItem = require('./models/TransferItem.js');

// require("babel-register");
require("./database.js");

app.get("/", function(req, res){
	res.render("./../app/index.ejs");
	

	/* TODO: Prerender ot working 				<!--<%- reactoutput %>-->
	var component = React.createFactory('./../app/components/TransferItemList.jsx');
	TransferItem.find(function(error, data) { 
	  	if (error) return console.error(error);
		res.send(data);
	}); 

	var generated = React.renderToString(component({ 
		items : data
	}));

	res.render('./../app/index.ejs', { 
		reactOutput : generated 
	}); */
})
.use(express.static(__dirname + "/../.tmp"))
.listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require("./routes/items.js")(app);