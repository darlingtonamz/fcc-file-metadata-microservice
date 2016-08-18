'use strict'
var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })
var upload = multer();
module.exports = function(app) {
  app.get('/get-file-size', function(req, res){
    res.send("dfjdhfjdfhjf");
  });
  app.post('/get-file-size', upload.single('avatar'), function (req, res, next) {
    res.writeHead(200, {'content-type':'application/json'});
    var op = {
        'Name':req.file.originalname,
        'Size':req.file.size
    };
    res.end(JSON.stringify(op));
  })
};
