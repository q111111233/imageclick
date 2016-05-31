$(document).ready(function() {
  $("#p1").click(function() {
    $("p").removeClass();
    $(this).append('<img src="img/dog.jpg">');


  });

  $("#p2").click(function() {
    $("p").removeClass();
    $("img:last-child").remove();
});
// $("#p1, #p2, #p3").click(function() {
//   $("p").removeClass();
//   $('img[src$="img/dog.jpg"]').remove();
//   });
})
