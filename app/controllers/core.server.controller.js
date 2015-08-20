'use strict';

var request = require('request');

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.getBooks = function(req, res) {
	var isbn_list = req.body.books;

	var url = 'https://openlibrary.org/api/books?bibkeys=';
	for (var i = 0, len = isbn_list.length; i < len; i++) {
		var book;
		if (i === len-1){
			book = 'ISBN:' + isbn_list[i];
		}
		else{
			book = 'ISBN:' + isbn_list[i] + ',';
		}
		url+=book;
	}
	url+='&format=json&jscmd=data';

	var options = {
		url: url,
		json: true,
	};

	request(options, function (err, response, body){
		if(err){
			res.status(400).json(response);
		}
		res.status(200).json(body);
	});

};
