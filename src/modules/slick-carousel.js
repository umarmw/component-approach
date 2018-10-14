
//import "jquery";
import $ from "jquery";

import "slick-carousel";

$(".slider").slick({
 
    // normal options...
    infinite: false,
   
    // the magic
    responsive: [{
   
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
   
      }, {
   
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }
   
      }, {
   
        breakpoint: 300,
        settings: "unslick" // destroys slick
   
      }]
  });

  //export default
