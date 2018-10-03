var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
    {name:"Clouds Rest",
     image:"https://images.thrillophilia.com/image/upload/s--vCq8eOoe--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/031/811/original/ooty_6.jpg.jpg?1458195399",
     description : "Blah Blah Blah"           
    },
    {name:"OOTY",
     image:"https://www.hlimg.com/images/places2see/738X538/13_1490272276p.jpg",
     description : "Blah Blah Blah"           
    },
    {name:"Canyon floor",
     image:"https://www.skymetweather.com/content/wp-content/uploads/2018/01/ooty-post.jpg",
     description : "Blah Blah Blah"           
    }
]

function seedDB(){
    Campground.remove({},function(err){
    if(err){
        console.log(err);
    }else{
        console.log("removed Campground!");
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            }else{
                console.log("added a campground");
                //create a comment
                Comment.create(
                    {
                        text:"This place is great but i wish i had internet",
                        author:"Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        }else{
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created a new comment");
                        }
                });
            }
        });
    });
        }
    });
    // add a few compgrounds
    
}

module.exports = seedDB;