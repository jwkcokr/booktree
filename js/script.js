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

      //randomsentence
      const randoms = [
        {
          title : "베르세르크",
          sentence : "도망쳐서 도착한 곳에 낙원은 없다",
          author: "미우라 켄타로",
        },
        {
          title : "어린왕자",
          sentence : "사막이 아름다운 것은, 어디엔가 샘을 숨기고 있기 때문이야",
          author: "셍택쥐베리",
        },
        {
          title : "두번은 없다",
          sentence : "반복되는 하루는 단 한번도 없다. 그러므로 너는 아름답다",
          author: "비스와바 쉼보르스카",
        },
        {
          title : "앵무새 죽이기",
          sentence : "수백 년 동안 졌다고 해서 시작하기도 전에 이기려는 노력도 하지 말아야 할 까닭은 없으니까",
          author: "하퍼 리",
        },
        {
          title : "산에는 꽃이 피네",
          sentence : "무소유란 아무것도 갖지 않는다는 것이 아니라 불필요한 것을 갖지 않는다는 뜻이다",
          author: "법정스님",
        },
        {
          title : "마법의 순간",
          sentence : "삶에 후회를 남기지 말고, 사랑하는 데 이유를 달지 마세요",
          author: "파울로코엘료",
        },
        {
          title : "슬램덩크",
          sentence : "단념하면 바로 그 때 시합은 끝나는 거야. 희망을 버려선 안돼. 마지막까지",
          author: "이노우에 다케히코",
        },
        {
          title : "참을 수 없는 존재의 가벼움",
          sentence : "인간은 가장 깊은 절망의 순간에서조차 아름다움의 법칙에 따라 자신의 삶을 작곡한다",
          author: "밀란 쿤데라",
        },
      ];

      const title = document.querySelector(".random_title");
      const sentence = document.querySelector(".random_sentence");
      const author = document.querySelector(".author");

      const todayRandom = randoms[Math.floor(Math.random()*randoms.length)];
    
      title.innerText = todayRandom.title;
      sentence.innerText = todayRandom.sentence;
      author.innerText = todayRandom.author;
});