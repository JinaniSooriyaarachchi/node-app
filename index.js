//importing node framework
var express = require('express');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
<<<<<<< HEAD
 res.send('hello chalaka! I love You <3 <3 <3');
=======
 res.send('hello chalaka! I love You <3 <3 <3 <3');
>>>>>>> d4bc763084ba07d9edeac7d55b6ce038cdb31d2e
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
