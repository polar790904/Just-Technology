// JavaScript Document

$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})


$(document).ready(function(){
 var toggler=0;
    $(".navbar-toggler").click(function(){
    if(toggler==0){
       $(".footer-m").removeClass("fixed-bottom");
	   $(".navbar-toggler-icon").css({transform: 'rotate(' + 90 + 'deg)'});
	   toggler=1;
   }else  {
       $(".footer-m").addClass("fixed-bottom");
	   $(".navbar-toggler-icon").css({transform: 'rotate(' + 0 + 'deg)'});
	   toggler=0;
  }
});
});