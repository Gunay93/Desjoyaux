$('.slider').owlCarousel({
    nav:true,
    loop:true,
    autoplay: true,
    items:1,
    autoplayTimeout:4000,
    animateOut: 'fadeOut',
    dots:false,
    onInitialized: counter,
    onChanged: counter,
});
$('.partnyor-slider').owlCarousel({
    nav:true,
    loop:true,
    autoplay: true,
    items:4,
    autoplayTimeout:4000,
    animateOut: 'slideOutLeft',
    animateIn: 'slideInRight',
    dots:false,
    margin:10
});
// $(window).scroll(function (event) {
//   var scroll = $(window).scrollTop();
//   if(scroll > 40){
//     $('.navbar-fixed').addClass('bg-black');
//   }
//   else{$('.navbar-fixed').removeClass('bg-black');}
// });
// $(document).ready(function(){
//   $('.refbackground').css('height',$('.refbackground').innerWidth());
// });
$('.navbar-toggler').click(function(){
  $('.input-checked').prop('checked',!$('.input-checked').prop("checked"));
  $('.navbar-menu').toggleClass('show');
  $('.navbar-menu .nav-link').toggleClass('fadeInUp animated');
});

$(document).ready(function(){
  var rightNnav = ($("body").outerWidth() - $(".line-cont").outerWidth())/2 - 40;
  $('.owl-nav').css('right',rightNnav);
  var scroll = $(window).scrollTop();
  if(scroll > 40){
    $('.navbar-fixed').addClass('bg-fixed');
  }
  else{$('.navbar-fixed').removeClass('bg-fixed');}
});
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if(scroll > 40){
    $('.navbar-fixed').addClass('bg-fixed');
  }
  else{$('.navbar-fixed').removeClass('bg-fixed');}
});

$(".full-landing-image").ripples({
  resolution: 256,
  perturbance: 0.04,
 });
 $('.block-faq-item-title').click(function(){
  $(this).toggleClass('active');
   $(this).next('.block-faq-item-desc').slideToggle();
 });
 function counter(event) {
  if (!event.namespace) {
    return;
  }
  var slides = event.relatedTarget;
  $('.slider-counter .current').text(slides.relative(slides.current()) + 1);
  $('.slider-counter .total').text(slides.items().length);
}