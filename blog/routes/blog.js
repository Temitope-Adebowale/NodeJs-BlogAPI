var express = require('express');
var router = express.Router();

//Create an empty array to store your request
let blogArray = [];

//assign id for each of your request
let blogId = 1;

/* GET users listing. */
router.post('/create', function(req, res, next) {
	let blogBody = req.body;
	blogBody.id = blogId;
	blogId+=1;

	//use push to add your request to your already created array
	blogArray.push(blogBody);
	console.log(blogArray);
  	res.send('Add your new research');
});

router.get('/read/:id', function(req, res, next) {
	//declare a variable to find an id for any of your array request
	let selectedId = req.params.id;

	let blogResult = blogArray.find(item => item.id == selectedId);
	console.log(blogResult);
  	res.send(blogResult);
});

router.put('/update', function(req, res, next) {
	let UpdateId = req.body.id;
	let updateResult = blogArray[updatId-1] = req.body;
  	res.send(updateResult);
});

router.delete('/delete', function(req, res, next) {
  res.send('Delete all research');
});

router.all('/all', function(req, res, next) {
  res.send(blogArray);
});


module.exports = router;
