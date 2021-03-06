
$(document).ready(function() {
    $(window).stellar({
      horizontalScrolling: false 
    });

});

$(document).ready(

  function() {

    // Parallax Scroll
    $("html").niceScroll({
        cursorcolor:"rgba(30,30,30,.5)",
        zindex:999,
        scrollspeed:100,
        mousescrollstep:50,
        cursorborder:"0px solid #fff",
    });

    // Progress Bar
    var winHeight = $(window).height(),
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

      /* Set the max scrollable area */
      max = docHeight - winHeight;
      progressBar.attr('max', max);

      $(document).on('scroll', function(){
      value = $(window).scrollTop();
      progressBar.attr('value', value);
  });

  // Back-To-Top Button

  if ($('#back-to-top').length) {
  var scrollTrigger = 100, // px
    backToTop = function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
  backToTop();
  $(window).on('scroll', function() {
    backToTop();
  });
  $('#back-to-top').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });
}


  }


);
