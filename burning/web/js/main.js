require(['jquery', 'jquery/ui', 'slick'], function($) {
    $(document).ready(function() {
        $(".main-banner").slick();
        $(".shop-our-instagram-slick").slick({
            dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
        });
        $('.reason-to-buy ul').slick({
          infinite: true,
          arrows:false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
});

        $(".main-banner-mobile").slick();
            if ($(window).width() < 768){
              var acc = document.getElementsByClassName("accordion");
              var i;
              
              for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                    panel.style.display = "none";
                  } else {
                    panel.style.display = "block";
                  }
                });
              }
              var acc = document.getElementsByClassName("accordion");
              var i;
              for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                  } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                  }
                });
              }    
          };
      
    })
    
})