$(document).ready(function(){

    //banner swiper
    var swiper = new Swiper(".mySwiper", {
        autoplay:{
          delay: 4000,
        },
        loop:true,
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

      //ranking tabmenu
      const rankBtn = $(".tabmenu>ul>li");
      const rankCont = $(".tabmenu>div");

      rankCont.hide().eq(0).show();
      rankBtn.click(function(e){
        e.preventDefault();

        var target = $(this);
        var index = target.index();

        rankBtn.removeClass("active");
        target.addClass("active");

        rankCont.hide().eq(index).show();
      });

      //md swiper
      new Swiper('.md_swiper', {
        slidesPerView: 1,
        loop:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
        
          620: {
            slidesPerView: 3,  //브라우저가 768보다 클 때
            // spaceBetween: 30,
        },
          420: {
            slidesPerView:2,
          }
      },
        
      });
});