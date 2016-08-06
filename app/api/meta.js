'use strict'
var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })
var upload = multer();
module.exports = function(app) {
  app.get('/get-file-size', function(req, res){
    res.send("dfjdhfjdfhjf");
  });
  app.post('/get-file-size', upload.single('avatar'), function (req, res, next) {
    //res.send({ "size": req.file.size });
    res.send({ "size": upload.file.size });
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })
};
