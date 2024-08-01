/*$(document).ready(function(){
  $('.image-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    infinite: true,/flase tiến/lui
    arrows: false,/* dùng chuột để chạy
    ---chạy sau bao lâu
    autoplay: true,
    autoplaySpeed: 2000, 
    ---ko chạy nữa
    draggable: flase,

    ---thay đổi nút bấm
    
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
      
  });
});*/

$(document).ready(function(){
  $('.banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
});
        