//SERVER SET-UP
var express = require('express');
var mongoose = require('mongoose');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var port = 27017;
mongoose.connect('mongodb://localhost:' + port + '/trackcraftsdb');
mongoose.connection.on('error', function(error) {
  console.log('CONNECTION ERROR----> ', error);
});
mongoose.connection.on('open', function() {
  console.log('CONNECTED');
});

app.use('/#/patterns', express.static(__dirname + '/app/patterns/patterns'));
app.use('/#/tools', express.static(__dirname + '/app/tools/tools'));
app.use('/#/yarn', express.static(__dirname + '/app/yarn/yarn'));

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());


//MODELS
var PatternSchema = new mongoose.Schema({
  name: String,
  source: String,
  notes: String,
  craft: String
});
var Patterns = mongoose.model('Patterns', PatternSchema);

var ToolSchema = new mongoose.Schema({
  craft: String,
  tool: String,
  size: String,
  notes: String
});
var Tools = mongoose.model('Tools', ToolSchema);

var YarnSchema = new mongoose.Schema({
  brand: String,
  weight: String,
  color: String,
  notes: String
});
var Yarn = mongoose.model('Yarn', YarnSchema);


//GET
app.get('/#/patterns', function(req, res){
  Patterns.find(function(err, patterns){
    if(err){
      console.log('ERROR (get all)', err);
      res.send(err);
    }
    res.json(patterns);
  });
});
app.get('/#/tools', function(req, res){
  Tools.find(function(err, tools){
    if(err){
      console.log('ERROR (get all)', err);
      res.send(err);
    }
    res.json(tools);
  });
});
app.get('/#/yarn', function(req, res){
  Yarn.find(function(err, yarn){
    if(err){
      console.log('ERROR (get all)', err);
      res.send(err);
    }
    res.json(yarn);
  });
});


//POST
app.post('/#/patterns', function(req, res){
  Patterns.create({
    name: req.body.name,
    source: req.body.source,
    notes: req.body.notes,
    craft: req.craft.craft
  }, function(err, patterns){
    if(err){
      console.log('ERROR (post)', err);
      res.send(err);
    }
  });
  Patterns.find(function(){
    if(err){
      res.send(err);
    }
    res.json(patterns);
  });
});
app.post('/#/tools', function(req, res){
  Tools.create({
    craft: req.body.craft,
    tool: req.body.tool,
    size: req.body.size,
    notes: req.body.notes
  }, function(err, tools){
    if(err){
      console.log('ERROR (post)', err);
      res.send(err);
    }
  });
  Tools.find(function(){
    if(err){
      res.send(err);
    }
    res.json(tools);
  });
});
app.post('/#/yarn', function(req, res){
  Yarn.create({
    brand: req.body.brand,
    weight: req.body.weight,
    color: req.body.color,
    notes: req.body.notes
  }, function(err, pattern){
    if(err){
      console.log('ERROR (post)', err);
      res.send(err);
    }
  });
  Yarn.find(function(){
    if(err){
      res.send(err);
    }
    res.json(yarn);
  });
});



app.get('*', function(req, res){
  res.sendFile(path.resolve('./index.html'));
});

app.listen(8000, function() {
  console.log("Listening on port 8000");
});