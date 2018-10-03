var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),   
    Campground = require("./models/campground"),
    seedDB = require("./seeds");

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    //get all campgrounds from db
    Campground.find({},function(err, allcampgrounds){
        if(err){
            console.log(err);
            
        }
        else{
             res.render("index", {campgrounds:allcampgrounds});
        }
        
    })
});

app.post("/campgrounds", function(req, res){
    //get data form form and add to camp grouds array 
    //and redirect back to campgrounds page
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name : name, image:image, description:desc };
    //create a new campground and save to database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log("err");
        }
        else{
            res.redirect("/campgrounds");
        }
    });
}); 

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//SHOW - shows more info about one campground

app.get("/campgrounds/:id",function(req, res){
    //find the campground
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log("Error ");
        } else {
            console.log(foundCampground);
            res.render("show", {campground:foundCampground});
        }
    });
});

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("yelp camp server started");
});