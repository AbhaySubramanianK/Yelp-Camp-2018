var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
    {name:"Clouds Rest",
     image:"https://images.thrillophilia.com/image/upload/s--vCq8eOoe--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/031/811/original/ooty_6.jpg.jpg?1458195399",
     description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus est sit amet pellentesque blandit. Integer posuere massa sapien, at ultrices nunc volutpat posuere. Donec congue, dolor ac bibendum ultrices, nisl dolor venenatis purus, consectetur semper nulla orci non nisi. Fusce et cursus ligula. Nulla facilisis mi nec enim consequat mattis. Fusce bibendum tellus vel congue convallis. Integer porttitor lorem sit amet metus ullamcorper vulputate. Nunc vehicula nisi at ligula posuere, eu mollis odio tincidunt. Phasellus porttitor ex eget venenatis dignissim. Aliquam nec bibendum quam, at fermentum ante. Fusce vulputate at ipsum vitae hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi aliquet mauris id velit lobortis, ac blandit neque tincidunt. Vivamus a turpis id urna volutpat varius. Integer lacinia, massa interdum sodales ullamcorper, nulla massa venenatis dui, at molestie enim odio vel lacus. Aliquam at purus viverra, volutpat tellus at, faucibus ante."           
    },
    {name:"OOTY",
     image:"https://www.hlimg.com/images/places2see/738X538/13_1490272276p.jpg",
     description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus est sit amet pellentesque blandit. Integer posuere massa sapien, at ultrices nunc volutpat posuere. Donec congue, dolor ac bibendum ultrices, nisl dolor venenatis purus, consectetur semper nulla orci non nisi. Fusce et cursus ligula. Nulla facilisis mi nec enim consequat mattis. Fusce bibendum tellus vel congue convallis. Integer porttitor lorem sit amet metus ullamcorper vulputate. Nunc vehicula nisi at ligula posuere, eu mollis odio tincidunt. Phasellus porttitor ex eget venenatis dignissim. Aliquam nec bibendum quam, at fermentum ante. Fusce vulputate at ipsum vitae hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi aliquet mauris id velit lobortis, ac blandit neque tincidunt. Vivamus a turpis id urna volutpat varius. Integer lacinia, massa interdum sodales ullamcorper, nulla massa venenatis dui, at molestie enim odio vel lacus. Aliquam at purus viverra, volutpat tellus at, faucibus ante."           
    },
    {name:"Canyon floor",
     image:"https://www.skymetweather.com/content/wp-content/uploads/2018/01/ooty-post.jpg",
     description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus est sit amet pellentesque blandit. Integer posuere massa sapien, at ultrices nunc volutpat posuere. Donec congue, dolor ac bibendum ultrices, nisl dolor venenatis purus, consectetur semper nulla orci non nisi. Fusce et cursus ligula. Nulla facilisis mi nec enim consequat mattis. Fusce bibendum tellus vel congue convallis. Integer porttitor lorem sit amet metus ullamcorper vulputate. Nunc vehicula nisi at ligula posuere, eu mollis odio tincidunt. Phasellus porttitor ex eget venenatis dignissim. Aliquam nec bibendum quam, at fermentum ante. Fusce vulputate at ipsum vitae hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi aliquet mauris id velit lobortis, ac blandit neque tincidunt. Vivamus a turpis id urna volutpat varius. Integer lacinia, massa interdum sodales ullamcorper, nulla massa venenatis dui, at molestie enim odio vel lacus. Aliquam at purus viverra, volutpat tellus at, faucibus ante."           
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