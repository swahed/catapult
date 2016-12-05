const express = require("express");
const server = new express();
const parser = require("body-parser");
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const TransferItem = require('./models/TransferItem.js');

require("babel-register");
require("./database.js");

server.get("/", function(req, res){	
  	const jsx = require('./../app/components/moneyTransfersList.jsx');
	const component = React.createFactory(jsx);
	TransferItem.find(function(error, data) { 
	  	if (error) return console.error(error);

		const html = ReactDOMServer.renderToString(component({ 
			transfers : data
		}));

		res.render('./../app/index.ejs', {reactOutput : html});
	}); 
})
.use(express.static(__dirname + "/../.tmp"))
.listen(7777);

server.use(parser.json());
server.use(parser.urlencoded({extended:false}));

require("./routes/items.js")(server);