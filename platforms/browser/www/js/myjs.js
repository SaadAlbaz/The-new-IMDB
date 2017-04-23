

// A $( document ).ready() block.
$(document).ready(function() {

  function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
};

movie_id = getURLParameter('movie_id');
$.getJSON('http://api.themoviedb.org/3/movie/'+movie_id+'?api_key=bab007b9a6288af1455b8cee1f4f9d36', function(data) {

    var backdrop_path = '';
    var poster_path='';
    var title='';
    var overview=''; //Description
    var vote_average =''; // rating
    var release_date = '';
    var trailers='';
    var reviews='';
    var runtime='';



      backdrop_path = data.backdrop_path;
      poster_path= data.poster_path;
     title=data.title;
     overview=data.overview; //Description
     vote_average =data.vote_average; // rating
     release_date = data.release_date;
     trailers='';
     reviews='';
     runtime=data.runtime;


       var movie1 = '<div class="row background-image"> <div class="col-md-8"> <img class="img-responsive" src="http://image.tmdb.org/t/p/w342/'+poster_path+'" alt=""> </div> <div class="col-md-4"> <h3>Movie Description</h3> <p>'+overview+'</p> <h3>Movie Details</h3> <ul> <li>Release Date: '+release_date+'</li> <li>Rating: '+vote_average+' </li> <li>Runtime: '+runtime+'</li> <li>Rating: '+vote_average+'</li> </ul> </div> </div>';

       var titles='<div class="row"> <div class="col-lg-12 headers"> <h1 class="page-header">'+title+' <small></small> </h1></div> </div>';
       var trailer_key = '';

      $.getJSON('http://api.themoviedb.org/3/movie/'+movie_id+'/videos?api_key=bab007b9a6288af1455b8cee1f4f9d36', function(data2) {
        var x = data2.results.length;

        for (var i = 0; i < x; i++) {
          trailer_key = data2.results[i].key;
          var trailer1='<iframe  src="https://www.youtube.com/embed/'+trailer_key+'"> </iframe>';
          var frame1= '<div class="col-md-8 col-md-4">'+trailer1+'</div>';
          $('.trailer').append(frame1);
        }

       });
    $('.movies').prepend(movie1);
    $('.movies').prepend(titles);

});

});
