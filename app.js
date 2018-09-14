var express  = require("express");
var app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req, res){
    res.render("landing");
});

var campgrounds = [
    {name : "Salmon Creek", image : "https://d2y0su6ixv655t.cloudfront.net/wp-content/uploads/2016/03/16115458/North-Bend-Park-Campground.jpg"},
    {name : "Rihanna BlackNigger River", image : "https://cdn10.phillymag.com/wp-content/uploads/2014/05/MO-be-well-camping-tom-bean-getty.jpg"},
    {name : "KimJongUn foothils", image : "https://worldinsidepictures.com/wp-content/uploads/2013/07/1106.jpg"}
];

app.get("/campgrounds",function(req,res){
           res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data form form and add to camp grouds array 
    //and redirect back to campgrounds page
    var name = req.body.name;
    var image = req.body.image;  
    var newCampground = {name : name, image:image}
    campgrounds.push(newCampground)
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("yelp camp server started");
});