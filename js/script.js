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


      //recommend
      const recommends = [
        {
          img : "rec1",
          title : "부의 레버리지",
          author : "보도섀퍼",
        },
        {
          img : "rec2",
          title : "슬램덩크",
          author : "이노우에 타케히코",
        },
        {
          img : "rec3",
          title : "돈의속성",
          author : "최승호",
        },
        {
          img : "rec4",
          title : "인간관계론",
          author : "데일 카네기",
        },
        {
          img : "rec5",
          title : "별빛 너머의 별",
          author : "나태주",
        },
        {
          img : "rec6",
          title : "과부하시대",
          author : "로라 판 더누트 립스키",
        },
        {
          img : "rec7",
          title : "위기의 쓸모",
          author : "브루스 파일러",
        },
      ];

      const btn = document.querySelector(".btn");

      btn.addEventListener('click', changeImg);
      function changeImg(){

        const todayRec = recommends[Math.floor(Math.random()*recommends.length)];
        const chosenImg = Math.floor(Math.random()*recommends.length);

        let ranNum = Number(chosenImg);
        let ranNum2 = Number(chosenImg+1);
        const recLen = recommends.length;

        let ranImg1 = `img/rec${ranNum}.png`;
        let ranImg2 = `img/rec${ranNum2}.png`;

        let box1 = document.querySelector(".box1");
        let box2 = document.querySelector(".box2");
        let recImg1 = document.querySelector(".box1 img");
        let recImg2 = document.querySelector(".box2 img");
        let box1_title = document.querySelector(".rec1_title");
        let box1_author = document.querySelector(".rec1_author");
        let box2_title = document.querySelector(".rec2_title");
        let box2_author = document.querySelector(".rec2_author");

        if (((0<ranNum)&&(ranNum<recLen))&&((0<ranNum2)&&(ranNum2<=recLen))){
            
            recImg1.src= ranImg1;
            recImg2.src= ranImg2;
            box1_title.innerText = recommends[ranNum-1].title;
            box2_title.innerText = recommends[ranNum2-1].title;
            box1_author.innerText = recommends[ranNum-1].author;
            box2_author.innerText = recommends[ranNum2-1].author;
            box1.style.backgroundImage = `url(img/rec${ranNum}.png)`;
            box2.style.backgroundImage = `url(img/rec${ranNum2}.png)`;

        }else{
            ranNum = ranNum+2;
            ranImg1 = `img/rec${ranNum}.png`;
            recImg1.src= ranImg1;

            box1_title.innerText = recommends[ranNum-1].title;
            box1_author.innerText = recommends[ranNum-1].author;
            box1.style.backgroundImage = `url(img/rec${ranNum}.png)`;
        }
      }
});