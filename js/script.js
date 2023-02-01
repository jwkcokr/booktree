$(document).ready(function(){

    //swiper
    var swiper = new Swiper(".mySwiper", {
        autoplay:{
          delay: 4000,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        preloadImages: false,
        lazy:true,
        
        lazy:{
            loadOnTransitionStart: true,
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});