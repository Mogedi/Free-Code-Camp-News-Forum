var website = "http://www.freecodecamp.com/news/hot";
var info = [], i = 0;

$.ajax ({
    url: website,
    dataType: 'json',
    success: function (data) {
        console.log(data.length);
        console.log(Object.keys(data[0]));
        console.log(data[0].headline);
        console.log(data[0].upVotes.length);
        console.log(data[0].rank);
        console.log(data[0].metaDescription);
        console.log(data[6].author.picture);
        console.log(data[6].image === "");
        
        var generic_pic = 'http://www-personal.umich.edu/~bcoppola/students/no-img.jpg';
        
        while (i < data.length) {
            
            $('<div>', {
                'class': 'item',
                html:'<img src="' + image() +'" class="image"><a class="overlay" href="'+ data[i].link +'"><h3 class="title">' + data[i].headline + '</h3><div class="description"><p> Upvotes: ' + data[i].rank  + '</p></div></a>'
                }).appendTo('#container');
            
            i++;
        }
        
        function image() {
            if (data[i].image === "") {
                return data[i].author.picture;
            } else if (data[i].image == "https://s0.wp.com/i/blank.jpg") {
                return data[i].author.picture;
            } else {
                return data[i].image;
            }
        }
        
        /*$('<div>', {
                'class': 'item',
                html:'<img src=' + data[0].image +' class="image"> <a class="overlay" href="#"> <h3 class="title">' + data[0].headline + '</h3><div class="description"><p>' + data[0].metaDescription  + '</p></div></a>"'
                }).appendTo('#container');*/
        
        
        
    var $grid = $('#container').imagesLoaded( function() {
      // init Masonry after all images have loaded
      $grid.masonry({
        "itemSelector" : ".item",
        "columnWidth": ".grid-sizer",
      });
    });
     
        
                
                
                
         
    }
});






