$(#slideshow > div:gt(0)").hide();
  
  setInterval(function() {
    $('slideshow > div:first')
      .fadeout(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('slideshow');
}, 30000);
