var express = require("express");
var path = require("path");
var session = require("express-session")
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: "secretkey",
resave: true,
saveUninitialized: true}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render("index");
});

app.post('/results', function(req, res) {
    req.session.results = req.body;
	res.redirect("/results")
});

app.get('/results', function(req, res) {
    results = req.session.results;
    res.render('results');
});

app.get("style.css", function(req, res){
	res.render("/static/style.css");
});

app.listen(8000, function() {
 console.log("listening on port 8000");
});