'use strict';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30, // 隙間の余白
    // centeredSlides: true, // スライドの中央揃え
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    slidesPerView: 5, //スライド表示数
    
  });